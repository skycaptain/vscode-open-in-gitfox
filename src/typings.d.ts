declare module "find-root" {
  function findRoot(dir: string, check?: (dir: string) => boolean): string;
  export = findRoot;
}

declare module "opn" {
  interface Options {
    app?: string | readonly string[];
    wait?: boolean;
  }

  function open(target: string, options?: Options): Promise<unknown>;
  export = open;
}
