export const disabledUserTestEnabled = {
    "false": false
} as const;
export type DisabledUserTestEnabled = (typeof disabledUserTestEnabled)[keyof typeof disabledUserTestEnabled];
export type DisabledUserTest = {
    /**
     * @type boolean
    */
    enabled: DisabledUserTestEnabled;
    /**
     * @type string
    */
    reason: string;
    /**
     * @type string
    */
    username: string;
};