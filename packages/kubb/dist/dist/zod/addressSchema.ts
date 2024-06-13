import { zipCodeSchema } from "./zipCodeSchema";
import { z } from "zod";


export const addressSchema = z.object({ "location": z.string().optional(), "city": z.string().optional(), "zipCode": z.lazy(() => zipCodeSchema).optional() });