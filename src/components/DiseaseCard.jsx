import { Star } from "lucide-react";

export default function DiseaseCard({ name, data, onClick }) {
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
      className="bg-white dark:bg-slate-800 rounded-[20px] p-5 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
    >
      <div className="flex justify-between items-start">
        <div>
          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide border ${theme}`}>
            {data.category}
          </span>
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 capitalize mt-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {name}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 font-medium">
            {data.firstLine}
          </p>
        </div>
      </div>
    </div>
  );
}