import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import {
  AbstractDocumentResponse,
  EDocModule,
  EDocType,
} from './document.model';

export type IDocPlatporCurrResponse = AbstractDocumentResponse & {
  docType: EDocType.Platpor_curr;
  docModule: EDocModule.IBank_Ul_Curr;
  amount: string | number;
  accNumber: string | number;
  description: string;
  swift: string;
};

export type IDocPlatporCurrForm = Required<
  Omit<IDocPlatporCurrResponse, 'swift' | keyof AbstractDocumentResponse>
>;

type example = {
  id: string;
  docType: string;
};

type actions = 'send' | 'end';
