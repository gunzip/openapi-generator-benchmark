import { MessageSubject } from "./MessageSubject";
import { MessageBodyMarkdown } from "./MessageBodyMarkdown";

 export type MessageContent = {
    subject?: MessageSubject;
    markdown: MessageBodyMarkdown;
};