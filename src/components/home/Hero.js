import React from 'react';
import { Play, Sparkles, Terminal } from 'lucide-react';
import { useLangStore, useNavStore } from '../../lib/store';
import { locales } from '../../data/locales';
import { playHover, playClick } from '../../lib/sfx';
import RetroButton from '../ui/RetroButton';

export default function Hero() {
  const { lang } = useLangStore();
  const { setPage, openWizard } = useNavStore();
  const t = locales[lang];

  const handleNavClick = (dest) => {
    playClick();
    setPage(dest);
  };

  const handleWizardClick = (type) => {
    playClick();
    openWizard(type);
  };


  return (
    <section className="relative overflow-hidden py-12 md:py-24 px-4 md:px-8 border-b-4 border-slate-950 dark:border-slate-100 transition-colors duration-200">
      {/* Background scan lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left: Text & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 border-2 border-slate-950 dark:border-slate-100 bg-slate-100 dark:bg-slate-900 shadow-retro-sm">
            <span className="w-2.5 h-2.5 bg-emerald-500 rounded-none animate-blink"></span>
            <span className="font-press text-[8px] uppercase tracking-wider text-slate-800 dark:text-slate-200">
              [SYSTEM_ONLINE] v1.0.0
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-press text-2xl sm:text-3xl md:text-4xl leading-tight text-slate-900 dark:text-slate-50 tracking-tight">
            {t.heroTitle}
          </h1>

          {/* Subtitle */}
          <p className="font-inter text-sm md:text-base text-slate-650 dark:text-slate-350 leading-relaxed max-w-xl">
            {t.heroSubtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-2 w-full sm:w-auto">
            <RetroButton
              variant="purple"
              size="lg"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2"
              onMouseEnter={playHover}
              onClick={() => handleNavClick('games')}
            >
              <Play className="w-4.5 h-4.5 fill-current" />
              {t.heroCTAExplore}
            </RetroButton>

            <RetroButton
              variant="cyan"
              size="lg"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2"
              onMouseEnter={playHover}
              onClick={() => handleWizardClick('game')}
            >
              <Sparkles className="w-4.5 h-4.5" />
              {t.heroCTARequest}
            </RetroButton>
          </div>

        </div>

        {/* Right: CRT Retro Screen Display */}
        <div className="lg:col-span-5 flex justify-center w-full mt-4 lg:mt-0">
          <div className="w-full max-w-sm border-4 border-slate-950 dark:border-slate-100 shadow-retro bg-slate-950 p-3 relative overflow-hidden animate-crt-flicker">
            
            {/* CRT Screen Bezel Glare */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-10" />

            {/* CRT Header */}
            <div className="flex items-center justify-between pb-2 border-b-2 border-slate-800 mb-3 text-slate-400 font-press text-[8px]">
              <span className="flex items-center gap-1">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                CONSOLE_MONITOR
              </span>
              <span className="text-purple-400">60 FPS</span>
            </div>

            {/* CRT Content Screen */}
            <div className="font-mono text-xs text-emerald-400 flex flex-col gap-2 p-2 bg-black min-h-[220px] text-left leading-relaxed">
              <div>&gt; INITIALIZING KAFEINARTS ENGINE...</div>
              <div className="text-purple-400">&gt; LOADING PIXELS... [OK]</div>
              <div className="text-cyan-400">&gt; COMPILING COFFEE BEANS... [OK]</div>
              <div className="mt-2 text-slate-300">
                -----------------------------<br />
                STUDIO CONFIGURATION:<br />
                - MAIN_ACCENT: PURPLE_CYAN<br />
                - CORE_SYSTEM: REACT_SPA<br />
                - LOC_MODULES: [EN, ID, JP]<br />
                -----------------------------
              </div>
              <div className="mt-2 animate-pulse text-white font-press text-[9px]">
                &gt; READY_TO_PLAY_
              </div>
            </div>

            {/* Retro Bezel details */}
            <div className="flex justify-between items-center mt-3 pt-2 border-t-2 border-slate-800 text-[8px] text-slate-500 font-press uppercase">
              <span>Model: KA-16BIT</span>
              <div className="flex gap-1.5">
                <span className="w-1.5 h-1.5 bg-rose-600 inline-block rounded-full"></span>
                <span className="w-1.5 h-1.5 bg-yellow-500 inline-block rounded-full"></span>
                <span className="w-1.5 h-1.5 bg-emerald-500 inline-block rounded-full"></span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
