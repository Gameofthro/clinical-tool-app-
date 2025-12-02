import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { debounce } from "lodash";
import CryptoJS from "crypto-js";

// Constants
const LOCAL_STORAGE_KEY = "clinical_prescriptions";
const THEME_STORAGE_KEY = "clinical_tool_theme";
const FAVORITES_STORAGE_KEY = "clinical_favorites";
const RECENT_STORAGE_KEY = "clinical_recent";
const ENCRYPTION_KEY = "clinical_tool_secure_key"; // In production, use a more secure approach

// Default prescription data
const defaultPrescriptions = {
  "common cold": {
    firstLine: "Symptomatic treatment; no antibiotics.",
    management: [
      "Paracetamol 500 mg TID (e.g., Calpol, Crocin)",
      "Pseudoephedrine or phenylephrine (e.g., Sinarest, Otrivin Cold)",
      "Chlorpheniramine maleate (e.g., Cetrizine Plus, CPM)",
      "Rest, hydration, steam inhalation"
    ],
    symptoms: [
      "Runny or blocked nose",
      "Sneezing",
      "Sore throat",
      "Mild fever",
      "Cough"
    ],
    labs: [
      "Not routinely required unless secondary infection suspected"
    ],
    contraindications: [
      "Avoid decongestants in hypertension, glaucoma",
      "Caution with antihistamines in elderly (anticholinergic effects)"
    ],
    interactions: [
      "Pseudoephedrine may interact with MAOIs, beta-blockers",
      "Paracetamol - monitor with warfarin"
    ],
    specialPopulations: {
      pregnancy: "Category B - Most components safe in pregnancy",
      renal: "No dose adjustment needed for most components",
      hepatic: "Reduce paracetamol dose in liver disease"
    }
  },
  "gastritis": {
    firstLine: "Omeprazole 20 mg once daily before meals (e.g., Omez, Ocid).",
    management: [
      "Antacids for immediate relief (e.g., Gelusil, Digene)",
      "Triple therapy (PPI, amoxicillin, clarithromycin) if H. pylori present"
    ],
    symptoms: [
      "Epigastric pain",
      "Nausea",
      "Bloating",
      "Belching",
      "Early satiety"
    ],
    labs: [
      "H. pylori antigen test (stool or breath test)",
      "CBC to rule out anemia"
    ],
    contraindications: [
      "PPIs - C. difficile risk increased",
      "Clarithromycin - QT prolongation risk"
    ],
    interactions: [
      "PPIs reduce absorption of iron, B12, calcium",
      "Clarithromycin inhibits CYP3A4 (many drug interactions)"
    ],
    specialPopulations: {
      pregnancy: "Category C - Use only if benefits outweigh risks",
      renal: "No adjustment for PPIs, reduce clarithromycin dose in severe impairment",
      hepatic: "Reduce PPI dose in severe liver disease"
    }
  },
  // Additional conditions with enhanced data structure
  "diarrhea": {
    firstLine: "ORS with low-osmolarity + Zinc (e.g., Zinconia, Z&D)",
    management: [
      "Probiotics: Lactobacillus GG or Saccharomyces boulardii (e.g., Vizylac, Econorm)",
      "Antibiotics only if bacterial cause suspected (e.g., Norflox, Metrogyl)"
    ],
    symptoms: [
      "Loose, watery stools",
      "Abdominal cramps",
      "Urgency",
      "Fatigue",
      "Possible fever"
    ],
    labs: [
      "Stool routine and culture",
      "Electrolytes (Na, K, Cl)",
      "CRP if febrile"
    ],
    contraindications: [
      "Antibiotics - only if clear bacterial cause",
      "Antimotility agents contraindicated in dysentery"
    ],
    interactions: [
      "Antibiotics may reduce efficacy of oral contraceptives",
      "Zinc may interfere with certain antibiotics absorption"
    ],
    specialPopulations: {
      pregnancy: "Category B - ORS and zinc safe in pregnancy",
      renal: "Monitor electrolytes closely in renal impairment",
      hepatic: "No specific adjustments needed"
    }
  },
  // More conditions would follow with the enhanced data structure
};

// Main component
export default function ClinicalTool() {
  // State management
  const [prescriptions, setPrescriptions] = useState({});
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [error, setError] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  
  // Form states for new/edit disease
  const [editMode, setEditMode] = useState(false);
  const [currentDisease, setCurrentDisease] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [formData, setFormData] = useState({
    disease: "",
    firstLine: "",
    management: "",
    symptoms: "",
    labs: "",
    contraindications: "",
    interactions: "",
    pregnancy: "",
    renal: "",
    hepatic: ""
  });
  
  // Dose calculator states
  const [ageGroup, setAgeGroup] = useState("adult");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [adultDose, setAdultDose] = useState("");
  const [calculatedDose, setCalculatedDose] = useState(null);
  const [doseMethod, setDoseMethod] = useState("clarks");
  
  // Toast notifications
  const { toast } = useToast();

  // Load data from localStorage on component mount
  useEffect(() => {
    // Load theme preference
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme) {
      setDarkMode(storedTheme === "dark");
    } else {
      // Check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
    }
    
    // Load prescriptions with decryption
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      try {
        const decrypted = CryptoJS.AES.decrypt(stored, ENCRYPTION_KEY).toString(CryptoJS.enc.Utf8);
        if (decrypted) {
          setPrescriptions(JSON.parse(decrypted));
        } else {
          setPrescriptions(defaultPrescriptions);
        }
      } catch (e) {
        console.error("Decryption failed, using default data:", e);
        setPrescriptions(defaultPrescriptions);
      }
    } else {
      setPrescriptions(defaultPrescriptions);
    }
    
    // Load favorites
    const storedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
    
    // Load recently viewed
    const storedRecent = localStorage.getItem(RECENT_STORAGE_KEY);
    if (storedRecent) {
      setRecentlyViewed(JSON.parse(storedRecent));
    }
  }, []);

  // Save theme preference when it changes
  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, darkMode ? "dark" : "light");
    // Apply theme to document
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((searchTerm) => {
      if (!searchTerm.trim()) {
        setResults([]);
        return;
      }
      
      const key = searchTerm.trim().toLowerCase();
      
      // Enhanced search: match any part of disease name or symptoms
      const matched = Object.entries(prescriptions).filter(([disease, data]) => {
        // Match disease name
        if (disease.toLowerCase().includes(key)) return true;
        
        // Match symptoms
        if (data.symptoms && data.symptoms.some(symptom => 
          symptom.toLowerCase().includes(key))) return true;
          
        return false;
      });
      
      setResults(matched);
    }, 300),
    [prescriptions]
  );

  // Update search results when query changes
  useEffect(() => {
    debouncedSearch(query);
  }, [query, debouncedSearch]);

  // Add to recently viewed
  const addToRecentlyViewed = (disease) => {
    setRecentlyViewed(prev => {
      const filtered = prev.filter(item => item !== disease);
      const updated = [disease, ...filtered].slice(0, 5);
      localStorage.setItem(RECENT_STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  // Toggle favorite status
  const toggleFavorite = (disease) => {
    setFavorites(prev => {
      let updated;
      if (prev.includes(disease)) {
        updated = prev.filter(item => item !== disease);
      } else {
        updated = [...prev, disease];
      }
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(updated));
      
      toast({
        title: prev.includes(disease) ? "Removed from favorites" : "Added to favorites",
        description: disease,
      });
      
      return updated;
    });
  };

  // Handle admin authentication
  const handleAdminAuth = () => {
    // In a real app, use proper authentication
    if (adminPassword === import.meta.env.VITE_ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setIsAdmin(true);
      setShowAuthDialog(false);
      setAdminPassword("");
      
      toast({
        title: "Admin access granted",
        description: "You now have access to administrative functions",
      });
    } else {
      setError("Invalid password");
    }
  };

  // Handle admin panel toggle
  const toggleAdminPanel = () => {
    if (isAdmin) {
      setIsAdmin(false);
      setIsAuthenticated(false);
    } else {
      setShowAuthDialog(true);
    }
  };

  // Handle form input changes
  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Reset form data
  const resetForm = () => {
    setFormData({
      disease: "",
      firstLine: "",
      management: "",
      symptoms: "",
      labs: "",
      contraindications: "",
      interactions: "",
      pregnancy: "",
      renal: "",
      hepatic: ""
    });
    setEditMode(false);
    setCurrentDisease("");
    setShowPreview(false);
    setError("");
  };

  // Load disease data for editing
  const loadDiseaseForEdit = (disease) => {
    const data = prescriptions[disease];
    if (!data) return;
    
    setCurrentDisease(disease);
    setFormData({
      disease: disease,
      firstLine: data.firstLine || "",
      management: data.management ? data.management.join("\n") : "",
      symptoms: data.symptoms ? data.symptoms.join("\n") : "",
      labs: data.labs ? data.labs.join("\n") : "",
      contraindications: data.contraindications ? data.contraindications.join("\n") : "",
      interactions: data.interactions ? data.interactions.join("\n") : "",
      pregnancy: data.specialPopulations?.pregnancy || "",
      renal: data.specialPopulations?.renal || "",
      hepatic: data.specialPopulations?.hepatic || ""
    });
    setEditMode(true);
  };

  // Delete a disease
  const handleDeleteDisease = (disease) => {
    setShowConfirmDialog(true);
    setCurrentDisease(disease);
  };

  // Confirm delete action
  const confirmDelete = () => {
    const updatedPrescriptions = { ...prescriptions };
    delete updatedPrescriptions[currentDisease];
    
    // Update state and localStorage
    setPrescriptions(updatedPrescriptions);
    const encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(updatedPrescriptions), 
      ENCRYPTION_KEY
    ).toString();
    localStorage.setItem(LOCAL_STORAGE_KEY, encrypted);
    
    // Update favorites if needed
    if (favorites.includes(currentDisease)) {
      const updatedFavorites = favorites.filter(item => item !== currentDisease);
      setFavorites(updatedFavorites);
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(updatedFavorites));
    }
    
    // Update recently viewed if needed
    if (recentlyViewed.includes(currentDisease)) {
      const updatedRecent = recentlyViewed.filter(item => item !== currentDisease);
      setRecentlyViewed(updatedRecent);
      localStorage.setItem(RECENT_STORAGE_KEY, JSON.stringify(updatedRecent));
    }
    
    setShowConfirmDialog(false);
    setCurrentDisease("");
    
    toast({
      title: "Disease deleted",
      description: `${currentDisease} has been removed from the database`,
    });
  };

  // Handle add or edit submission
  const handleAddOrEdit = () => {
    // Validate form
    if (!formData.disease || !formData.firstLine) {
      setError("Disease name and first-line treatment are required.");
      return;
    }
    
    const key = formData.disease.trim().toLowerCase();
    
    // Check if disease exists (for add mode)
    if (!editMode && prescriptions[key]) {
      setError("This disease already exists. Please edit instead.");
      return;
    }
    
    // Show preview before saving
    if (!showPreview) {
      setShowPreview(true);
      return;
    }
    
    // Process form data
    const updatedPrescriptions = {
      ...prescriptions,
      [key]: {
        firstLine: formData.firstLine,
        management: formData.management.split("\n").map(item => item.trim()).filter(Boolean),
        symptoms: formData.symptoms.split("\n").map(item => item.trim()).filter(Boolean),
        labs: formData.labs.split("\n").map(item => item.trim()).filter(Boolean),
        contraindications: formData.contraindications.split("\n").map(item => item.trim()).filter(Boolean),
        interactions: formData.interactions.split("\n").map(item => item.trim()).filter(Boolean),
        specialPopulations: {
          pregnancy: formData.pregnancy,
          renal: formData.renal,
          hepatic: formData.hepatic
        }
      }
    };
    
    // If editing, remove old entry if name changed
    if (editMode && currentDisease !== key) {
      delete updatedPrescriptions[currentDisease];
      
      // Update favorites if needed
      if (favorites.includes(currentDisease)) {
        const updatedFavorites = favorites.map(item => 
          item === currentDisease ? key : item
        );
        setFavorites(updatedFavorites);
        localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(updatedFavorites));
      }
      
      // Update recently viewed if needed
      if (recentlyViewed.includes(currentDisease)) {
        const updatedRecent = recentlyViewed.map(item => 
          item === currentDisease ? key : item
        );
        setRecentlyViewed(updatedRecent);
        localStorage.setItem(RECENT_STORAGE_KEY, JSON.stringify(updatedRecent));
      }
    }
    
    // Update state and localStorage with encryption
    setPrescriptions(updatedPrescriptions);
    const encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(updatedPrescriptions), 
      ENCRYPTION_KEY
    ).toString();
    localStorage.setItem(LOCAL_STORAGE_KEY, encrypted);
    
    // Reset form
    resetForm();
    
    toast({
      title: editMode ? "Disease updated" : "Disease added",
      description: `${formData.disease} has been ${editMode ? "updated" : "added"} successfully`,
    });
  };

  // Export to PDF
  const exportToPDF = () => {
    try {
      const doc = new jsPDF();
      doc.text("Empirical Prescription Tool", 10, 10);
      
      let yPos = 20;
      Object.entries(prescriptions).forEach(([disease, data], i) => {
        // Check if we need a new page
        if (yPos > 250) {
          doc.addPage();
          yPos = 20;
        }
        
        doc.setFontSize(12);
        doc.setFont(undefined, 'bold');
        doc.text(disease.toUpperCase(), 10, yPos);
        doc.setFont(undefined, 'normal');
        
        yPos += 10;
        doc.setFontSize(10);
        doc.text(`First-line: ${data.firstLine}`, 15, yPos);
        
        yPos += 10;
        doc.text("Management:", 15, yPos);
        yPos += 5;
        data.management.forEach(item => {
          doc.text(`• ${item}`, 20, yPos);
          yPos += 5;
        });
        
        yPos += 5;
        doc.text("Symptoms:", 15, yPos);
        yPos += 5;
        data.symptoms.forEach(item => {
          doc.text(`• ${item}`, 20, yPos);
          yPos += 5;
        });
        
        yPos += 5;
        doc.text("Lab Parameters:", 15, yPos);
        yPos += 5;
        data.labs.forEach(item => {
          doc.text(`• ${item}`, 20, yPos);
          yPos += 5;
        });
        
        // Add contraindications if available
        if (data.contraindications && data.contraindications.length > 0) {
          yPos += 5;
          doc.text("Contraindications:", 15, yPos);
          yPos += 5;
          data.contraindications.forEach(item => {
            doc.text(`• ${item}`, 20, yPos);
            yPos += 5;
          });
        }
        
        yPos += 10;
      });
      
      doc.save("prescriptions.pdf");
      
      toast({
        title: "PDF exported",
        description: "Your prescription data has been exported to PDF",
      });
    } catch (error) {
      console.error("PDF export failed:", error);
      toast({
        title: "Export failed",
        description: "There was an error exporting to PDF",
        variant: "destructive",
      });
    }
  };

  // Generate drug reference links
  const generateDrugLinks = (text) => {
    const match = text.match(/\(e\.g\., ([^)]+)\)/);
    if (match) {
      const brands = match[1].split(", ");
      return (
        <span className="ml-2">
          {brands.map((brand, i) => (
            <span key={i}>
              {i > 0 && " | "}
              <a
                href={`https://www.drugs.com/search.php?searchterm=${encodeURIComponent(brand)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
                aria-label={`Look up ${brand} on Drugs.com`}
              >
                {brand} (Drugs.com)
              </a>
              <a
                href={`https://reference.medscape.com/search?q=${encodeURIComponent(brand)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline ml-1"
                aria-label={`Look up ${brand} on Medscape`}
              >
                (Medscape)
              </a>
            </span>
          ))}
        </span>
      );
    }
    return null;
  };

  // Calculate drug dose
  const calculateDose = () => {
    // Input validation
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const dose = parseFloat(adultDose);
    const ageVal = parseFloat(age);
    
    // Validate inputs
    if (!dose || isNaN(dose) || dose <= 0) {
      setError("Please enter a valid adult dose");
      return;
    }
    
    if (!w || isNaN(w) || w <= 0) {
      setError("Please enter a valid weight");
      return;
    }
    
    // Validate weight ranges
    if (w > 300) {
      setError("Weight seems too high. Please verify.");
      return;
    }
    
    let finalDose = null;
    
    switch (doseMethod) {
      case "clarks": // Clark's rule
        finalDose = (w / 70) * dose;
        break;
      case "youngs": // Young's rule
        if (!ageVal || isNaN(ageVal) || ageVal <= 0) {
          setError("Please enter a valid age for Young's rule");
          return;
        }
        finalDose = (ageVal / (ageVal + 12)) * dose;
        break;
      case "frieds": // Fried's rule
        if (!ageVal || isNaN(ageVal) || ageVal <= 0) {
          setError("Please enter a valid age for Fried's rule");
          return;
        }
        finalDose = (ageVal * 4 + 1) / 100 * dose;
        break;
      case "bsa": // BSA method
        if (!h || isNaN(h) || h <= 0) {
          setError("Please enter a valid height for BSA calculation");
          return;
        }
        // Validate height range
        if (h > 250) {
          setError("Height seems too high. Please verify.");
          return;
        }
        const bsa = Math.sqrt((w * h) / 3600);
        finalDose = (bsa / 1.73) * dose;
        break;
      default:
        finalDose = dose;
    }
    
    setCalculatedDose(finalDose.toFixed(2));
    setError("");
    
    toast({
      title: "Dose calculated",
      description: `Calculated dose: ${finalDose.toFixed(2)} mg`,
    });
  };

  // Print prescription
  const printPrescription = (disease) => {
    const data = prescriptions[disease];
    if (!data) return;
    
    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    
    // Generate print-friendly HTML
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Prescription: ${disease}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
          }
          h1 {
            text-align: center;
            margin-bottom: 20px;
          }
          h2 {
            margin-top: 15px;
            margin-bottom: 5px;
          }
          ul {
            margin-top: 5px;
          }
          .footer {
            margin-top: 30px;
            font-size: 0.8em;
            text-align: center;
            color: #666;
          }
          @media print {
            .no-print {
              display: none;
            }
          }
        </style>
      </head>
      <body>
        <h1>Treatment Guide: ${disease.toUpperCase()}</h1>
        
        <h2>First-line Treatment:</h2>
        <p>${data.firstLine}</p>
        
        <h2>Management:</h2>
        <ul>
          ${data.management.map(item => `<li>${item}</li>`).join('')}
        </ul>
        
        <h2>Common Symptoms:</h2>
        <ul>
          ${data.symptoms.map(item => `<li>${item}</li>`).join('')}
        </ul>
        
        <h2>Recommended Labs:</h2>
        <ul>
          ${data.labs.map(item => `<li>${item}</li>`).join('')}
        </ul>
        
        ${data.contraindications ? `
          <h2>Contraindications:</h2>
          <ul>
            ${data.contraindications.map(item => `<li>${item}</li>`).join('')}
          </ul>
        ` : ''}
        
        ${data.interactions ? `
          <h2>Drug Interactions:</h2>
          <ul>
            ${data.interactions.map(item => `<li>${item}</li>`).join('')}
          </ul>
        ` : ''}
        
        ${data.specialPopulations ? `
          <h2>Special Populations:</h2>
          <ul>
            ${data.specialPopulations.pregnancy ? `<li><strong>Pregnancy:</strong> ${data.specialPopulations.pregnancy}</li>` : ''}
            ${data.specialPopulations.renal ? `<li><strong>Renal Impairment:</strong> ${data.specialPopulations.renal}</li>` : ''}
            ${data.specialPopulations.hepatic ? `<li><strong>Hepatic Impairment:</strong> ${data.specialPopulations.hepatic}</li>` : ''}
          </ul>
        ` : ''}
        
        <div class="footer">
          Generated by Empirical Prescription Tool | ${new Date().toLocaleDateString()}
        </div>
        
        <div class="no-print" style="text-align: center; margin-top: 30px;">
          <button onclick="window.print()">Print</button>
          <button onclick="window.close()">Close</button>
        </div>
      </body>
      </html>
    `);
    
    printWindow.document.close();
  };

  // Import/Export data
  const exportData = () => {
    try {
      const dataStr = JSON.stringify(prescriptions);
      const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
      
      const exportFileDefaultName = `prescription_data_${new Date().toISOString().slice(0, 10)}.json`;
      
      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();
      
      toast({
        title: "Data exported",
        description: "Your prescription data has been exported successfully",
      });
    } catch (error) {
      console.error("Export failed:", error);
      toast({
        title: "Export failed",
        description: "There was an error exporting your data",
        variant: "destructive",
      });
    }
  };

  // Import data handler
  const handleImportClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = (event) => {
      const file = event.target.files[0];
      if (!file) return;
      
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedData = JSON.parse(e.target.result);
          
          // Validate imported data structure
          if (typeof importedData !== 'object') throw new Error("Invalid data format");
          
          // Update state and localStorage with encryption
          setPrescriptions(importedData);
          const encrypted = CryptoJS.AES.encrypt(
            JSON.stringify(importedData), 
            ENCRYPTION_KEY
          ).toString();
          localStorage.setItem(LOCAL_STORAGE_KEY, encrypted);
          
          toast({
            title: "Data imported",
            description: "Your prescription data has been imported successfully",
          });
        } catch (error) {
          console.error("Import failed:", error);
          toast({
            title: "Import failed",
            description: "There was an error importing your data",
            variant: "destructive",
          });
        }
      };
      reader.readAsText(file);
    };
    input.click();
  };

  return (
    <div className={`max-w-4xl mx-auto p-4 space-y-4 ${darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}`}>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Empirical Prescription Tool</h1>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-3">
          <Input 
            placeholder="Search by disease name or symptom..." 
            value={query} 
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search diseases or symptoms"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={toggleAdminPanel} className="flex-1">
            {isAdmin ? "Exit Admin" : "Admin Panel"}
          </Button>
          <Button onClick={exportToPDF} className="flex-1">
            Export PDF
          </Button>
        </div>
      </div>

      {/* Tabs for different views */}
      <Tabs defaultValue="search" className="w-full">
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="search">Search Results</TabsTrigger>
          <TabsTrigger value="favorites">Favorites</TabsTrigger>
          <TabsTrigger value="recent">Recently Viewed</TabsTrigger>
        </TabsList>
        
        {/* Search Results Tab */}
        <TabsContent value="search" className="space-y-4">
          {results.length > 0 ? (
            results.map(([disease, result]) => (
              <DiseaseCard 
                key={disease}
                disease={disease}
                data={result}
                isFavorite={favorites.includes(disease)}
                onFavoriteToggle={() => toggleFavorite(disease)}
                onView={() => addToRecentlyViewed(disease)}
                onEdit={isAdmin ? () => loadDiseaseForEdit(disease) : undefined}
                onDelete={isAdmin ? () => handleDeleteDisease(disease) : undefined}
                onPrint={() => printPrescription(disease)}
                generateDrugLinks={generateDrugLinks}
              />
            ))
          ) : (
            query && <p className="text-center text-red-500">No match found for "{query}".</p>
          )}
        </TabsContent>
        
        {/* Favorites Tab */}
        <TabsContent value="favorites" className="space-y-4">
          {favorites.length > 0 ? (
            favorites.map(disease => {
              const data = prescriptions[disease];
              return data ? (
                <DiseaseCard 
                  key={disease}
                  disease={disease}
                  data={data}
                  isFavorite={true}
                  onFavoriteToggle={() => toggleFavorite(disease)}
                  onView={() => addToRecentlyViewed(disease)}
                  onEdit={isAdmin ? () => loadDiseaseForEdit(disease) : undefined}
                  onDelete={isAdmin ? () => handleDeleteDisease(disease) : undefined}
                  onPrint={() => printPrescription(disease)}
                  generateDrugLinks={generateDrugLinks}
                />
              ) : null;
            })
          ) : (
            <p className="text-center">No favorites added yet. Click the star icon on any disease to add it to favorites.</p>
          )}
        </TabsContent>
        
        {/* Recently Viewed Tab */}
        <TabsContent value="recent" className="space-y-4">
          {recentlyViewed.length > 0 ? (
            recentlyViewed.map(disease => {
              const data = prescriptions[disease];
              return data ? (
                <DiseaseCard 
                  key={disease}
                  disease={disease}
                  data={data}
                  isFavorite={favorites.includes(disease)}
                  onFavoriteToggle={() => toggleFavorite(disease)}
                  onView={() => {}} // Already in recently viewed
                  onEdit={isAdmin ? () => loadDiseaseForEdit(disease) : undefined}
                  onDelete={isAdmin ? () => handleDeleteDisease(disease) : undefined}
                  onPrint={() => printPrescription(disease)}
                  generateDrugLinks={generateDrugLinks}
                />
              ) : null;
            })
          ) : (
            <p className="text-center">No recently viewed diseases. Search and view diseases to see them here.</p>
          )}
        </TabsContent>
      </Tabs>

      {/* Dose Calculator */}
      <div className="space-y-4 border-t pt-4">
        <h2 className="text-xl font-semibold">Drug Dose Calculator</h2>
        {error && <p className="text-red-500">{error}</p>}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="dose-method">Calculation Method</Label>
            <Select value={doseMethod} onValueChange={setDoseMethod}>
              <SelectTrigger id="dose-method">
                <SelectValue placeholder="Select method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="adult">Adult (No Adjustment)</SelectItem>
                <SelectItem value="clarks">Pediatric (Clark's Rule)</SelectItem>
                <SelectItem value="youngs">Pediatric (Young's Rule)</SelectItem>
                <SelectItem value="frieds">Pediatric (Fried's Rule)</SelectItem>
                <SelectItem value="bsa">Pediatric (BSA Method)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="adult-dose">Adult Dose (mg)</Label>
            <Input 
              id="adult-dose"
              placeholder="Adult Dose (mg)" 
              value={adultDose} 
              onChange={e => {
                setAdultDose(e.target.value);
                setCalculatedDose(null);
              }} 
              type="number"
              min="0"
            />
          </div>
          
          <div>
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input 
              id="weight"
              placeholder="Weight (kg)" 
              value={weight} 
              onChange={e => {
                setWeight(e.target.value);
                setCalculatedDose(null);
              }} 
              type="number"
              min="0"
              max="300"
            />
          </div>
          
          {(doseMethod === "youngs" || doseMethod === "frieds") && (
            <div>
              <Label htmlFor="age">Age (years)</Label>
              <Input 
                id="age"
                placeholder="Age (years)" 
                value={age} 
                onChange={e => {
                  setAge(e.target.value);
                  setCalculatedDose(null);
                }} 
                type="number"
                min="0"
                max="120"
              />
            </div>
          )}
          
          {doseMethod === "bsa" && (
            <div>
              <Label htmlFor="height">Height (cm)</Label>
              <Input 
                id="height"
                placeholder="Height (cm)" 
                value={height} 
                onChange={e => {
                  setHeight(e.target.value);
                  setCalculatedDose(null);
                }} 
                type="number"
                min="0"
                max="250"
              />
            </div>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <Button onClick={calculateDose}>Calculate Dose</Button>
          {calculatedDose && (
            <div className="text-right">
              <p className="font-bold text-lg">Calculated Dose: {calculatedDose} mg</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Using {
                  doseMethod === "clarks" ? "Clark's Rule" :
                  doseMethod === "youngs" ? "Young's Rule" :
                  doseMethod === "frieds" ? "Fried's Rule" :
                  doseMethod === "bsa" ? "BSA Method" : "Adult Dose"
                }
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Admin Panel */}
      {isAdmin && (
        <div className="p-4 border rounded-xl space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Admin Panel</h2>
            <div className="flex gap-2">
              <Button variant="outline" onClick={exportData}>Export Data</Button>
              <Button variant="outline" onClick={handleImportClick}>Import Data</Button>
            </div>
          </div>
          
          {error && <p className="text-red-500">{error}</p>}
          
          {/* Disease Form */}
          <div className="space-y-4">
            <Input 
              placeholder="Disease Name" 
              value={formData.disease} 
              onChange={(e) => handleFormChange("disease", e.target.value)} 
            />
            
            <Input 
              placeholder="First-line Treatment" 
              value={formData.firstLine} 
              onChange={(e) => handleFormChange("firstLine", e.target.value)} 
            />
            
            <Textarea 
              placeholder="Management steps (one per line)" 
              value={formData.management} 
              onChange={(e) => handleFormChange("management", e.target.value)} 
            />
            
            <Textarea 
              placeholder="Symptoms (one per line)" 
              value={formData.symptoms} 
              onChange={(e) => handleFormChange("symptoms", e.target.value)} 
            />
            
            <Textarea 
              placeholder="Lab Parameters (one per line)" 
              value={formData.labs} 
              onChange={(e) => handleFormChange("labs", e.target.value)} 
            />
            
            <Textarea 
              placeholder="Contraindications (one per line)" 
              value={formData.contraindications} 
              onChange={(e) => handleFormChange("contraindications", e.target.value)} 
            />
            
            <Textarea 
              placeholder="Drug Interactions (one per line)" 
              value={formData.interactions} 
              onChange={(e) => handleFormChange("interactions", e.target.value)} 
            />
            
            <h3 className="font-semibold">Special Populations</h3>
            
            <Input 
              placeholder="Pregnancy Category" 
              value={formData.pregnancy} 
              onChange={(e) => handleFormChange("pregnancy", e.target.value)} 
            />
            
            <Input 
              placeholder="Renal Impairment Adjustments" 
              value={formData.renal} 
              onChange={(e) => handleFormChange("renal", e.target.value)} 
            />
            
            <Input 
              placeholder="Hepatic Impairment Adjustments" 
              value={formData.hepatic} 
              onChange={(e) => handleFormChange("hepatic", e.target.value)} 
            />
            
            <div className="flex gap-2">
              <Button onClick={handleAddOrEdit}>
                {showPreview ? "Save" : "Preview"}
              </Button>
              {(showPreview || editMode) && (
                <Button variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              )}
            </div>
          </div>
          
          {/* Preview */}
          {showPreview && (
            <div className="border p-4 rounded-md mt-4">
              <h3 className="font-bold text-lg">Preview</h3>
              <p><strong>Disease:</strong> {formData.disease}</p>
              <p><strong>First-line Treatment:</strong> {formData.firstLine}</p>
              
              <p><strong>Management:</strong></p>
              <ul className="list-disc pl-5">
                {formData.management.split("\n").map((item, idx) => (
                  item.trim() && <li key={idx}>{item}</li>
                ))}
              </ul>
              
              <p><strong>Symptoms:</strong></p>
              <ul className="list-disc pl-5">
                {formData.symptoms.split("\n").map((item, idx) => (
                  item.trim() && <li key={idx}>{item}</li>
                ))}
              </ul>
              
              <p><strong>Lab Parameters:</strong></p>
              <ul className="list-disc pl-5">
                {formData.labs.split("\n").map((item, idx) => (
                  item.trim() && <li key={idx}>{item}</li>
                ))}
              </ul>
              
              {formData.contraindications && (
                <>
                  <p><strong>Contraindications:</strong></p>
                  <ul className="list-disc pl-5">
                    {formData.contraindications.split("\n").map((item, idx) => (
                      item.trim() && <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
              
              {formData.interactions && (
                <>
                  <p><strong>Drug Interactions:</strong></p>
                  <ul className="list-disc pl-5">
                    {formData.interactions.split("\n").map((item, idx) => (
                      item.trim() && <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
              
              <p><strong>Special Populations:</strong></p>
              <ul className="list-disc pl-5">
                {formData.pregnancy && <li><strong>Pregnancy:</strong> {formData.pregnancy}</li>}
                {formData.renal && <li><strong>Renal Impairment:</strong> {formData.renal}</li>}
                {formData.hepatic && <li><strong>Hepatic Impairment:</strong> {formData.hepatic}</li>}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Authentication Dialog */}
      <Dialog open={showAuthDialog} onOpenChange={setShowAuthDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Admin Authentication</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <p>Please enter the admin password to continue:</p>
            <Input 
              type="password" 
              placeholder="Password" 
              value={adminPassword} 
              onChange={(e) => setAdminPassword(e.target.value)}
            />
            {error && <p className="text-red-500">{error}</p>}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAuthDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleAdminAuth}>
              Login
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p>Are you sure you want to delete "{currentDisease}"?</p>
            <p className="text-red-500">This action cannot be undone.</p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConfirmDialog(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Toast notifications */}
      <Toaster />
    </div>
  );
}

// Disease Card Component
function DiseaseCard({ 
  disease, 
  data, 
  isFavorite, 
  onFavoriteToggle, 
  onView, 
  onEdit, 
  onDelete,
  onPrint,
  generateDrugLinks 
}) {
  const [expanded, setExpanded] = useState(false);
  
  const handleView = () => {
    setExpanded(!expanded);
    if (!expanded) onView();
  };
  
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div 
          className="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 flex justify-between items-center"
          onClick={handleView}
        >
          <h3 className="font-semibold text-lg">{disease}</h3>
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={(e) => {
                e.stopPropagation();
                onFavoriteToggle();
              }}
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              {isFavorite ? "★" : "☆"}
            </Button>
            {expanded && (
              <Button 
                variant="ghost" 
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  onPrint();
                }}
                aria-label="Print prescription"
              >
                🖨️
              </Button>
            )}
          </div>
        </div>
        
        {expanded && (
          <div className="p-4 border-t space-y-3">
            <div>
              <p className="font-semibold">First-line Treatment:</p>
              <p>{data.firstLine} {generateDrugLinks(data.firstLine)}</p>
            </div>
            
            <div>
              <p className="font-semibold">Management:</p>
              <ul className="list-disc pl-5">
                {data.management.map((item, idx) => (
                  <li key={idx}>{item} {generateDrugLinks(item)}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <p className="font-semibold">Symptoms:</p>
              <ul className="list-disc pl-5">
                {data.symptoms.map((symptom, idx) => (
                  <li key={idx}>{symptom}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <p className="font-semibold">Lab Parameters:</p>
              <ul className="list-disc pl-5">
                {data.labs.map((lab, idx) => (
                  <li key={idx}>{lab}</li>
                ))}
              </ul>
            </div>
            
            {data.contraindications && data.contraindications.length > 0 && (
              <div>
                <p className="font-semibold">Contraindications:</p>
                <ul className="list-disc pl-5">
                  {data.contraindications.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {data.interactions && data.interactions.length > 0 && (
              <div>
                <p className="font-semibold">Drug Interactions:</p>
                <ul className="list-disc pl-5">
                  {data.interactions.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {data.specialPopulations && (
              <div>
                <p className="font-semibold">Special Populations:</p>
                <ul className="list-disc pl-5">
                  {data.specialPopulations.pregnancy && (
                    <li><strong>Pregnancy:</strong> {data.specialPopulations.pregnancy}</li>
                  )}
                  {data.specialPopulations.renal && (
                    <li><strong>Renal Impairment:</strong> {data.specialPopulations.renal}</li>
                  )}
                  {data.specialPopulations.hepatic && (
                    <li><strong>Hepatic Impairment:</strong> {data.specialPopulations.hepatic}</li>
                  )}
                </ul>
              </div>
            )}
            
            {(onEdit || onDelete) && (
              <div className="flex justify-end gap-2 pt-2">
                {onEdit && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={(e) => {
                      e.stopPropagation();
                      onEdit();
                    }}
                  >
                    Edit
                  </Button>
                )}
                {onDelete && (
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    onClick={(e) => {
                      e.stopPropagation();
                      onDelete();
                    }}
                  >
                    Delete
                  </Button>
                )}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
