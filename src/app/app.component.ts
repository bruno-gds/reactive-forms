import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

import {DropdownModule} from "primeng/dropdown";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";

import {TemplateService} from "./service/template.service";
import {DepartmentService} from "./service/department.service";

import {TemplateMessage} from "./model/template-message/templateMessage";
import {Department} from "./model/department";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DropdownModule, DialogModule, ButtonModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title: string = 'Reactive-forms';
  templateMessage: TemplateMessage;
  isModal: boolean = false;
  loadingButton: boolean = false;
  disabledButton: boolean = false;
  departments: Department[] = [];
  formulario: FormGroup = new FormGroup({});

  constructor(
    templateService: TemplateService,
    departmentService: DepartmentService,
    private readonly formBuilder: FormBuilder
  ) {
    this.templateMessage = templateService.getTemplateMessage();
    this.departments = departmentService.getDepartments();
  }

  ngOnInit() {
    this.templateMessage.components.forEach((component) => {
      if (component.type === 'BUTTONS') {
        component.buttons?.forEach((button, index) => {
          if (button.text !== 'Parar promoções') {
            this.formulario.addControl(`button_${index}`, this.formBuilder.control('', Validators.required));
          }
        });
      }
    });
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

    console.log('--> Botões:', this.formulario.value);
    console.log('--> Formulário -', this.formulario.valid);
  }
}
