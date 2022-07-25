import {DocumentResponseTypes} from "./models/document.model";
import {DocumentService} from "./document.service";
import {BehaviorSubject} from "rxjs";


export abstract class BaseDocumentListComponents<T extends DocumentResponseTypes> {
  public documents$: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([])

  protected constructor(
    protected documentService: DocumentService<T, any>
  ) {
    this.getDocuments();
  }

  protected getDocuments() {
    throw new Error('Это обязательный метод. Необходимо его реализовать');
  }


  public showMore() {
    throw new Error('Это обязательный метод. Необходимо его реализовать');
  }
}
