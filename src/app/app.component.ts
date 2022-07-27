import {Component, OnInit} from '@angular/core';
import { EDocModule, EDocType } from './models/document.model';
import { IDocPlatporCurrResponse } from './models/doc_platpor_curr.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'abstract-dbo';
  public document: IDocPlatporCurrResponse = {
    "@type": '',
    swiftMessage: '',
    amount: '',
    accNumber: '',
    corrAccNumber: '',
    docType: EDocType.Platpor_curr,
    docModule: EDocModule.IBank_Ul_Curr,
    signStatus: '0',
    id: '',
    signStatusCaption: '',
    status: '',
    statusCaption: '',
    docDate: '',
    docNumber: '',
    changeStamp: new Date(),
    createStamp: new Date()
  }

  ngOnInit(): void {
  }
}
