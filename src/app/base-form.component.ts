import {BaseComponent} from "./base.component";
import {AbstractControl, FormGroup} from "@angular/forms";
import {DocumentFormTypes, DocumentResponseTypes, EDocType} from "./models/document.model";
import {DocumentService} from "./document.service";
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject, forkJoin, Observable, switchMap, takeUntil, tap} from "rxjs";
import {Location} from "@angular/common";

export abstract class BaseFormComponent<T extends DocumentResponseTypes, K extends DocumentFormTypes> extends BaseComponent {
  public formGroup: FormGroup<Record<keyof K, AbstractControl>>;
  public loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)
  protected docId: string = '';
  protected action: string = '';
  protected docType: EDocType | undefined;


  protected constructor(
    protected documentService: DocumentService<T, K>,
    protected activatedRoute: ActivatedRoute,
    protected location: Location
  ) {
    super();
    this.formGroup = this.createForm();
    this.getQueryParams()
      .pipe(
        takeUntil(this.unsubscribe$),
        switchMap(() => forkJoin([
          this.getSettings(),
          this.getDocumentForEditOrCopy()
        ])))
      .subscribe(([settings, document]) => {
        this.setSettings(settings)
        this.subscribeOnFormControls()
        if (document) {
          this.prefillDocument(document);
        }
        this.loading.next(false)
      })
  }

  protected getDocumentForEditOrCopy(): Observable<K> {
    throw new Error('Это обязательный метод. Необходимо его реализовать')
  }

  getQueryParams(): Observable<any> {
    return this.activatedRoute.params.pipe(tap((params) => {
      this.docId = params['id'];
      this.docType = params['docType'];
      this.action = params['action'];
    }));
  }


  protected createForm(): FormGroup<Record<keyof K, AbstractControl>> {
    throw new Error('Это обязательный метод. Необходимо его реализовать')
  }

  protected sendForm(data: K): void {
    throw new Error('Это обязательный метод. Необходимо его реализовать')
  }


  public handleCancelButton() {
    throw new Error('Это обязательный метод. Необходимо его реализовать')
  }

  public handleSubmitButton() {
    throw new Error('Это обязательный метод. Необходимо его реализовать')
  }
  public handleBackButton() {
    this.location.back();
  }

  protected getSettings() {
    return new Observable(subscriber => subscriber.complete())
  }

  protected setSettings(settings: any) {
  }

  protected prefillDocument(document: K) {
    // @ts-ignore по причине того что по какой то непонятной причине TS в абстрактном классе не может сопоставить типы
    this.formGroup.patchValue(document)
  }

  protected subscribeOnFormControls() {

  }
}

