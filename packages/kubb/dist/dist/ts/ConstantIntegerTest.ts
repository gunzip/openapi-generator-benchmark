export const constantIntegerTest = {
    "100": 100
} as const;
export type ConstantIntegerTest = (typeof constantIntegerTest)[keyof typeof constantIntegerTest];