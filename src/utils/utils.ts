export const noop = (args?: any) => {};
import { formatDuration } from 'date-fns';
import { parse, toMilliseconds } from 'duration-fns';
import i18next from 'i18next';
import { Recipe } from '../services/api/types';
import { SortTypes } from '../types/types';

const getShortDuration = (match: string) => {
  switch (match) {
    case 'hour':
    case 'hours':
      return 'h';
    case 'minute':
    case 'minutes':
      return 'min.';
    default:
      return i18next.t('na');
  }
};

export const getPreparationTime = (time: string) => {
  try {
    const parsedTime = parse(time);
    const formattedDuration = formatDuration(parsedTime);
    return formattedDuration
      .replace(
        /\b(?:years|year|months|month|weeks|week|days|day|hours|hour|days|day|minutes|minute|seconds|second)/gi,
        (match: any) => {
          return getShortDuration(match);
        },
      )
      .replace(/\s/g, '');
  } catch (error) {
    return i18next.t('na');
  }
};

export const sortRecipes = (data: Recipe[] = [], sortBy: SortTypes) => {
  return data?.sort((a, b) => {
    switch (sortBy) {
      case SortTypes.calories:
      case SortTypes.carbos:
      case SortTypes.fats:
      case SortTypes.proteins:
        const cmpA = a[sortBy]?.split(' ')[0];
        const cmpB = b[sortBy]?.split(' ')[0];
        return Number(cmpA || 0) - Number(cmpB || 0);
      case SortTypes.country:
        return (a.country || '') > (b.country || '') ? -1 : 1;
      case SortTypes.difficulty:
        return (a.difficulty || 0) - (b.difficulty || 0);
      case SortTypes.time:
      default:
        const msA = toMilliseconds(a.time);
        const msB = toMilliseconds(b.time);
        return msA - msB;
    }
  });
};

export const capitalizeFirstLetter = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
