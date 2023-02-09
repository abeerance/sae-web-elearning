export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function capitalizeWords(string: string) {
  return string
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
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
    { topic: 'everyday types', index: 1 },
    { topic: 'narrowing', index: 2 },
    { topic: 'more on functions', index: 3 },
    { topic: 'object types', index: 4 },
    { topic: 'type manipulation', index: 5 },
    { topic: 'classes', index: 6 },
    { topic: 'modules', index: 7 },
    { topic: 'utility types', index: 8 },
    { topic: 'decorators', index: 9 },
    { topic: 'declaration merging', index: 10 },
    { topic: 'enums', index: 11 },
    { topic: 'iterators and generators', index: 12 },
    { topic: 'mixins', index: 13 },
    { topic: 'namespaces', index: 14 },
    { topic: 'symbols', index: 15 },
    { topic: 'triple-Slash directives', index: 16 },
    { topic: 'type compatibility', index: 17 },
    { topic: 'type intereference', index: 18 },
    { topic: 'variable declaration', index: 19 },
  ];

  public static readonly reactSubModules = [
    { topic: 'getting started', index: 0 },
    { topic: 'introducing JSX', index: 1 },
    { topic: 'rendering elements', index: 2 },
    { topic: 'components and props', index: 3 },
    { topic: 'state and lifecycle', index: 4 },
    { topic: 'handling events', index: 5 },
    { topic: 'conditional rendering', index: 6 },
    { topic: 'lists and keys', index: 7 },
    { topic: 'forms', index: 8 },
    { topic: 'lifting state up', index: 9 },
    { topic: 'composition VS inheritance', index: 10 },
    { topic: 'thinking in react', index: 11 },
    { topic: 'code splitting', index: 12 },
    { topic: 'context', index: 13 },
    { topic: 'forwarding refs', index: 14 },
    { topic: 'fragments', index: 15 },
    { topic: 'higher-Order components', index: 16 },
    { topic: 'JSX in depth', index: 17 },
    { topic: 'Optimizing performance', index: 18 },
    { topic: 'portals', index: 19 },
    { topic: 'reconciiliation', index: 20 },
    { topic: 'refs and the DOM', index: 21 },
    { topic: 'render props', index: 22 },
    { topic: 'static type checking', index: 23 },
    { topic: 'strict mode', index: 24 },
    { topic: 'typechecking with propTypes', index: 25 },
    { topic: 'uncontrolled components', index: 26 },
    { topic: 'web components', index: 27 },
    { topic: 'hooks', index: 28 },
    { topic: 'testing', index: 29 },
  ];
}
