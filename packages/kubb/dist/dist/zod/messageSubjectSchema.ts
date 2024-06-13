import { z } from "zod";

 /**
 * @description The (optional) subject of the message - note that only some notification\nchannels support the display of a subject. When a subject is not provided,\none gets generated from the client attributes.
 */
export const messageSubjectSchema = z.string().min(10).max(120).describe("The (optional) subject of the message - note that only some notification\nchannels support the display of a subject. When a subject is not provided,\none gets generated from the client attributes.");