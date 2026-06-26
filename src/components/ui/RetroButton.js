import React from 'react';
import { cn } from '../../lib/utils';

export default function RetroButton({
  children,
  onClick,
  type = 'button',
  variant = 'purple', // 'purple', 'cyan', 'green', 'gray', 'red', 'yellow'
  size = 'md', // 'sm', 'md', 'lg'
  className = '',
  disabled = false,
  fullWidth = false
}) {
  const baseStyles = 'font-press text-xs uppercase select-none transition-all duration-75 active:translate-x-[2px] active:translate-y-[2px] active:shadow-retro-sm border-2 border-slate-950 dark:border-slate-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none';

  const variants = {
    purple: 'bg-purple-600 hover:bg-purple-500 text-white shadow-retro hover:shadow-retro-glow-purple dark:shadow-retro',
    cyan: 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-retro hover:shadow-retro-glow-cyan dark:shadow-retro',
    green: 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-retro dark:shadow-retro',
    red: 'bg-rose-500 hover:bg-rose-400 text-white shadow-retro dark:shadow-retro',
    yellow: 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-retro dark:shadow-retro',
    gray: 'bg-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-850 dark:text-slate-200 shadow-retro dark:shadow-retro',
    outline: 'bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-950 dark:text-slate-100 shadow-retro dark:shadow-retro'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-[9px]',
    md: 'px-5 py-2.5 text-[10px] tracking-wide',
    lg: 'px-7 py-3 text-xs tracking-wider'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth ? 'w-full' : '',
        className
      )}
    >
      {children}
    </button>
  );
}
