import { Component } from '@angular/core';
import { InvoiceRow } from './invoice-row';
import { invoiceData } from './invoice-data';

@Component({
  selector: 'my-app',
  template: `
    <div class="example-config">
      <button class="k-button" (click)="pdf.saveAs('invoice.pdf')">
        Save As PDF...
      </button>
    </div>

    <kendo-pdf-export #pdf paperSize="A4" margin="2cm">
      <my-invoice [data]="data"></my-invoice>
    </kendo-pdf-export>
  `,
  styles: [`
    kendo-pdf-export {
      font-family: 'Coming Soon', cursive;
      font-size: 12px;
    }
  `]
})
export class AppComponent {
  public data: InvoiceRow[] = invoiceData;
}
