import {Component, OnInit} from '@angular/core';
import {BaseDocumentListComponents} from "../base-document-list.components";
import {IDocPlatporCurrResponse} from "../models/doc_platpor_curr.model";
import {DocumentService} from "../document.service";

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent extends BaseDocumentListComponents<IDocPlatporCurrResponse> implements OnInit {

  constructor(
    protected override documentService: DocumentService<IDocPlatporCurrResponse, any>
  ) {
    super(documentService)
  }

  ngOnInit(): void {
  }

}
