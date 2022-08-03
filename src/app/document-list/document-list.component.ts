import { Component, Input } from '@angular/core';
import { BaseDocumentListComponents } from '../base-document-list.components';
import { IDocPlatporCurrResponse } from '../models/doc_platpor_curr.model';
import { DocumentService } from '../services/document.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss'],
})
export class DocumentListComponent {
  @Input() documentsWithActions: any[] = [];
  constructor() {}
}
