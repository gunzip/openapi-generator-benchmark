import { messageSubjectSchema } from "./messageSubjectSchema";
import { messageBodyMarkdownSchema } from "./messageBodyMarkdownSchema";
import { z } from "zod";


export const messageContentSchema = z.object({ "subject": z.lazy(() => messageSubjectSchema).optional(), "markdown": z.lazy(() => messageBodyMarkdownSchema) });