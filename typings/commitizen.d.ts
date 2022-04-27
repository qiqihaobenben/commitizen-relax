declare module "commitizen" {
  interface InitOptions {
    save: boolean;
    saveDev: boolean;
    saveExact: boolean;
    force: boolean;
    yarn: boolean;
    dev: boolean;
    exact: boolean;
  }
  export function init(repoPath: string, adapterNpmName: string, initOptions: InitOptions): void;
}
