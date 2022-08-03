import { BaseComponent } from './base.component';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
} from '@angular/forms';
import {
  DocumentFormTypes,
  DocumentResponseTypes,
  EDocType,
} from './models/document.model';
import { DocumentService } from './services/document.service';
import { ActivatedRoute } from '@angular/router';
import {
  BehaviorSubject,
  forkJoin,
  Observable,
  shareReplay,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({ template: '' })
export abstract class BaseFormComponent<
    T extends DocumentResponseTypes,
    K extends DocumentFormTypes
  >
  extends BaseComponent
  implements OnInit
{
  public formGroup: FormGroup<Record<keyof K, any>>;
  public loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  protected docId: string | null | undefined;
  protected action: string | null | undefined;
  protected docType: EDocType | null | undefined;

  protected constructor(
    protected documentService: DocumentService<T, K>,
    protected activatedRoute: ActivatedRoute,
    protected location: Location
  ) {
    super();
    this.formGroup = this.createForm();
  }
  ngOnInit(): void {
    this.getQueryParams()
      .pipe(
        takeUntil(this.unsubscribe$),
        switchMap(() =>
          forkJoin([this.getSettings(), this.getDocumentForEditOrCopy()])
        )
      )
      .subscribe(([settings, document]) => {
        this.setSettings(settings);
        this.subscribeOnFormControls();
        if (document) {
          this.prefillDocument(document);
        }
        this.loading.next(false);
      });
  }

  protected getDocumentForEditOrCopy(): Observable<K | null> {
    throw new Error('Это обязательный метод. Необходимо его реализовать');
  }

  getQueryParams(): Observable<any> {
    return this.activatedRoute.queryParamMap.pipe(
      shareReplay(),
      tap((params) => {
        this.docId = params.get('id');
        this.docType = params.get('docType') as EDocType;
        this.action = params.get('action');
      })
    );
  }
  protected createForm(): FormGroup<Record<keyof K, any>> {
    throw new Error('Это обязательный метод. Необходимо его реализовать');
  }

  protected sendForm(data: K): void {
    throw new Error('Это обязательный метод. Необходимо его реализовать');
  }

  public handleCancelButton() {
    throw new Error('Это обязательный метод. Необходимо его реализовать');
  }

  public handleSubmitButton() {
    throw new Error('Это обязательный метод. Необходимо его реализовать');
  }
  public handleBackButton() {
    this.location.back();
  }

  protected getSettings() {
    return new Observable((subscriber) => {
      subscriber.next();
      subscriber.complete();
    });
  }

  protected setSettings(settings: any) {}

  protected prefillDocument(document: K) {
    // @ts-ignore по причине того что по какой то непонятной причине TS в абстрактном классе не может сопоставить типы
    this.formGroup.patchValue(document);
  }

  protected subscribeOnFormControls() {}
}
