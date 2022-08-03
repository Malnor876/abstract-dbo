import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocPlatporCurrFormComponent } from './doc-platpor-curr-form/doc-platpor-curr-form.component';
import { VedComponent } from './ved/ved.component';

const routes: Routes = [
  { path: '', component: VedComponent },
  { path: 'doc_platpor_curr', component: DocPlatporCurrFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
