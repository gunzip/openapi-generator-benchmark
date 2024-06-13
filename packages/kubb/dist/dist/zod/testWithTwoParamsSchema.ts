import { z } from "zod";


export const testWithTwoParamsPathParamsSchema = z.object({ "first_param": z.string(), "second_param": z.string() });
/**
 * @description Ok
 */
export const testWithTwoParams200Schema = z.any().optional();
/**
 * @description Fatal error
 */
export const testWithTwoParams500Schema = z.any().optional();

 export const testWithTwoParamsQueryResponseSchema = z.any().optional();