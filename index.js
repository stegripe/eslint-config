/* eslint-env node */
module.exports = {
    parserOptions: {
        ecmaVersion: 2022
    },
    extends: "eslint:recommended",
    env: {
        es2022: true
    },
    // Things that are not from eslint:recommended or it's added to override their default settings in eslint:recommended
    rules: {
        // Possible problems
        "getter-return": ["error", {
            allowImplicit: false
        }],
        "no-constructor-return": "error",
        "no-duplicate-imports": "warn",
        "no-new-native-nonconstructor": "error",
        "no-self-compare": "error",
        "no-template-curly-in-string": "error",
        "no-unmodified-loop-condition": "error",
        "no-unreachable-loop": "error",
        "no-unused-private-class-members": "error",
        "no-unused-vars": ["error", {
            argsIgnorePattern: "^_",
            args: "after-used",
            caughtErrors: "all",
            destructuredArrayIgnorePattern: "^_"
        }],
        "no-use-before-define": ["error", {
            functions: false
        }],

        // Suggestions
        "accessor-pairs": "warn",
        "arrow-body-style": "warn",
        "block-scoped-var": "error",
        camelcase: "warn",
        "class-methods-use-this": ["warn", {
            exceptMethods: ["execute"],
            enforceForClassFields: true
        }],
        "consistent-this": ["warn", "self"],
        curly: ["error", "multi-line", "consistent"],
        "default-case-last": "warn",
        "default-param-last": "warn",
        "dot-notation": ["error", {
            allowKeywords: true,
            allowPattern: "(^[A-Z])|(^[a-z]+(_[a-z]+)+$)"
        }],
        eqeqeq: ["error", "always"],
        "func-name-matching": ["warn", "always"],
        "func-names": ["warn", "as-needed"],
        "func-style": ["warn", "declaration", {
            allowArrowFunctions: true
        }],
        "grouped-accessor-pairs": ["warn", "getBeforeSet"],
        "guard-for-in": "warn",
        "logical-assignment-operators": ["warn", "always"],
        "max-classes-per-file": ["error", {
            max: 3
        }],
        "max-depth": ["warn", {
            max: 5
        }],
        "max-lines": ["warn", {
            max: 300,
            skipBlankLines: true,
            skipComments: true
        }],
        "max-nested-callbacks": ["warn", {
            max: 10
        }],
        "max-params": ["warn", {
            max: 6
        }],
        "multiline-comment-style": ["warn", "bare-block"],
        "no-alert": "warn",
        "no-array-constructor": "warn",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-confusing-arrow": ["warn", {
            onlyOneSimpleParam: true
        }],
        "no-constant-binary-expression": "warn",
        "no-else-return": "error",
        "no-empty": "warn",
        "no-empty-function": "warn",
        "no-empty-static-block": "warn",
        "no-eq-null": "warn",
        "no-eval": "warn",
        "no-extend-native": "error",
        "no-extra-bind": "warn",
        "no-extra-label": "error",
        "no-floating-decimal": "error",
        "no-implicit-coercion": "error",
        "no-implied-eval": "error",
        "no-invalid-this": "error",
        "no-iterator": "error",
        "no-label-var": "error",
        "no-lonely-if": "error",
        "no-loop-func": "warn",
        "no-mixed-operators": "error",
        "no-multi-assign": "warn",
        "no-multi-str": "warn",
        "no-negated-condition": "error",
        "no-nested-ternary": "warn",
        "no-new-func": "warn",
        "no-octal-escape": "warn",
        "no-proto": "error",
        "no-regex-spaces": "warn",
        "no-return-await": "off",
        "no-script-url": "warn",
        "no-sequences": "error",
        "no-shadow": ["error", {
            allow: ["resolve", "reject", "done", "cb"],
            ignoreOnInitialization: true
        }],
        "no-throw-literal": "error",
        "no-undef-init": "warn",
        "no-unneeded-ternary": "warn",
        "no-unused-expressions": "warn",
        "no-useless-computed-key": "warn",
        "no-useless-concat": "warn",
        "no-useless-constructor": "warn",
        "no-useless-rename": "warn",
        "no-useless-return": "warn",
        "no-var": "error",
        "object-shorthand": "warn",
        "one-var": ["error", "never"],
        "one-var-declaration-per-line": "off",
        "operator-assignment": ["warn", "always"],
        "prefer-arrow-callback": "error",
        "prefer-const": ["error", {
            destructuring: "all"
        }],
        "prefer-named-capture-group": "warn",
        "prefer-object-has-own": "off",
        "prefer-object-spread": "warn",
        "prefer-promise-reject-errors": ["warn", {
            allowEmptyReject: true
        }],
        "prefer-regex-literals": ["warn", {
            disallowRedundantWrapping: true
        }],
        "prefer-rest-params": "warn",
        "prefer-spread": "warn",
        "prefer-template": "error",
        "quote-props": ["warn", "as-needed"],
        radix: ["warn", "as-needed"],
        "require-await": "warn",
        "spaced-comment": ["warn", "always"],
        strict: ["warn", "never"],
        "symbol-description": "warn",
        yoda: "warn",

        // Layout & Formatting
        "array-bracket-newline": ["warn", "consistent"],
        "array-bracket-spacing": ["warn", "never", {
            arraysInArrays: false,
            objectsInArrays: false,
            singleValue: false
        }],
        "array-element-newline": ["warn", "consistent", {
            minItems: 6,
            multiline: true
        }],
        "arrow-parens": ["warn", "as-needed", {
            requireForBlockBody: false
        }],
        "arrow-spacing": ["warn", {
            after: true,
            before: true
        }],
        "block-spacing": ["warn", "always"],
        "brace-style": ["warn", "1tbs", {
            allowSingleLine: true
        }],
        "comma-dangle": ["warn", "never"],
        "comma-spacing": ["warn", {
            after: true,
            before: false
        }],
        "comma-style": ["warn", "last"],
        "computed-property-spacing": ["warn", "never"],
        "dot-location": ["warn", "property"],
        "eol-last": ["warn", "always"],
        "func-call-spacing": ["warn", "never"],
        "function-call-argument-newline": ["warn", "consistent"],
        "function-paren-newline": ["warn", "consistent"],
        "generator-star-spacing": ["warn", "both"],
        "implicit-arrow-linebreak": ["warn", "beside"],
        indent: ["error", 4, {
            SwitchCase: 1
        }],
        "jsx-quotes": ["warn", "prefer-double"],
        "key-spacing": ["warn", {
            afterColon: true,
            beforeColon: false,
            mode: "strict"
        }],
        "keyword-spacing": ["warn", {
            after: true,
            before: true
        }],
        "linebreak-style": ["error", "unix"],
        "lines-between-class-members": ["warn", "always", {
            exceptAfterSingleLine: true
        }],
        "max-len": ["warn", {
            code: 180,
            tabWidth: 4,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreUrls: true
        }],
        "max-statements-per-line": ["warn", {
            max: 3
        }],
        "multiline-ternary": ["warn", "always-multiline"],
        "new-parens": "warn",
        "newline-per-chained-call": ["warn", {
            ignoreChainWithDepth: 3
        }],
        "no-extra-parens": ["warn", "all", {
            enforceForArrowConditionals: false,
            enforceForNewInMemberExpressions: false,
            nestedBinaryExpressions: false
        }],
        "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
        "no-multi-spaces": ["error", {
            ignoreEOLComments: true
        }],
        "no-multiple-empty-lines": "warn",
        "no-trailing-spaces": "warn",
        "no-whitespace-before-property": "error",
        "nonblock-statement-body-position": ["warn", "beside"],
        "object-curly-newline": ["warn", {
            consistent: true,
            multiline: true
        }],
        "object-curly-spacing": ["error", "always"],
        "object-property-newline": ["warn", {
            allowAllPropertiesOnSameLine: true
        }],
        "operator-linebreak": ["warn", "after", {
            overrides: {
                "?": "before",
                ":": "before"
            }
        }],
        "padded-blocks": ["error", "never"],
        "padding-line-between-statements": "warn",
        quotes: ["warn", "double", {
            allowTemplateLiterals: false,
            avoidEscape: true
        }],
        "rest-spread-spacing": ["error", "never"],
        semi: ["error", "always", {
            omitLastInOneLineBlock: false
        }],
        "semi-spacing": ["error", {
            after: true,
            before: false
        }],
        "semi-style": ["error", "last"],
        "space-before-blocks": ["warn", "always"],
        "space-before-function-paren": ["warn", {
            anonymous: "always",
            asyncArrow: "always",
            named: "never"
        }],
        "space-in-parens": ["warn", "never"],
        "space-infix-ops": ["warn", {
            int32Hint: true
        }],
        "space-unary-ops": ["warn", {
            nonwords: false,
            words: true
        }],
        "switch-colon-spacing": ["error", {
            after: true,
            before: false
        }],
        "template-curly-spacing": ["warn", "never"],
        "template-tag-spacing": ["warn", "never"],
        "unicode-bom": ["warn", "never"],
        "wrap-iife": ["warn", "inside"],
        "wrap-regex": "warn",
        "yield-star-spacing": ["warn", "both"]
    }
};
