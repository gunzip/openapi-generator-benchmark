import { z } from "zod";


export const testParameterWithDashPathParamsSchema = z.object({ "path_param": z.string() });

 export const testParameterWithDashQueryParamsSchema = z.object({ "foo-bar": z.string().optional(), "request-id": z.string().optional() }).optional();

 export const testParameterWithDashHeaderParamsSchema = z.object({ "headerInlineParam": z.string(), "x-header-param": z.string().describe("A header param which has dashes in it") });
/**
 * @description Ok
 */
export const testParameterWithDash200Schema = z.any();
/**
 * @description Fatal error
 */
export const testParameterWithDash500Schema = z.any();

 export const testParameterWithDashQueryResponseSchema = z.any();