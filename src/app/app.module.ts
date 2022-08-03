import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { ButtonActionsComponent } from './button-actions/button-actions.component';
import { DocPlatporCurrCardComponent } from './doc-platpor-curr-card/doc-platpor-curr-card.component';
import { DocPlatporCardComponent } from './doc-platpor-card/doc-platpor-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { DocumentCardDirective } from './services/document-card.directive';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { VedComponent } from './ved/ved.component';
import { DocumentCardComponent } from './document-card/document-card.component';
import { DocPlatporCurrFormComponent } from './doc-platpor-curr-form/doc-platpor-curr-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DocumentListComponent,
    DocumentCardDirective,
    ButtonActionsComponent,
    DocPlatporCurrCardComponent,
    DocPlatporCardComponent,
    VedComponent,
    DocumentCardComponent,
    DocPlatporCurrFormComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
