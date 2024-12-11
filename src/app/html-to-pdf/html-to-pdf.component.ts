import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

@Component({
  selector: 'app-html-to-pdf',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './html-to-pdf.component.html',
  styleUrl: './html-to-pdf.component.scss'
})
export class HtmlToPdfComponent {


  public generatePdf() {
    const element: any = document.getElementById('contentConvert');


    html2canvas(element, {scale: 2}).then((canvas) => {
      const pdf = new jsPDF();


      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);

      // pdf.setProperties({
      //   title: 'Test Pdf ..',
      //   subject: 'Test Pdf subject ..',
      //   author: 'Test Pdf author ...',
      // });
      //
      // pdf.setFontSize(12);

      // pdf.text('Hello World!', 14, 22);

      pdf.save('myFile.pdf');
    });
  }
}
