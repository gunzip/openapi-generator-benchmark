import { z } from "zod";

 /**
 * @description The full version of the message, in plain text or Markdown format. The\ncontent of this field will be delivered to channels that don\'t have any\nlimit in terms of content size (e.g. email, etc...).
 */
export const messageBodyMarkdownSchema = z.string().min(80).max(10000).describe("The full version of the message, in plain text or Markdown format. The\ncontent of this field will be delivered to channels that don't have any\nlimit in terms of content size (e.g. email, etc...).");