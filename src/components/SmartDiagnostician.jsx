// src/components/SmartDiagnostician.jsx

// ... existing imports

const handleAiSearch = async () => {
    // 1. Reset UI states
    setLoading(true);
    setShowSuggestions(false);
    setError(null);

    try {
        // 2. Prepare payload
        const payload = {
            symptoms: selectedSymptoms // Array of strings from your state
        };

        // 3. Fetch from the new flat API endpoint
        const response = await fetch('/api/diagnose', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }

        const data = await response.json();
        
        // 4. Update state with results
        setAiResults(data.diagnosis); // Adjust based on your actual response structure

    } catch (err) {
        console.error("Diagnosis failed:", err);
        setError("Failed to generate diagnosis. Please try again.");
    } finally {
        setLoading(false);
    }
};

// ... rest of component