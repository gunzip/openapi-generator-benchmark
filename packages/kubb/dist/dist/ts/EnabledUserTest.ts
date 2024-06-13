export const enabledUserTestEnabled = {
    "true": true
} as const;
export type EnabledUserTestEnabled = (typeof enabledUserTestEnabled)[keyof typeof enabledUserTestEnabled];
export type EnabledUserTest = {
    /**
     * @type string
    */
    description: string;
    /**
     * @type boolean
    */
    enabled: EnabledUserTestEnabled;
    /**
     * @type string
    */
    username: string;
};