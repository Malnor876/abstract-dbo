import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { DocumentCardDirective } from './document-card.directive';
import { ButtonActionsComponent } from './button-actions/button-actions.component';
import { DocPlatporCurrCardComponent } from './doc-platpor-curr-card/doc-platpor-curr-card.component';
import { DocPlatporCardComponent } from './doc-platpor-card/doc-platpor-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DocumentListComponent,
    DocumentCardDirective,
    ButtonActionsComponent,
    DocPlatporCurrCardComponent,
    DocPlatporCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
