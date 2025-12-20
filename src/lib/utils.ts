import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Calculates the duration between two dates and returns a human-readable string
 * representing the experience duration in years and months.
 *
 * @param dates - A tuple containing the start date and end date as strings.
 *                The end date can be the string 'present' (case-insensitive) to indicate the current date.
 *                Example: ['2020-01-01', '2023-06-01'] or ['2020-01-01', 'present']
 * @returns A string representing the duration, e.g. "3 yrs 5 mos", "1 yr", "2 mos", or "Less than 1 month".
 */
export function calculateExperienceDuration(dates: [string, string]): string {
  const [start, end] = dates;
  const startDate = new Date(start);
  const endDate = end.toLowerCase() === 'present' ? new Date() : new Date(end);

  const years = endDate.getFullYear() - startDate.getFullYear();
  const months = endDate.getMonth() - startDate.getMonth();

  let totalMonths = years * 12 + months;
  if (endDate.getDate() < startDate.getDate()) {
    totalMonths--;
  }

  const displayYears = Math.floor(totalMonths / 12);
  const displayMonths = totalMonths % 12;

  let result = '';
  if (displayYears > 0)
    result += `${displayYears} yr${displayYears > 1 ? 's' : ''} `;
  if (displayMonths > 0)
    result += `${displayMonths} mo${displayMonths > 1 ? 's' : ''}`;
  return result.trim() || 'Less than 1 month';
}
