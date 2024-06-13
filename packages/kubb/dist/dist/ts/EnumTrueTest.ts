export const enumTrueTestFlag = {
    "true": true
} as const;
export type EnumTrueTestFlag = (typeof enumTrueTestFlag)[keyof typeof enumTrueTestFlag];
export type EnumTrueTest = {
    /**
     * @type boolean | undefined
    */
    flag?: EnumTrueTestFlag;
};