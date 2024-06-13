import { z } from "zod";

 /**
 * @description Will send `Authenticated`
 */
export const testCustomTokenHeader200Schema = z.any();
/**
 * @description You do not have necessary permissions for the resource
 */
export const testCustomTokenHeader403Schema = z.any();

 export const testCustomTokenHeaderQueryResponseSchema = z.any();