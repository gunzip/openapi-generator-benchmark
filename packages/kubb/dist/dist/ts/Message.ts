import { MessageContent } from "./MessageContent";

 export type Message = {
    /**
     * @type string
    */
    id: string;
    content: MessageContent;
    /**
     * @type string | undefined
    */
    sender_service_id?: string;
};