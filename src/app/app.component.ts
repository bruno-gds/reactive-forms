import {Component, computed} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgFor} from "@angular/common";

import {TemplateService} from "./service/template.service";

import {TemplateMessage} from "./model/templateMessage";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Reactive-forms';
  templateMessage: TemplateMessage;

  constructor(private readonly templateService: TemplateService) {
    this.templateMessage = templateService.getTemplateMessage();
  }

  protected readonly computed = computed;
}
