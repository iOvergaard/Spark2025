export const manifests: Array<UmbExtensionManifest> = [
  {
    name: "Spark 2025Backoffice Extensions Entrypoint",
    alias: "Spark2025.Backoffice.Extensions.Entrypoint",
    type: "backofficeEntryPoint",
    js: () => import("./entrypoint"),
  }
];
