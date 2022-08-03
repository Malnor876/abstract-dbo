import {
  Directive,
  Input,
  OnInit,
  Renderer2,
  TemplateRef,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { DocPlatporCardComponent } from '../doc-platpor-card/doc-platpor-card.component';
import { DocPlatporCurrCardComponent } from '../doc-platpor-curr-card/doc-platpor-curr-card.component';
import { DocumentResponseTypes } from '../models/document.model';

export interface IBaseCard {
  document: DocumentResponseTypes;
}

@Directive({
  selector: '[documentCard]',
})
export class DocumentCardDirective implements OnInit {
  @Input('documentCard') document: DocumentResponseTypes | undefined;
  components: Record<DocumentResponseTypes['docType'], Type<IBaseCard>> = {
    doc_platpor: DocPlatporCardComponent,
    doc_platpor_curr: DocPlatporCurrCardComponent,
  };

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private renderer: Renderer2
  ) {}
  ngOnInit(): void {
    if (this.document?.docType) {
      const embViewRef = this.viewContainerRef.createEmbeddedView(
        this.templateRef
      );
      const firstRootNode = embViewRef.rootNodes[0];
      const componentRef = this.viewContainerRef.createComponent(
        this.components[this.document.docType]
      );
      this.renderer.insertBefore(
        firstRootNode,
        componentRef.location.nativeElement,
        firstRootNode.childNodes[0]
      );
      componentRef.instance.document = this.document;
    }
  }
}
