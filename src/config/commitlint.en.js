// .commitlintrc.js
/** @type {import('cz-git').UserConfig} */
const commitTypes = [
  { value: "feat", name: "feat:     A new feature", emoji: ":sparkles:" },
  { value: "fix", name: "fix:      A bug fix", emoji: ":bug:" },
  { value: "docs", name: "docs:     Documentation only changes", emoji: ":memo:" },
  { value: "style", name: "style:    Changes that do not affect the meaning of the code", emoji: ":lipstick:" },
  {
    value: "refactor",
    name: "refactor: A code change that neither fixes a bug nor adds a feature",
    emoji: ":recycle:",
  },
  { value: "perf", name: "perf:     A code change that improves performance", emoji: ":zap:" },
  { value: "test", name: "test:     Adding missing tests or correcting existing tests", emoji: ":white_check_mark:" },
  {
    value: "build",
    name: "build:    Changes that affect the build system or external dependencies",
    emoji: ":building_construction:",
  },
  { value: "ci", name: "ci:       Changes to our CI configuration files and scripts", emoji: ":green_heart:" },
  { value: "chore", name: "chore:    Other changes that don't modify src or test files", emoji: ":hammer:" },
  { value: "revert", name: "revert:   Reverts a previous commit", emoji: ":rewind:" },
];
module.exports = {
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
    "type-empty": [2, "never"],
    "type-case": [2, "always", "lower-case"],
    "type-enum": [2, "always", commitTypes.map((type) => type.value)],
    "scope-case": [2, "always", "lower-case"],
    "subject-empty": [2, "never"],
  },
  prompt: {
    messages: {
      type: "Select the type of change that you're committing:",
      scope: "Denote the SCOPE of this change (optional):",
      customScope: "Denote the SCOPE of this change:",
      subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
      body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
      breaking: 'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
      footerPrefixsSelect: "Select the ISSUES type of changeList by this change (optional):",
      customFooterPrefixs: "Input ISSUES prefix:",
      footer: "List any ISSUES by this change. E.g.: #31, #34:\n",
      confirmCommit: "Are you sure you want to proceed with the commit above?",
    },
    types: commitTypes,
    useEmoji: false,
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: "top",
    customScopesAlias: "custom",
    emptyScopesAlias: "empty",
    upperCaseSubject: false,
    allowBreakingChanges: ["feat", "fix"],
    breaklineNumber: 100,
    breaklineChar: "|",
    skipQuestions: ["breaking", "footerPrefix"],
    issuePrefixs: [{ value: "closed", name: "closed:   ISSUES has been processed" }],
    customIssuePrefixsAlign: "top",
    emptyIssuePrefixsAlias: "skip",
    customIssuePrefixsAlias: "custom",
    allowCustomIssuePrefixs: true,
    allowEmptyIssuePrefixs: true,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: "",
    defaultIssues: "",
    defaultScope: "",
    defaultSubject: "",
  },
};
