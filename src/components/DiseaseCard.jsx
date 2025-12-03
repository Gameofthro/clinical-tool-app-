import { Star } from "lucide-react";

export default function DiseaseCard({ name, data, isFav, onToggle, onClick }) {
  const colors = {
    red: "bg-rose-50 text-rose-700 border-rose-200",
    blue: "bg-sky-50 text-sky-700 border-sky-200",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
    purple: "bg-violet-50 text-violet-700 border-violet-200",
    orange: "bg-amber-50 text-amber-700 border-amber-200",
  };
  const theme = colors[data.color] || colors.blue;

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-[20px] p-5 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
    >
      <div className="flex justify-between items-start">
        <div>
          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide border ${theme}`}>
            {data.category}
          </span>
          <h3 className="text-xl font-bold text-slate-800 capitalize mt-2 group-hover:text-blue-600 transition-colors">
            {name}
          </h3>
          <p className="text-sm text-slate-500 mt-1 line-clamp-2 font-medium">
            {data.firstLine}
          </p>
        </div>
        <button 
          onClick={(e) => { e.stopPropagation(); onToggle(); }} 
          className="p-2 hover:bg-slate-50 rounded-full transition active:scale-90"
        >
          <Star className={`h-6 w-6 ${isFav ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}`} />
        </button>
      </div>
    </div>
  );
}