import React, { useEffect } from 'react';
import { Star, Play, X } from 'lucide-react';
import { locales } from '../../data/locales';
import RetroButton from '../ui/RetroButton';
import { playHover, playClick } from '../../lib/sfx';

export default function GameDetailsModal({ game, onClose, onPlay, lang }) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (game) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [game]);

  if (!game) return null;

  const t = locales[lang];
  const title = game.title[lang] || game.title['en'];
  const description = game.description[lang] || game.description['en'];

  // Handle backdrop click to close
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      playClick();
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleBackdropClick}
    >
      {/* Modal Container */}
      <div 
        className="w-full max-w-2xl bg-white dark:bg-slate-950 border-4 border-slate-950 dark:border-slate-100 shadow-retro flex flex-col relative max-h-[90vh] md:max-h-[85vh] overflow-hidden animate-in zoom-in duration-200"
      >
        {/* Header bar */}
        <div className="flex justify-between items-center px-4 py-3 border-b-4 border-slate-950 dark:border-slate-100 bg-slate-50 dark:bg-slate-900">
          <h2 className="font-press text-[10px] md:text-xs uppercase font-bold tracking-wide truncate max-w-[80%] text-slate-900 dark:text-slate-100">
            {title}
          </h2>
          <button
            onClick={() => {
              playClick();
              onClose();
            }}
            onMouseEnter={playHover}
            className="text-slate-900 dark:text-slate-100 hover:text-rose-500 dark:hover:text-rose-400 p-1 focus:outline-none transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5 stroke-[3px]" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 md:p-6 overflow-y-auto flex-1 text-left">
          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Image Column */}
            <div className="md:col-span-5">
              <div className="border-4 border-slate-950 dark:border-slate-100 bg-slate-900 aspect-video md:aspect-square overflow-hidden shadow-retro-sm">
                <img
                  src={game.image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Spec Details Column */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <div className="space-y-3.5">
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <span className="font-press text-[9px] text-slate-400 dark:text-slate-500">
                    {t.gameRating}:
                  </span>
                  <span className="font-press text-[9px] text-yellow-500 flex items-center gap-1 bg-yellow-500/10 px-2 py-0.5 border border-yellow-500/25">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    {game.rating} / 5.0
                  </span>
                </div>

                {/* Genre */}
                <div className="flex items-center gap-2">
                  <span className="font-press text-[9px] text-slate-400 dark:text-slate-500">
                    {t.gameGenre}:
                  </span>
                  <span className="font-press text-[8px] border-2 border-slate-950 dark:border-slate-100 px-2 py-0.5 bg-purple-600 text-white shadow-retro-sm">
                    {game.genre}
                  </span>
                </div>

                {/* Release Year */}
                <div className="flex items-center gap-2">
                  <span className="font-press text-[9px] text-slate-400 dark:text-slate-500">
                    {t.gameYear}:
                  </span>
                  <span className="font-press text-[9px] text-slate-900 dark:text-slate-100">
                    {game.releaseYear}
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="font-press text-[9px] text-slate-400 dark:text-slate-500">
                    STATUS:
                  </span>
                  <span className="font-press text-[8px] border-2 border-slate-950 dark:border-slate-100 px-2 py-0.5 bg-emerald-500 text-slate-950 font-bold shadow-retro-sm">
                    {t.storePriceFree}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Full Description Section */}
          <div className="mt-6 pt-5 border-t-2 border-slate-150 dark:border-slate-900">
            <h3 className="font-press text-[9px] text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2.5">
              Description
            </h3>
            <p className="font-inter text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
              {description}
            </p>
          </div>

        </div>

        {/* Footer Area */}
        <div className="px-4 py-4 border-t-4 border-slate-950 dark:border-slate-100 bg-slate-50 dark:bg-slate-900 flex flex-col sm:flex-row gap-3 justify-end">
          <RetroButton
            variant="outline"
            size="sm"
            onClick={() => {
              playClick();
              onClose();
            }}
            onMouseEnter={playHover}
            className="w-full sm:w-auto"
          >
            {t.modalClose}
          </RetroButton>
          <RetroButton
            variant="purple"
            size="sm"
            onClick={() => {
              onClose();
              onPlay(title, game.playUrl);
            }}
            onMouseEnter={playHover}
            className="w-full sm:w-auto"
          >
            <span className="flex items-center justify-center gap-1.5">
              <Play className="w-3.5 h-3.5 fill-current" />
              {t.storePlayNow}
            </span>
          </RetroButton>
        </div>

      </div>
    </div>
  );
}
