import { z } from "zod";
import { messageSchema } from "./messageSchema";
import { oneOfTestSchema } from "./oneOfTestSchema";

 /**
 * @description Will return a Message
 */
export const testMultipleSuccess200Schema = z.lazy(() => messageSchema);
/**
 * @description Will return just accepted
 */
export const testMultipleSuccess202Schema = z.any();
/**
 * @description You do not have necessary permissions for the resource
 */
export const testMultipleSuccess403Schema = z.lazy(() => oneOfTestSchema);
/**
 * @description Not found
 */
export const testMultipleSuccess404Schema = z.any();
/**
 * @description Will return a Message
 */
export const testMultipleSuccessQueryResponseSchema = z.lazy(() => messageSchema);