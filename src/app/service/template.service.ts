import { Injectable } from '@angular/core';
import {TemplateMessage} from "../model/template-message/templateMessage";

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  private readonly templateMessage: TemplateMessage = {
    "name": "botao_a_rodo",
    "components": [
      {
        "type": "HEADER",
        "format": "TEXT",
        "text": "Teste com várias ações de botões"
      },
      {
        "type": "BODY",
        "text": "Só clique e seja feliz! 😁"
      },
      {
        "type": "BUTTONS",
        "buttons": [
          {
            "type": "QUICK_REPLY",
            "text": "Opcao 1"
          },
          {
            "type": "QUICK_REPLY",
            "text": "Opcao 2"
          },
          {
            "type": "QUICK_REPLY",
            "text": "Opcao 3"
          },
          {
            "type": "QUICK_REPLY",
            "text": "Opcao 4"
          },
          {
            "type": "QUICK_REPLY",
            "text": "Parar promoções"
          }
        ]
      }
    ],
    "language": "pt_BR",
    "status": "APPROVED"
  }

  getTemplateMessage() {
    return this.templateMessage;
  }
}
