import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";

import {DropdownModule} from "primeng/dropdown";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";

import {TemplateService} from "./service/template.service";

import {TemplateMessage} from "./model/template-message/templateMessage";
import {Department} from "./model/department";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DropdownModule, DialogModule, ButtonModule, InputTextModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'Reactive-forms';
  templateMessage: TemplateMessage;
  isModal: boolean = false;
  loadingButton: boolean = false;
  disabledButton: boolean = false;
  departments: Department[] = [
    {
      "id": 1,
      "title": "Suporte"
    },
    {
      "id": 2,
      "title": "Comercial"
    },
    {
      "id": 3,
      "title": "Financeiro"
    },
    {
      "id": 4,
      "title": "Desenvolvimento"
    },
    {
      "id": 5,
      "title": "Implantação"
    }
  ];

  constructor(private readonly templateService: TemplateService) {
    this.templateMessage = templateService.getTemplateMessage();
  }

  load() {
    this.loadingButton = true;

    setTimeout(() => {
      this.loadingButton = false
      this.isModal = true;
      this.disabledButton = true;
    }, 1000);
  }

  closeModal() {
    this.isModal = false;
    this.disabledButton = false;
  }
}
