import { Observable } from 'rxjs';
import { ApiService, ILastDocumentsFullWithActions } from '../api.service';
import {
  DocumentFormTypes,
  DocumentResponseTypes,
} from '../models/document.model';

export class AbstractDocumentService<
  T extends DocumentResponseTypes,
  K extends DocumentFormTypes
> {
  constructor(protected apiService: ApiService) {}

  public getDocumentById(
    id: string,
    docType: T['docType'],
    docModule: T['docModule']
  ): Observable<T> {
    return this.apiService.get<T>('document/visual/byid', {
      doc_ids: id,
      doc_type: docType,
      doc_module: docModule,
    });
  }

  public getDocumentList(
    body: any
  ): Observable<Readonly<ILastDocumentsFullWithActions<T>>> {
    return this.apiService.post<Readonly<ILastDocumentsFullWithActions<T>>>(
      '',
      body
    );
  }

  public createDocument(document: K): Observable<K> {
    return this.apiService.post<K>('', document);
  }
}
