/** AUTOGENERATED - DO NOT EDIT **/
/* tslint:disable */
/* eslint-disable */

import { z } from "zod"

export const PermissiveBoolean = z.preprocess((value) => {
  if (typeof value === "string" && (value === "true" || value === "false")) {
    return value === "true"
  } else if (typeof value === "number" && (value === 1 || value === 0)) {
    return value === 1
  }
  return value
}, z.boolean())

export const s_MessageBodyMarkdown = z.string().min(80).max(10000)

export const s_MessageSubject = z.string().min(10).max(120)

export const s_OneOfTest = z.union([
  z.object({ limited: PermissiveBoolean.optional() }),
  z.object({ unlimited: PermissiveBoolean.optional() }),
])

export const s_ZipCode = z.string().regex(new RegExp("^\\d{5}$"))

export const s_Address = z.object({
  location: z.string().optional(),
  city: z.string().optional(),
  zipCode: s_ZipCode.optional(),
})

export const s_MessageContent = z.object({
  subject: s_MessageSubject.optional(),
  markdown: s_MessageBodyMarkdown,
})

export const s_Message = z.object({
  id: z.string(),
  content: s_MessageContent,
  sender_service_id: z.string().optional(),
})

export const s_Person = z.object({
  name: z.string().optional(),
  address: s_Address.optional(),
  birth: z.string().datetime({ offset: true }).optional(),
  death: z.string().optional(),
  age: z.union([z.literal(20), z.literal(40), z.literal(50)]).optional(),
  zipCode: z.string().regex(new RegExp("[0-9]+")).optional(),
})