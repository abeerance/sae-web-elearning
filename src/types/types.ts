export interface SubModuleDto {
  id: string;
  module: string;
  moduleName: string;
  moduleDescription: string;
  subModuleContent?: {} | undefined;
}

export enum moduleSchema {
  js = 'JavaScriptModules',
  ts = 'TypeScriptModules',
  react = 'ReactModules',
}

export enum moduleName {
  js = 'javaScriptModules',
  ts = 'typeScriptModules',
  react = 'reactModules',
}
