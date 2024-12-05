import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";

import {DropdownModule} from "primeng/dropdown";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";

import {TemplateService} from "./service/template.service";

import {TemplateMessage} from "./model/templateMessage";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DropdownModule, DialogModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'Reactive-forms';
  templateMessage: TemplateMessage;
  isModal: boolean = false;
  loadingButton: boolean = false;

  constructor(private readonly templateService: TemplateService) {
    this.templateMessage = templateService.getTemplateMessage();
  }

  load() {
    this.loadingButton = true;

    setTimeout(() => {
      this.loadingButton = false
      this.isModal = true;
    }, 1000);
  }
}
