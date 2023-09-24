import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WizardFormComponent } from './components/wizard-form/wizard-form.component';
import { OptionsListComponent } from './components/options-list/options-list.component';
import { OptionComponent } from './components/option/option.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormContentComponent } from './components/form-content/form-content.component';
import { NgOptimizedImage } from '@angular/common';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { SuccessFormComponent } from './components/success-form/success-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { httpInterceptorProviders } from './interceptors';
import { ErrorFormComponent } from './components/error-form/error-form.component';

@NgModule({
  declarations: [
    AppComponent,
    WizardFormComponent,
    OptionsListComponent,
    OptionComponent,
    CardComponent,
    FormContentComponent,
    EmailFormComponent,
    SuccessFormComponent,
    ErrorFormComponent
  ],
  imports: [
    HttpClientModule,
    NgOptimizedImage,
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    ReactiveFormsModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
