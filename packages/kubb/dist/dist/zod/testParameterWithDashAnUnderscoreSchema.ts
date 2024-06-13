import { z } from "zod";


export const testParameterWithDashAnUnderscorePathParamsSchema = z.object({ "path_param": z.string() });

 export const testParameterWithDashAnUnderscoreQueryParamsSchema = z.object({ "foo_bar": z.string().optional(), "request-id": z.string().optional() }).optional();

 export const testParameterWithDashAnUnderscoreHeaderParamsSchema = z.object({ "headerInlineParam": z.string(), "x-header-param": z.string().describe("A header param which has dashes in it") });
/**
 * @description Ok
 */
export const testParameterWithDashAnUnderscore200Schema = z.any();
/**
 * @description Fatal error
 */
export const testParameterWithDashAnUnderscore500Schema = z.any();

 export const testParameterWithDashAnUnderscoreQueryResponseSchema = z.any();