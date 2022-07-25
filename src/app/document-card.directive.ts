import {Directive, Input, Type, ViewContainerRef} from '@angular/core';
import {DocumentResponseTypes, EDocType} from "./models/document.model";
import {DocPlatporCurrCardComponent} from "./doc-platpor-curr-card/doc-platpor-curr-card.component";
import {DocPlatporCardComponent} from "./doc-platpor-card/doc-platpor-card.component";

export interface IBaseCard {
  document: DocumentResponseTypes;
}

@Directive({
  selector: '[documentCard]'
})
export class DocumentCardDirective {
  @Input() document: DocumentResponseTypes | undefined
  components: Record<DocumentResponseTypes['docType'], Type<IBaseCard>> = {
    [EDocType.Dealpass]: DocPlatporCardComponent,
    [EDocType.Platpor]: DocPlatporCardComponent,
    [EDocType.Platpor_curr]: DocPlatporCurrCardComponent
  }

  constructor(
    private viewContainerRef: ViewContainerRef
  ) {
    if (this.document?.docType) {
      const component = this.components[this.document.docType];
      const componentElement = this.viewContainerRef.createComponent(component);
      componentElement.instance.document = this.document;
    }
  }

}
