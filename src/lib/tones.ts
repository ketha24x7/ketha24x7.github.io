/*
  Per-item accent colours, so a row of cards reads as a set of distinct
  things rather than six copies of the same blue. Class strings are literal
  so Tailwind can see them at build time.
*/
export const tones = [
  { chip: 'bg-blue-500/10 text-blue-600 ring-blue-500/20 dark:text-blue-400', bar: 'from-blue-500 to-indigo-500' },
  { chip: 'bg-violet-500/10 text-violet-600 ring-violet-500/20 dark:text-violet-400', bar: 'from-violet-500 to-fuchsia-500' },
  { chip: 'bg-cyan-500/10 text-cyan-700 ring-cyan-500/20 dark:text-cyan-400', bar: 'from-cyan-500 to-sky-500' },
  { chip: 'bg-amber-500/10 text-amber-700 ring-amber-500/20 dark:text-amber-400', bar: 'from-amber-500 to-orange-500' },
  { chip: 'bg-emerald-500/10 text-emerald-700 ring-emerald-500/20 dark:text-emerald-400', bar: 'from-emerald-500 to-teal-500' },
  { chip: 'bg-rose-500/10 text-rose-600 ring-rose-500/20 dark:text-rose-400', bar: 'from-rose-500 to-pink-500' },
] as const;

export const toneAt = (i: number) => tones[i % tones.length];
