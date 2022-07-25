import {Injectable} from '@angular/core';
import {ApiService, ILastDocumentsFullWithActions,} from "./api.service";
import {Observable} from "rxjs";
import {DocumentFormTypes, DocumentResponseTypes} from "./models/document.model";

@Injectable({
  providedIn: 'root'
})
export class DocumentService<T extends DocumentResponseTypes, K extends DocumentFormTypes> {

  constructor(
    private apiService: ApiService
  ) { }

  public getDocumentById(id: string, doc_type: T['docType']): Observable<T> {
    return this.apiService.get<T>('')
  }

  public getDocumentList(body: any): Observable<Readonly<ILastDocumentsFullWithActions<T>>> {
    return this.apiService.post<Readonly<ILastDocumentsFullWithActions<T>>>('', body)
  }

  public createDocument(document: K): Observable<K> {
    return this.apiService.post<K>('', document)
  }

  // private test() {
  //   this.getDocumentById<IDocPlatporCurrResponse>('123', )
  //   this.getDocumentList<>({}).subscribe(data => {
  //   })
  // }

}
