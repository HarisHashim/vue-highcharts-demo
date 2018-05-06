// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint"
  },
  env: {
    browser: true
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ["plugin:vue/essential","airbnb-base"],
  // required to lint *.vue files
  plugins: ["vue"],
  // check if imports actually resolve
  settings: {
    "import/resolver": {
      webpack: {
        config: "build/webpack.base.conf.js"
      }
    }
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        vue: "never"
      }
    ],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: [
          "state", // for vuex state
          "acc", // for reduce accumulators
          "e" // for e.returnvalue
        ]
      }
    ],
    // allow optionalDependencies
    "import/no-extraneous-dependencies": [
      "error",
      {
        optionalDependencies: ["test/unit/index.js"]
      }
    ],
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // Custom config
    "space-before-function-paren": [0, "never"],
    semi: 0,
    "brace-style": 0,
    quotes: 0,
    indent: 0,
    "key-spacing": 0,
    "no-tabs": 0,
    "no-mixed-spaces-and-tabs": 0,
    "vue/no-side-effects-in-computed-properties": 0,
    "no-spaced-func": 0,
    "func-call-spacing": 0,
    "comma-dangle": 0,
    "no-console": 0,
    "object-shorthand": 0,
    "no-mixed-operators": 0,
    "prefer-template": 0,
    "prefer-const": 0,
    "no-mutable-exports": 0,
    "prefer-arrow-callback": 0,
    "one-var": 0,
    "no-var": 0,
    "wrap-iife": 0,
    "no-shadow": 0,
    "func-names": 0,
    "no-new":0,
    "max-len":0,
    "import/extensions": 0,
    "spaced-comment":0,
    "no-prototype-builtins":0,
    "import/no-extraneous-dependencies": 1,
    "import/no-mutable-exports":0,
    "import/newline-after-import":0,
    "import/first":0,
    "import/no-named-as-default":0
    
  }
};
