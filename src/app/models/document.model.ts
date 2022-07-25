import {IDocPlatpor, IDocPlatporForm, IDocPlatporResponse} from "./doc_platpor.model";
import {IDocPlatporCurr, IDocPlatporCurrForm, IDocPlatporCurrResponse} from "./doc_platpor_curr.model";

export const enum EDocType {
  Platpor = 'doc_platpor',
  Platpor_curr = 'doc_platpor_curr',
  Dealpass = 'dealpass'
}
export const enum EDocModule {
  IBank_Ul = 'ibank_ul',
  IBank_Ul_Curr = 'ibank_ul_curr'
}
export interface AbstractDocumentResponse {
  '@type': string;
  docType: EDocType,
  docModule: EDocModule,
  signStatus: '0' | '1' | '2'
  id: string;
  signStatusCaption: string;
  status: string;
  statusCaption: string;
  docDate: string;
  docNumber: string;
  changeStamp: Date;
  createStamp: Date;
}

export const enum Actions {
  COPY = 'copy',
  SIGN = 'sign',
  PRINT = 'print'
}
export type DocumentTypes = IDocPlatpor | IDocPlatporCurr;
export type DocumentResponseTypes = IDocPlatporResponse | IDocPlatporCurrResponse;
export type DocumentFormTypes = IDocPlatporForm | IDocPlatporCurrForm;
export interface FormQueryParams {
  id: string,
  docType: EDocType,
  action: 'copy' | 'edit'
}
