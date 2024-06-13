/** AUTOGENERATED - DO NOT EDIT **/
/* tslint:disable */
/* eslint-disable */

export type t_Address = {
  city?: string
  location?: string
  zipCode?: t_ZipCode
}

export type t_CustomStringFormatTest = string

export type t_Message = {
  content: t_MessageContent
  id: string
  sender_service_id?: string
}

export type t_MessageBodyMarkdown = string

export type t_MessageContent = {
  markdown: t_MessageBodyMarkdown
  subject?: t_MessageSubject
}

export type t_MessageSubject = string

export type t_NewModel = {
  id: string
  name: string
}

export type t_OneOfTest =
  | {
      limited?: boolean
    }
  | {
      unlimited?: boolean
    }

export type t_Person = {
  address?: t_Address
  age?: 20 | 40 | 50
  birth?: string
  death?: string
  name?: string
  zipCode?: string
}

export type t_ZipCode = string

export type t_testBinaryFileUploadMultipartFormDataRequestBody = {
  file?: string
}

export type t_testFileUploadMultipartFormDataRequestBody = {
  file?: string
}