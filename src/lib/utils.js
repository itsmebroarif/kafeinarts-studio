import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatPrice(priceUSD, lang) {
  if (priceUSD === 0) return lang === 'id' ? 'GRATIS' : lang === 'jp' ? '無料' : 'FREE';

  if (lang === 'id') {
    const priceIDR = Math.round(priceUSD * 15000);
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(priceIDR);
  }

  if (lang === 'jp') {
    const priceJPY = Math.round(priceUSD * 150);
    return new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY'
    }).format(priceJPY);
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(priceUSD);
}
