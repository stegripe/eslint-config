import prettier from "eslint-config-prettier";
import ignores from "./ignores.js";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
    {
        name: "stegripe/prettier",
        ignores: ignores[0].ignores,
        rules: {
            ...prettier.rules
        }
    }
];
