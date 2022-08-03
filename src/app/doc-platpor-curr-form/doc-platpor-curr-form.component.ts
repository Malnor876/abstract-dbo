import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BaseFormComponent } from '../base-form.component';
import {
  IDocPlatporCurrForm,
  IDocPlatporCurrResponse,
} from '../models/doc_platpor_curr.model';
import { DocumentService } from '../services/document.service';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { map, Observable } from 'rxjs';
import { EDocModule, EDocType } from '../models/document.model';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-doc-platpor-curr-form',
  templateUrl: './doc-platpor-curr-form.component.html',
  styleUrls: ['./doc-platpor-curr-form.component.scss'],
})
export class DocPlatporCurrFormComponent extends BaseFormComponent<
  IDocPlatporCurrResponse,
  IDocPlatporCurrForm
> {
  constructor(
    protected override documentService: DocumentService<
      IDocPlatporCurrResponse,
      IDocPlatporCurrForm
    >,
    protected override activatedRoute: ActivatedRoute,
    protected override location: Location
  ) {
    super(documentService, activatedRoute, location);
  }

  protected override createForm() {
    return new FormGroup({
      amount: new FormControl(''),
      accNumber: new FormControl(''),
      description: new FormControl(''),
    });
  }
  protected override getDocumentForEditOrCopy() {
    ``;
    if (this.docId) {
      return this.documentService
        .getDocumentById(
          this.docId,
          EDocType.Platpor_curr,
          EDocModule.IBank_Ul_Curr
        )
        .pipe(map((response: any) => response.transferCurrUlMetinv));
    }
    return new Observable<null>((subscriber) => {
      subscriber.next(null);
      subscriber.complete();
    });
  }
  protected override sendForm() {}
}
