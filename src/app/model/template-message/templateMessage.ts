import {TemplateMessageComponents} from "./templateMessageComponents";

export interface TemplateMessage {
  name: string;
  components: TemplateMessageComponents[];
  language: string;
  status: string;
}
