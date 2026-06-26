import React from 'react';
import { Gamepad2, Laptop, Smartphone, FileCode2 } from 'lucide-react';
import { useLangStore, useNavStore } from '../../lib/store';
import { locales } from '../../data/locales';
import RetroCard from '../ui/RetroCard';
import RetroButton from '../ui/RetroButton';
import { playHover, playClick } from '../../lib/sfx';


export default function Services() {
  const { lang } = useLangStore();
  const { openWizard } = useNavStore();
  const t = locales[lang];

  const serviceList = [
    {
      id: 'game-dev',
      icon: <Gamepad2 className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
      title: t.serviceGameDevTitle,
      desc: t.serviceGameDevDesc,
      wizardType: 'game'
    },
    {
      id: 'it-solutions',
      icon: <Laptop className="w-8 h-8 text-cyan-500 dark:text-cyan-400" />,
      title: t.serviceITTitle,
      desc: t.serviceITDesc,
      wizardType: 'service'
    },
    {
      id: 'mobile-apps',
      icon: <Smartphone className="w-8 h-8 text-emerald-500 dark:text-emerald-400" />,
      title: t.serviceMobileTitle,
      desc: t.serviceMobileDesc,
      wizardType: 'service'
    },
    {
      id: 'consulting',
      icon: <FileCode2 className="w-8 h-8 text-amber-500 dark:text-amber-400" />,
      title: t.serviceConsultingTitle,
      desc: t.serviceConsultingDesc,
      wizardType: 'service'
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 border-b-4 border-slate-950 dark:border-slate-100 transition-colors duration-200">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Title Header */}
        <div className="flex flex-col items-center gap-2 mb-12">
          <h2 className="font-press text-lg md:text-xl uppercase tracking-wider text-slate-900 dark:text-slate-50">
            {t.servicesTitle}
          </h2>
          <p className="font-inter text-xs md:text-sm text-slate-650 dark:text-slate-450 max-w-lg mt-2">
            {t.servicesSubtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceList.map((service) => (
            <RetroCard
              key={service.id}
              variant="default"
              hoverEffect
              className="flex flex-col justify-between items-start text-left h-full bg-white dark:bg-slate-950"
            >
              <div className="flex flex-col gap-4">
                {/* Icon wrapper */}
                <div className="p-3 border-2 border-slate-950 dark:border-slate-100 bg-slate-50 dark:bg-slate-900 inline-block shadow-retro-sm">
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="font-press text-[11px] uppercase tracking-wide leading-relaxed text-slate-900 dark:text-slate-100">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="font-inter text-xs text-slate-650 dark:text-slate-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Action */}
              <div className="mt-8 w-full">
                <RetroButton
                  variant="outline"
                  fullWidth
                  size="sm"
                  onMouseEnter={playHover}
                  onClick={() => {
                    playClick();
                    openWizard(service.wizardType);
                  }}
                >
                  {t.serviceCTA}
                </RetroButton>
              </div>
            </RetroCard>
          ))}
        </div>

      </div>
    </section>
  );
}
