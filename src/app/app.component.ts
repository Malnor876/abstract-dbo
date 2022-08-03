import { Component } from '@angular/core';
import { EDocModule, EDocType } from './models/document.model';
import { IDocPlatporCurrResponse } from './models/doc_platpor_curr.model';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'abstract-dbo';
  public document: IDocPlatporCurrResponse = {
    '@type': '',
    amount: '',
    accNumber: '',
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
    createStamp: new Date(),
    swift: '',
    description: '',
  };
  constructor(private authService: AuthService) {}
}
