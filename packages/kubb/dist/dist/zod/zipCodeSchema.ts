import { z } from "zod";


export const zipCodeSchema = z.string().regex(new RegExp("^\\d{5}$"));