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

  public static readonly javaScriptSubModules = [
    { topic: 'basics', index: 0 },
    { topic: 'variables', index: 1 },
    { topic: 'codeQuality', index: 2 },
    { topic: 'types', index: 3 },
    { topic: 'functions', index: 4 },
    { topic: 'trickyParts', index: 5 },
    { topic: 'dom', index: 6 },
    { topic: 'events', index: 7 },
    { topic: 'logic', index: 8 },
    { topic: 'loops', index: 9 },
    { topic: 'prototypes', index: 10 },
    { topic: 'advancedFlow', index: 11 },
    { topic: 'ajax', index: 12 },
    { topic: 'esModules', index: 13 },
    { topic: 'exercises', index: 14 },
  ];

  public static readonly typeScriptSubModules = [
    { topic: 'basics', index: 0 },
    { topic: 'variables', index: 1 },
    { topic: 'codeQuality', index: 2 },
    { topic: 'types', index: 3 },
    { topic: 'functions', index: 4 },
    { topic: 'trickyParts', index: 5 },
    { topic: 'dom', index: 6 },
    { topic: 'events', index: 7 },
    { topic: 'logic', index: 8 },
    { topic: 'loops', index: 9 },
    { topic: 'prototypes', index: 10 },
    { topic: 'advancedFlow', index: 11 },
    { topic: 'ajax', index: 12 },
    { topic: 'esModules', index: 13 },
    { topic: 'exercises', index: 14 },
  ];

  public static readonly reactSubModules = [
    { topic: 'basics', index: 0 },
    { topic: 'variables', index: 1 },
    { topic: 'codeQuality', index: 2 },
    { topic: 'types', index: 3 },
    { topic: 'functions', index: 4 },
    { topic: 'trickyParts', index: 5 },
    { topic: 'dom', index: 6 },
    { topic: 'events', index: 7 },
    { topic: 'logic', index: 8 },
    { topic: 'loops', index: 9 },
    { topic: 'prototypes', index: 10 },
    { topic: 'advancedFlow', index: 11 },
    { topic: 'ajax', index: 12 },
    { topic: 'esModules', index: 13 },
    { topic: 'exercises', index: 14 },
  ];
}
