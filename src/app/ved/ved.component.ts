import { Component, OnInit } from '@angular/core';
import { forkJoin, switchMap } from 'rxjs';
import { ApiService } from '../api.service';
import { EDocModule, EDocType } from '../models/document.model';
import { AuthService } from '../services/auth.service';
import { DocumentService } from '../services/document.service';

@Component({
  selector: 'app-ved',
  templateUrl: './ved.component.html',
  styleUrls: ['./ved.component.scss'],
})
export class VedComponent implements OnInit {
  public documentsWithActions: any[] = [];
  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService
      .login()
      .pipe(
        switchMap(() =>
          forkJoin([
            this.apiService.post(
              'last_documents_full',
              {
                docTypes: [
                  {
                    docType: EDocType.Platpor_curr,
                    docModule: EDocModule.IBank_Ul_Curr,
                  },
                ],
              },
              {
                number_of_entries: 5,
                list_of_statuses:
                  'new;for_send;send;decline;end;processed_vk;accept;for_send_abs;wait_decline',
              }
            ),
            this.apiService.post(
              'last_documents_full',
              {
                docTypes: [
                  {
                    docType: EDocType.Platpor,
                    docModule: EDocModule.IBank_Ul,
                  },
                ],
              },
              {
                number_of_entries: 5,
                list_of_statuses:
                  'new;for_send;send;decline;end;processed_vk;accept;for_send_abs;wait_decline',
              }
            ),
          ])
        )
      )
      .subscribe(([docPlatporCurr, docPlatpor]) => {
        this.documentsWithActions = (
          docPlatporCurr as any
        ).lastDocumentFullWithActions.concat(
          (docPlatpor as any).lastDocumentFullWithActions
        );
      });
  }
}
