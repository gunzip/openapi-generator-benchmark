import { z } from "zod";
import { personSchema } from "./personSchema";

 /**
 * @description Ok
 */
export const testDates200Schema = z.lazy(() => personSchema);
/**
 * @description Ok
 */
export const testDatesQueryResponseSchema = z.lazy(() => personSchema);