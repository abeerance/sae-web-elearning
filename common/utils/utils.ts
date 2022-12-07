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
    { topic: 'welcome', url: '/' },
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

  public static readonly functionsSubtopics = [
    {
      topic: 'functions',
      subTopics: [
        'built-in',
        'custom-functions',
        'different-ways-to-declare-functions',
      ],
    },
  ];

  public static readonly subNavigation = [];

  public static readonly sectionContents = [
    {
      name: 'basics',
      subTopics: ['welcome', 'editor', 'running'],
    },
    {
      name: 'variablesAndStatements',
      subTopics: [
        'variables',
        'statements',
        'codeBlocks',
        'varLetConst',
        'namingConventions',
      ],
    },
    { name: 'codeQuality', subTopics: ['eslint', 'prettier', 'config'] },
    {
      name: 'types',
      subTopics: [
        'intro',
        'strings',
        'numbers',
        'objects',
        'nullAndUndefined',
        'booleans',
      ],
    },
    {
      name: 'functions',
      subTopics: [
        'intro',
        'built-in',
        'custom-functions',
        'parameters',
        'different-ways-to-declare-functions',
      ],
    },
    { name: 'trickyParts', subTopics: ['scope', 'hoisting', 'closures'] },
    {
      name: 'dom',
      subTopics: [
        'intro',
        'selecting',
        'properties',
        'classes',
        'customData',
        'htmlCreation',
        'templateStrings',
        'nodes',
      ],
    },
    {
      name: 'events',
      subTopics: [
        'eventListener',
        'targets',
        'preventDefault',
        'accessibility',
      ],
    },
    {
      name: 'logicFlow',
      subTopics: ['statements', 'ternary', 'switch', 'intervals'],
    },
  ];
}
