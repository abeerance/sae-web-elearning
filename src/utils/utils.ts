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
    { topic: 'basics', url: '/basics' },
    { topic: 'variables', url: '/variables-and-statements' },
    { topic: 'codeQuality', url: '/code-quality' },
    { topic: 'types', url: '/types-and-data-types' },
    { topic: 'functions', url: '/functions' },
    { topic: 'trickyParts', url: '/tricky-parts' },
    { topic: 'dom', url: '/dom' },
    { topic: 'events', url: '/events' },
    { topic: 'logic', url: '/logic' },
    { topic: 'loops', url: '/loops' },
    { topic: 'prototypes', url: '/prototypes' },
    { topic: 'advancedFlow', url: '/advanced-flow' },
    { topic: 'ajax', url: '/ajax-and-data-fetching' },
    { topic: 'esModules', url: '/es-modules-and-structure' },
    { topic: 'exercises', url: '/exercises' },
  ];
}
