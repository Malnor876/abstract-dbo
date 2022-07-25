import {AbstractDocumentResponse, EDocModule, EDocType} from "./document.model";

export interface IDocPlatporResponse extends IDocPlatpor, AbstractDocumentResponse {
  docType: EDocType.Platpor,
  docModule: EDocModule.IBank_Ul
}

export interface IDocPlatpor {
  corrAccNumber: string | number,
  clientId: string;
  clientRef: string;
  fullname: string;
  inn: string;
  kpp: string;
  accConto: string;
  accCurr: string;
  accCurrIso: string;
  accId: string;
  accNumber: string;
  accType: string;
  agreeRules: string;
  amount: string;
  amountAll: string;
  amountInWords: string;
  bankBik: string;
  bankCorrAccount: string;
  bankName: string;
  bankPlace: string;
  branchId: string;
  corrAccCurr: string;
  corrAccCurrIso: string;
  corrBankBik: string;
  corrBankCorrAccount: string;
  corrBankName: string;
  corrBankPlace: string;
  corrFullname: string;
  corrInn: string;
  currCode: string;
  currCodeIso: string;
  description: string;
  bankrupt: string;
  branchTimezone: string;
  changeStampClient: Date;
  corrBankId: string;
  corrType: string;
  createStampClient: Date;
  descriptionFull: string;
  isAllowedContoForUin: string;
  isAllowedZeroInKbk: string;
  isAvailableUin: string;
  isClientConsolidateGroup: string;
  isContoInKboContoList: string;
  isFederalTreasuryDepPayment: string;
  isInRevenueTypeContoList: string;
  isLimitRecepientsMoney: string;
  isTransferToNonresidentBank: string;
  ndsText: string;
  ndsTypeId: string;
  opertype: string;
  payNalogCorr: string;
  sendtype: string;
  sendtypeCaption: string;
  subCorrTypeUl: string;
  urgenttype: string;
}

export type IDocPlatporForm = Required<Omit<IDocPlatpor, 'amountInWords' | 'accNumber'>>

