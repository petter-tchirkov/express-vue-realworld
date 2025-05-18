import createConfig from "@conduit/eslint/create-config";

export default createConfig({
  ignores: ["src/db/migrations/*", "public/*"],
});
