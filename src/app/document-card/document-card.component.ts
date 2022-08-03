import { HttpParams } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ILastDocumentsFullWithActions } from '../api.service';
import { DocumentResponseTypes, EActions } from '../models/document.model';

@Component({
  selector: 'app-document-card',
  templateUrl: './document-card.component.html',
  styleUrls: ['./document-card.component.scss'],
})
export class DocumentCardComponent {
  @Input()
  documentWithActions!: {
    document: DocumentResponseTypes;
    actions: EActions;
  };
  constructor(private router: Router) {}

  public handleClickAction(action: string) {
    this.router.navigate(['doc_platpor_curr'], {
      queryParams: {
        id: this.documentWithActions.document.id,
        action: 'copy',
        docType: this.documentWithActions.document.id,
      },
    });
  }
}
