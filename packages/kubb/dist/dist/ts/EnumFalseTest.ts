export const enumFalseTestFlag = {
    "false": false
} as const;
export type EnumFalseTestFlag = (typeof enumFalseTestFlag)[keyof typeof enumFalseTestFlag];
export type EnumFalseTest = {
    /**
     * @type boolean | undefined
    */
    flag?: EnumFalseTestFlag;
};