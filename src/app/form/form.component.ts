import { Component, OnInit } from '@angular/core';
import {
  IDocPlatporCurrForm,
  IDocPlatporCurrResponse,
} from '../models/doc_platpor_curr.model';
import { BaseFormComponent } from '../base-form.component';
import { DocumentService } from '../document.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EDocType } from '../models/document.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent
  extends BaseFormComponent<IDocPlatporCurrResponse, IDocPlatporCurrForm>
  implements OnInit
{
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

  ngOnInit(): void {}

  protected override prefillDocument(document: IDocPlatporCurrForm) {
    this.formGroup.patchValue(document);
    this.documentService.getDocumentById('123', EDocType.Platpor_curr);
  }
  public test(): void {
    this.documentService.getDocumentById('123', EDocType.Platpor_curr);
  }
}
