import { Component, OnInit } from '@angular/core';
import {IBaseCard} from "../document-card.directive";
import {DocumentResponseTypes} from "../models/document.model";

@Component({
  selector: 'app-doc-platpor-card',
  templateUrl: './doc-platpor-card.component.html',
  styleUrls: ['./doc-platpor-card.component.scss']
})
export class DocPlatporCardComponent implements OnInit, IBaseCard {

  constructor() { }

  ngOnInit(): void {
  }

  document: DocumentResponseTypes;

}
