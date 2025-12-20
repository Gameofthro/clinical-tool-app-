import React, { useState } from 'react';
import { X, Mail, MessageSquare, Copy, Check, HeartHandshake } from 'lucide-react';

export default function ContactModal({ isOpen, onClose, email }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-[3rem] shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        
        {/* Header with Background Decor */}
        <div className="relative p-8 text-center bg-blue-600">
          <button onClick={onClose} className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors">
            <X size={24} />
          </button>
          <div className="bg-white/20 p-4 rounded-3xl w-fit mx-auto mb-4">
            <HeartHandshake className="text-white" size={32} />
          </div>
          <h2 className="text-xl font-black text-white uppercase tracking-tight">Clinical Support</h2>
        </div>

        <div className="p-8 space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-lg font-black text-slate-800 dark:text-white">Your suggestions are our priority.</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium px-4">
              Whether you've found a clinical discrepancy or have a feature suggestion, 
              your feedback helps us empower the next generation of clinicians.
            </p>
          </div>

          <div className="space-y-3">
            {/* Primary Action: Open Mail App */}
            <a 
              href={`mailto:${email}`}
              className="flex items-center justify-between w-full p-4 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-100 dark:border-blue-800 rounded-2xl group hover:bg-blue-600 transition-all"
            >
              <div className="flex items-center gap-3">
                <Mail className="text-blue-600 group-hover:text-white" size={20} />
                <span className="text-sm font-bold text-blue-900 dark:text-blue-100 group-hover:text-white">Open Mail App</span>
              </div>
              <MessageSquare className="text-blue-300 group-hover:text-white/50" size={16} />
            </a>

            {/* Secondary Action: Copy Email */}
            <button 
              onClick={handleCopy}
              className="flex items-center justify-between w-full p-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl group hover:border-slate-400 transition-all"
            >
              <div className="flex items-center gap-3">
                {copied ? <Check className="text-emerald-500" size={20} /> : <Copy className="text-slate-400" size={20} />}
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                  {copied ? "Email Copied!" : email}
                </span>
              </div>
              {!copied && <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Copy</span>}
            </button>
          </div>
        </div>

        <div className="p-6 bg-slate-50 dark:bg-slate-800/50 text-center border-t border-slate-100 dark:border-slate-800">
          <p className="text-[9px] text-slate-400 uppercase font-bold tracking-widest">
            Average Response Time: &lt; 24 Hours
          </p>
        </div>
      </div>
    </div>
  );
}