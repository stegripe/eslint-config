/* eslint-env node */
const { resolve } = require("path");
const eslintJS = require("@eslint/js");
const base = resolve(__dirname, "..", "index.js");

// @typescript-eslint original rules
let rules = {
    "array-type": ["warn", {
        default: "array"
    }],
    "ban-ts-comment": ["error", {
        minimumDescriptionLength: 5
    }],
    "ban-tslint-comment": "error",
    "consistent-generic-constructors": ["warn", "constructor"],
    "consistent-indexed-object-style": ["error", "record"],
    "consistent-type-assertions": ["error", {
        assertionStyle: "as",
        objectLiteralTypeAssertions: "allow-as-parameter"
    }],
    "consistent-type-definitions": ["error", "interface"],
    "consistent-type-exports": ["warn", {
        fixMixedExportsWithInlineTypeSpecifier: false
    }],
    "consistent-type-imports": ["warn", {
        prefer: "no-type-imports"
    }],
    "explicit-function-return-type": ["error", {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowDirectConstAssertionInArrowFunctions: true
    }],
    "explicit-member-accessibility": ["warn", {
        accessibility: "explicit"
    }],
    "member-delimiter-style": "error",
    "member-ordering": ["warn", {
        default: [
            // Index signature
            "signature",
            "call-signature",

            // Fields
            "public-decorated-field",
            "protected-decorated-field",
            "private-decorated-field",

            "public-instance-field",
            "protected-instance-field",
            "private-instance-field",
            "#private-instance-field",

            "public-abstract-field",
            "protected-abstract-field",

            "public-field",
            "protected-field",
            "private-field",
            "#private-field",

            "public-static-field",
            "protected-static-field",
            "private-static-field",
            "#private-static-field",

            "decorated-field",
            "instance-field",
            "abstract-field",

            "field",

            "static-field",

            // Constructors
            "public-constructor",
            "protected-constructor",
            "private-constructor",

            "constructor",

            // Methods
            "public-decorated-method",
            "protected-decorated-method",
            "private-decorated-method",

            "public-instance-method",
            "protected-instance-method",
            "private-instance-method",
            "#private-instance-method",

            "public-abstract-method",
            "protected-abstract-method",

            "public-method",
            "protected-method",
            "private-method",
            "#private-method",

            "public-static-method",
            "protected-static-method",
            "private-static-method",
            "#private-static-method",

            "decorated-method",
            "instance-method",
            "abstract-method",

            "method",

            "static-method"
        ]
    }],
    "method-signature-style": ["warn", "property"],
    "no-base-to-string": "error",
    "no-confusing-non-null-assertion": "warn",
    "no-duplicate-enum-values": "warn",
    "no-dynamic-delete": "error",
    "no-explicit-any": "off",
    "no-extraneous-class": "error",
    "no-invalid-void-type": "warn",
    "no-meaningless-void-operator": "warn",
    "no-misused-promises": ["warn", {
        checksVoidReturn: false
    }],
    "no-mixed-enums": "warn",
    "no-non-null-asserted-nullish-coalescing": "warn",
    "no-non-null-asserted-optional-chain": "warn",
    "no-non-null-assertion": "off",
    "no-require-imports": "warn",
    "no-this-alias": "warn",
    "no-type-alias": [
        "warn", {
            allowAliases: "in-unions-and-intersections",
            allowCallbacks: "always",
            allowConditionalTypes: "always",
            allowConstructors: "always",
            allowGenerics: "always",
            allowLiterals: "in-unions-and-intersections",
            allowMappedTypes: "never",
            allowTupleTypes: "in-unions-and-intersections"
        }
    ],
    "no-unnecessary-boolean-literal-compare": "error",
    "no-unnecessary-condition": "error",
    "no-unnecessary-type-arguments": "error",
    "no-unsafe-assignment": "off",
    "no-unsafe-call": "warn",
    "no-unsafe-declaration-merging": "warn",
    "no-unsafe-member-access": "warn",
    "no-unsafe-return": "off",
    "non-nullable-type-assertion-style": "warn",
    "prefer-enum-initializers": "error",
    "prefer-for-of": "warn",
    "prefer-function-type": "warn",
    "prefer-includes": "warn",
    "prefer-nullish-coalescing": ["warn", {
        ignoreTernaryTests: false
    }],
    "prefer-optional-chain": "warn",
    "prefer-readonly": "warn",
    "prefer-reduce-type-parameter": "warn",
    "prefer-regexp-exec": "warn",
    "prefer-return-this-type": "warn",
    "prefer-string-starts-ends-with": "warn",
    "prefer-ts-expect-error": "error",
    "require-array-sort-compare": ["error", {
        ignoreStringArrays: true
    }],
    "restrict-template-expressions": ["warn", {
        allowBoolean: true,
        allowNumber: true
    }],
    "sort-type-constituents": "warn",
    "switch-exhaustiveness-check": "error",
    "type-annotation-spacing": "warn",
    "unified-signatures": "warn",
    "no-useless-empty-export": "warn",
    "no-redundant-type-constituents": "error"
};

/* @typescript-eslint extension rules are rules that is extended from eslint original rules
   "infer" as value here will be modified to be inferred from baseRules */
let extensionRules = {
    "brace-style": "infer",
    "comma-dangle": "infer",
    "comma-spacing": "infer",
    "default-param-last": "infer",
    "dot-notation": "infer",
    "func-call-spacing": "infer",
    indent: "infer",
    "keyword-spacing": "infer",
    "lines-between-class-members": "infer",
    "no-array-constructor": "infer",
    "no-dupe-class-members": "infer",
    "no-empty-function": "infer",
    "no-extra-parens": "infer",
    "no-extra-semi": "infer",
    "no-implied-eval": "infer",
    "no-invalid-this": "infer",
    "no-loop-func": "infer",
    "no-loss-of-precision": "infer",
    "no-redeclare": "infer",
    "no-shadow": "infer",
    "no-throw-literal": "infer",
    "no-unused-expressions": "infer",
    "no-unused-vars": "infer",
    "no-use-before-define": "infer",
    "no-useless-constructor": "infer",
    "object-curly-spacing": "infer",
    "padding-line-between-statements": "infer",
    quotes: "infer",
    "require-await": "infer",
    "return-await": "warn",
    semi: "infer",
    "space-before-function-paren": "infer",
    "space-infix-ops": "infer",
    "space-before-blocks": "infer"
};

const addPrefix = string => `@typescript-eslint/${string}`;
const delPrefix = string => string.replace("@typescript-eslint/", "");

// Prefix everything with "@typescript-eslint/""
rules = Object.fromEntries(Object.entries(rules).map(([key, val]) => [addPrefix(key), val]));
extensionRules = Object.fromEntries(Object.entries(extensionRules).map(([key, val]) => [addPrefix(key), val]));

/* Only for @typescript-eslint/naming-convention, we need to turn off ESLint camelcase rule first.
   This rule will enforce the codebase to follows ESLint's camelcase conventions
   https://typescript-eslint.io/rules/naming-convention#enforce-the-codebase-follows-eslints-camelcase-conventions */
rules = {
    ...rules,
    camelcase: "off",
    "@typescript-eslint/naming-convention": [
        "error",
        {
            format: ["camelCase", "PascalCase"],
            leadingUnderscore: "allow",
            selector: "default",
            trailingUnderscore: "forbid"
        },
        {
            format: null,
            modifiers: ["destructured"],
            selector: "variable"
        },
        {
            format: null,
            modifiers: ["requiresQuotes"],
            selector: "default"
        }
    ]
};

// Generate the baseRules from extensionRules and disable it
const baseRules = Object.entries(extensionRules).map(([key]) => [delPrefix(key), "off"]);

// Import baseRules options
const baseRulesOptions = { ...eslintJS.configs.recommended.rules, ...require(base).rules };

// Infer options from baseRulesOptions for the extensionRules
const doneInferred = Object.entries(extensionRules)
    .filter(([_key, val]) => {
        if (val instanceof Array) return val.shift() === "infer";
        return val === "infer";
    })
    .map(([key, val]) => {
        let rulesOptions = baseRulesOptions[delPrefix(key)];
        /* This is a handler to omit some options from baseRulesOptions.
           For example in ["infer", ["ignoreOnInitialization"]], ignoreOnInitialization option from baseRule will be ommited on the extensionRules */
        if (val instanceof Array) {
            const ruleSeverity = rulesOptions[0];
            const ruleOptions = rulesOptions[1];
            const ommitedRuleOptions = val[0];
            const omittedRuleOptionsDone = Object.fromEntries(Object.entries(ruleOptions).filter(([k]) => !ommitedRuleOptions.includes(k)));
            rulesOptions = [ruleSeverity, omittedRuleOptionsDone];
        }
        return [key, rulesOptions ?? undefined];
    });

// Handle if there is undefined
const inferredButUndefined = doneInferred.filter(([_, v]) => v === undefined);
if (inferredButUndefined.length !== 0) {
    throw new Error(
        `There are ${inferredButUndefined.length} total of inferredButUndefined.` +
        `List:\n${inferredButUndefined.map(([k]) => k).join("\n")}`
    );
}

// Apply inferred options
extensionRules = {
    ...Object.fromEntries(baseRules),
    ...extensionRules,
    ...Object.fromEntries(doneInferred)
};

module.exports = {
    extends: [base, "plugin:@typescript-eslint/recommended", "plugin:@typescript-eslint/recommended-requiring-type-checking"],
    parserOptions: {
        project: "./tsconfig.json"
    },
    // Things that are not from typescript-eslint/recommended or it's added to override their default settings in typescript-eslint/recommended
    rules: {
        ...rules,
        ...extensionRules
    }
};
