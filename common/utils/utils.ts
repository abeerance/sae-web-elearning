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

  public static readonly navigation = [
    'Basics',
    'Variables and Statements',
    'Code Quality Tooling',
    'Types and Data Types',
    'Functions',
    'Tricky Parts',
    'The DOM',
    'Events',
    'Logic and Flow Control',
    'Loops',
    'Prototypes, this and new',
    'Advanced Flow Control',
    'Ajax and Fetching Data',
    'ES Modules and structure',
    'Exercises',
  ];
}
