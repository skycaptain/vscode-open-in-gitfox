declare module "find-root" {
  function findRoot(dir: string, check?: (dir: string) => boolean): string;
  export default findRoot;
}
