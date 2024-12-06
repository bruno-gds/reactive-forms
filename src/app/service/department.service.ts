import { Injectable } from '@angular/core';

import {Department} from "../model/department";


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private readonly departments: Department[] = [
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

  getDepartments() {
    return this.departments;
  }
}
