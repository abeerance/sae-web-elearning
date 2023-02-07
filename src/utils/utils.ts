export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export type Delimeter =
  | 'none'
  | 'space'
  | 'comma'
  | 'comma-space'
  | 'space-hypen-space';

export const delimeterMap: Record<Delimeter, string> = {
  none: '',
  space: ' ',
  comma: ',',
  'comma-space': ', ',
  'space-hypen-space': ' - ',
};

export class Globals {
  public static readonly noneValue = 'none';

  public static readonly navigationElements = [
    { topic: 'basics', url: '/basics', index: 0 },
    { topic: 'variables', url: '/variables-and-statements', index: 1 },
    { topic: 'codeQuality', url: '/code-quality', index: 2 },
    { topic: 'types', url: '/types-and-data-types', index: 3 },
    { topic: 'functions', url: '/functions', index: 4 },
    { topic: 'trickyParts', url: '/tricky-parts', index: 5 },
    { topic: 'dom', url: '/dom', index: 6 },
    { topic: 'events', url: '/events', index: 7 },
    { topic: 'logic', url: '/logic', index: 8 },
    { topic: 'loops', url: '/loops', index: 9 },
    { topic: 'prototypes', url: '/prototypes', index: 10 },
    { topic: 'advancedFlow', url: '/advanced-flow', index: 11 },
    { topic: 'ajax', url: '/ajax-and-data-fetching', index: 12 },
    { topic: 'esModules', url: '/es-modules-and-structure', index: 13 },
    { topic: 'exercises', url: '/exercises', index: 14 },
  ];
}
