import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { ContenteditableValueAccessorModule } from '@tinkoff/angular-contenteditable-accessor';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

import { HomeComponent } from './home/home.component';
import { TermsComponent } from './terms/terms.component';
import { FeedbackReportComponent } from './feedback-report/feedback-report.component';
import { CheckupComponent } from './checkup/checkup.component';
import { PrintSurveyComponent } from './print-survey/print-survey.component';
import { GenerateFeedbackComponent } from './generate-feedback/generate-feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TermsComponent,
    FeedbackReportComponent,
    CheckupComponent,
    PrintSurveyComponent,
    GenerateFeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    PDFExportModule,
    ContenteditableValueAccessorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
