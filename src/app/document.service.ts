import {Injectable} from '@angular/core';
import {ApiService, ILastDocumentsFullWithActions,} from "./api.service";
import {Observable} from "rxjs";
import {DocumentFormTypes, DocumentResponseTypes, EDocType} from "./models/document.model";
import { AbstractDocumentService } from './abstract-document.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentService<T extends DocumentResponseTypes, K extends DocumentFormTypes> extends AbstractDocumentService<T, K> {

  constructor(
    protected override apiService: ApiService
  ) {
    super(apiService)
   }


}
