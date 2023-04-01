import { Component, OnInit } from '@angular/core';
import { Modalidade } from '../modalidade.model';

@Component({
  selector: 'app-modalidade-list',
  templateUrl: './modalidade-list.component.html',
  styleUrls: ['./modalidade-list.component.css']
})
export class ModalidadeListComponent implements OnInit {

  modalidades!: Modalidade[];

  constructor() { }

  ngOnInit(): void {
  }

}
