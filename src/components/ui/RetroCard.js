import React from 'react';
import { cn } from '../../lib/utils';

export default function RetroCard({
  children,
  title,
  headerRight,
  className = '',
  hoverEffect = false,
  variant = 'default', // 'default', 'purple', 'cyan'
}) {
  const borderColors = {
    default: 'border-slate-950 dark:border-slate-100',
    purple: 'border-purple-600 dark:border-purple-500',
    cyan: 'border-cyan-500 dark:border-cyan-400'
  };

  const shadowColors = {
    default: 'shadow-retro',
    purple: 'shadow-retro hover:shadow-retro-glow-purple',
    cyan: 'shadow-retro hover:shadow-retro-glow-cyan'
  };

  return (
    <div
      className={cn(
        "bg-white dark:bg-slate-950 border-4 text-slate-900 dark:text-slate-100",
        borderColors[variant],
        shadowColors[variant],
        hoverEffect ? "transition-transform duration-200 hover:-translate-y-1 hover:-translate-x-1" : "",
        className
      )}
    >
      {/* Card Header (Optional) */}
      {(title || headerRight) && (
        <div className={cn(
          "flex justify-between items-center px-4 py-2 border-b-4",
          borderColors[variant],
          "bg-slate-50 dark:bg-slate-900"
        )}>
          {title && (
            <h3 className="font-press text-[10px] uppercase font-bold tracking-wide">
              {title}
            </h3>
          )}
          {headerRight && (
            <div className="flex items-center">
              {headerRight}
            </div>
          )}
        </div>
      )}

      {/* Card Body */}
      <div className="p-4 md:p-6">
        {children}
      </div>
    </div>
  );
}
