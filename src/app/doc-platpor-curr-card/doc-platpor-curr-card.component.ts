import { Component } from '@angular/core';
import {
  DocumentResponseTypes,
  EDocModule,
  EDocType,
} from '../models/document.model';
import { IDocPlatporCurrResponse } from '../models/doc_platpor_curr.model';
import { IBaseCard } from '../services/document-card.directive';

@Component({
  selector: 'app-doc-platpor-curr-card',
  templateUrl: './doc-platpor-curr-card.component.html',
  styleUrls: ['./doc-platpor-curr-card.component.scss'],
})
export class DocPlatporCurrCardComponent implements IBaseCard {
  constructor() {}

  document: IDocPlatporCurrResponse = {
    docType: EDocType.Platpor_curr,
    docModule: EDocModule.IBank_Ul_Curr,
    amount: '',
    accNumber: '',
    id: '',
    docDate: '',
    docNumber: '',
    changeStamp: new Date(),
    createStamp: new Date(),
    description: '',
    swift: '',
    '@type': '',
    signStatus: '0',
    signStatusCaption: '',
    status: '',
    statusCaption: '',
  };
}
