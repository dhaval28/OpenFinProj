import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrandComponent } from './brand/brand.component';
import { EligibilityCalculatorComponent } from './eligibility-calculator/eligibility-calculator.component';

import '@angular/common/locales/global/en-IN';
import { LOCALE_ID } from '@angular/core';
import { BrandDetailsComponent } from './brand-details/brand-details.component';
import { BrandDetailCardComponent } from './brand-detail-card/brand-detail-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    EligibilityCalculatorComponent,
    BrandDetailsComponent,
    BrandDetailCardComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "en-IN" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
