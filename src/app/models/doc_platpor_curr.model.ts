
import {AbstractDocumentResponse, EDocModule, EDocType} from "./document.model";

export interface IDocPlatporCurr {
  amount: string | number,
  accNumber: string | number,
  corrAccNumber: string | number,
  swiftMessage: string
}
export interface IDocPlatporCurrResponse extends IDocPlatporCurr, AbstractDocumentResponse {
  docType: EDocType.Platpor_curr,
  docModule: EDocModule.IBank_Ul_Curr,
  swiftMessage: string
}

export type IDocPlatporCurrForm = Required<Omit<IDocPlatporCurr, 'swiftMessage'>>
