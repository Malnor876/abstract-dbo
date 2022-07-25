import { Component, OnInit } from '@angular/core';
import {IBaseCard} from "../document-card.directive";
import {DocumentResponseTypes} from "../models/document.model";

@Component({
  selector: 'app-doc-platpor-curr-card',
  templateUrl: './doc-platpor-curr-card.component.html',
  styleUrls: ['./doc-platpor-curr-card.component.scss']
})
export class DocPlatporCurrCardComponent implements OnInit, IBaseCard {

  constructor() { }

  ngOnInit(): void {
  }

  document: DocumentResponseTypes;

}
