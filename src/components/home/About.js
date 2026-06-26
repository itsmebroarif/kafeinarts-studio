import React from 'react';
import { useLangStore } from '../../lib/store';
import { locales } from '../../data/locales';
import RetroCard from '../ui/RetroCard';

export default function About() {
  const { lang } = useLangStore();
  const t = locales[lang];

  const stats = [
    { label: t.statGamesReleased, value: "16" },
    { label: t.statClientsServed, value: "88+" },
    { label: t.statLineOfCode, value: "99K+" },
    { label: t.statCoffeeDrunk, value: "1.02K" }
  ];

  return (
    <section className="py-16 px-4 md:px-8 border-b-4 border-slate-950 dark:border-slate-100 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Header */}
        <div className="text-center flex flex-col items-center gap-2 mb-12">
          <h2 className="font-press text-lg md:text-xl uppercase tracking-wider text-slate-900 dark:text-slate-50">
            {t.aboutTitle}
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Text details */}
          <div className="lg:col-span-7 flex flex-col gap-4 text-left">
            <p className="font-inter text-sm md:text-base text-slate-700 dark:text-slate-355 leading-relaxed">
              {t.aboutText1}
            </p>
            <p className="font-inter text-sm md:text-base text-slate-750 dark:text-slate-360 leading-relaxed">
              {t.aboutText2}
            </p>
          </div>

          {/* Right: Retro Stats Counter Grid */}
          <div className="lg:col-span-5 w-full">
            <RetroCard 
              variant="default" 
              title="SYSTEM_DIAGNOSTICS"
              className="bg-slate-50 dark:bg-slate-900"
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, idx) => (
                  <div 
                    key={idx} 
                    className="p-3 border-2 border-slate-950 dark:border-slate-100 bg-white dark:bg-slate-950 flex flex-col items-center justify-center text-center shadow-retro-sm"
                  >
                    <span className="font-press text-sm md:text-base text-purple-600 dark:text-cyan-400 font-bold mb-1">
                      {stat.value}
                    </span>
                    <span className="font-press text-[7px] uppercase tracking-tighter text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </RetroCard>
          </div>

        </div>

      </div>
    </section>
  );
}
