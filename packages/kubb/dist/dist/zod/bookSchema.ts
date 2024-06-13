import { authorSchema } from "./authorSchema";
import { z } from "zod";


export const bookSchema = z.object({ "title": z.string().describe("title of the book").optional(), "author": z.lazy(() => authorSchema).optional() });