import createConfig from "@conduit/eslint/create-config";

export default createConfig({
  vue: true,
}, {
  rules: {
    "antfu/top-level-function": "off",
    "unicorn/filename-case": ["error", {
      case: "pascalCase",
      ignore: ["README.md", "*/.ts", "*/.js"],
    }],
  },
});
