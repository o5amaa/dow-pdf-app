import {Routes} from '@angular/router';
import {HtmlToPdfComponent} from "./html-to-pdf/html-to-pdf.component";

export const routes: Routes = [
  {path: 'pdf', component: HtmlToPdfComponent},
  {path: '', redirectTo: '/pdf', pathMatch: 'full'}, // إعادة توجيه المسار الفارغ إلى /pdf
  {path: '**', redirectTo: '/pdf'}, // معالجة مسارات غير معروفة
];
