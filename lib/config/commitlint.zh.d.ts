/** @type {import('cz-git').UserConfig} */
declare const commitTypes: import('cz-git').UserConfig;
export const rules: {
    "type-empty": (string | number)[];
    "type-case": (string | number)[];
    "type-enum": any[];
    "scope-case": (string | number)[];
    "subject-empty": (string | number)[];
};
export namespace prompt {
    export namespace messages {
        const type: string;
        const scope: string;
        const customScope: string;
        const subject: string;
        const body: string;
        const breaking: string;
        const footerPrefixsSelect: string;
        const customFooterPrefixs: string;
        const footer: string;
        const confirmCommit: string;
    }
    export { commitTypes as types };
    export const useEmoji: boolean;
    export const scopes: never[];
    export const allowCustomScopes: boolean;
    export const allowEmptyScopes: boolean;
    export const customScopesAlign: string;
    export const customScopesAlias: string;
    export const emptyScopesAlias: string;
    export const upperCaseSubject: boolean;
    export const allowBreakingChanges: string[];
    export const breaklineNumber: number;
    export const breaklineChar: string;
    export const skipQuestions: string[];
    export const issuePrefixs: {
        value: string;
        name: string;
    }[];
    export const customIssuePrefixsAlign: string;
    export const emptyIssuePrefixsAlias: string;
    export const customIssuePrefixsAlias: string;
    export const allowCustomIssuePrefixs: boolean;
    export const allowEmptyIssuePrefixs: boolean;
    export const confirmColorize: boolean;
    export const maxHeaderLength: number;
    export const maxSubjectLength: number;
    export const minSubjectLength: number;
    export const scopeOverrides: undefined;
    export const defaultBody: string;
    export const defaultIssues: string;
    export const defaultScope: string;
    export const defaultSubject: string;
}
export {};
