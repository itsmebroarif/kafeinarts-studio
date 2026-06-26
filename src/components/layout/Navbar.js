import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useNavStore, useThemeStore, useLangStore } from '../../lib/store';
import { locales } from '../../data/locales';
import { playHover, playClick } from '../../lib/sfx';
import RetroButton from '../ui/RetroButton';

export default function Navbar() {
  const { page, setPage, openWizard } = useNavStore();
  const { theme, toggleTheme } = useThemeStore();
  const { lang, setLang } = useLangStore();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const t = locales[lang];

  const navLinks = [
    { id: 'home', label: t.navHome },
    { id: 'games', label: t.navGames },
    { id: 'services', label: t.navServices },
    { id: 'about', label: t.navAbout },
    { id: 'contact', label: t.navContact },
  ];

  const handleNavClick = (id) => {
    playClick();
    setPage(id);
    setMobileMenuOpen(false);
  };



  const handleThemeToggle = () => {
    playClick();
    toggleTheme();
  };

  const handleLangToggle = () => {
    playClick();
    setLangMenuOpen(!langMenuOpen);
  };

  const selectLanguage = (l) => {
    playClick();
    setLang(l);
    setLangMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur border-b-4 border-slate-950 dark:border-slate-100 py-3 px-4 md:px-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div 
          onClick={() => handleNavClick('home')} 
          onMouseEnter={playHover}
          className="flex items-center gap-2 cursor-pointer select-none group"
        >
          <div className="w-8 h-8 bg-purple-600 border-2 border-slate-950 dark:border-slate-100 flex items-center justify-center font-press text-white text-sm shadow-retro-sm group-hover:bg-purple-500">
            K
          </div>
          <span className="font-press text-xs md:text-sm tracking-tighter bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-cyan-400">
            KAFEINARTS
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              onMouseEnter={playHover}
              className={`font-press text-[9px] uppercase tracking-wider transition-colors duration-150 ${
                page === link.id
                  ? 'text-purple-600 dark:text-cyan-400 underline decoration-2 underline-offset-4'
                  : 'text-slate-650 hover:text-slate-900 dark:text-slate-350 dark:hover:text-slate-100'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">

          {/* Theme Toggle */}
          <button
            onClick={handleThemeToggle}
            onMouseEnter={playHover}
            className="p-2 border-2 border-slate-950 dark:border-slate-100 bg-slate-50 dark:bg-slate-900 shadow-retro-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-800" />
            )}
          </button>

          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={handleLangToggle}
              onMouseEnter={playHover}
              className="p-2 border-2 border-slate-950 dark:border-slate-100 bg-slate-50 dark:bg-slate-900 shadow-retro-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none flex items-center gap-1 font-press text-[9px]"
            >
              <Globe className="w-4 h-4 text-slate-800 dark:text-slate-100" />
              <span className="hidden sm:inline uppercase">{lang}</span>
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 mt-2 bg-white dark:bg-slate-950 border-2 border-slate-950 dark:border-slate-100 py-1 shadow-retro z-50 w-24">
                {['en', 'id', 'jp'].map((l) => (
                  <button
                    key={l}
                    onClick={() => selectLanguage(l)}
                    onMouseEnter={playHover}
                    className={`w-full text-left px-3 py-1.5 font-press text-[9px] uppercase hover:bg-slate-100 dark:hover:bg-slate-900 ${
                      lang === l ? 'text-purple-600 dark:text-cyan-400 font-bold' : 'text-slate-700 dark:text-slate-350'
                    }`}
                  >
                    {l === 'en' ? 'EN' : l === 'id' ? 'ID' : 'JP'}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA Request button - Desktop */}
          <div className="hidden lg:block">
            <RetroButton 
              variant="purple" 
              size="sm"
              onMouseEnter={playHover}
              onClick={() => {
                playClick();
                openWizard('game');
              }}
            >
              {t.navRequestGame}
            </RetroButton>
          </div>

          {/* Mobile Hamburguer */}
          <button
            onClick={() => {
              playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            onMouseEnter={playHover}
            className="lg:hidden p-2 border-2 border-slate-950 dark:border-slate-100 bg-slate-50 dark:bg-slate-900 shadow-retro-sm"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 text-slate-800 dark:text-slate-100" /> : <Menu className="w-4 h-4 text-slate-800 dark:text-slate-100" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-slate-950/80 backdrop-blur z-40 flex flex-col justify-between p-6 animate-fade-in">
          <div className="flex flex-col gap-4 mt-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                onMouseEnter={playHover}
                className={`w-full text-left font-press text-xs uppercase py-3 border-b-2 border-slate-800 tracking-wider ${
                  page === link.id 
                    ? 'text-purple-400 pl-2 border-l-4 border-l-purple-500' 
                    : 'text-slate-300'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 pb-8">
            <RetroButton
              variant="purple"
              fullWidth
              onMouseEnter={playHover}
              onClick={() => {
                playClick();
                setMobileMenuOpen(false);
                openWizard('game');
              }}
            >
              {t.navRequestGame}
            </RetroButton>
          </div>
        </div>
      )}
    </nav>
  );
}
