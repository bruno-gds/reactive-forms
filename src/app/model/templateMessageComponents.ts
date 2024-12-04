import {TemplateMessageComponentsButtons} from "./templateMessageComponentsButtons";

export interface TemplateMessageComponents {
  "type": string;
  "text"?: string;
  "format"?: string;
  "buttons"?: TemplateMessageComponentsButtons[];
}
