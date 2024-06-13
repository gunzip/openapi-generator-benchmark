export const enumTestStatus = {
    "value1": "value1",
    "value2": "value2",
    "value3": "value3"
} as const;
export type EnumTestStatus = (typeof enumTestStatus)[keyof typeof enumTestStatus];
export type EnumTest = {
    /**
     * @type string | undefined
    */
    status?: EnumTestStatus;
};