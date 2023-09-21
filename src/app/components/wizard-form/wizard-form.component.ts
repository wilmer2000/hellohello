import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IFormBody } from '../../interfaces/form-body.interfaces';
import { OptionsListComponent } from '../options-list/options-list.component';
import { EmailFormComponent } from '../email-form/email-form.component';
import { SuccessFormComponent } from '../success-form/success-form.component';
import { IOption } from '../../interfaces/option.interfaces';

export interface IWizardInputs {
  formBody: IFormBody;
  optionList: IOption[];
}

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard-form.component.html',
  styleUrls: ['./wizard-form.component.scss']
})
export class WizardFormComponent {
  @Output()
  public onSubmitForm = new EventEmitter<IFormBody>();
  @Input()
  public wizardInput: IWizardInputs;

  public currentStep = 0;
  public readonly FORM_WIZARD_STEPS = [
    { id: 'WIZARD_STEP_1', component: OptionsListComponent },
    { id: 'WIZARD_STEP_2', component: EmailFormComponent },
    { id: 'WIZARD_STEP_3', component: SuccessFormComponent }
  ];

  public nextStep() {
    if (this.currentStep < this.FORM_WIZARD_STEPS.length - 1) {
      this.currentStep++;
    }
  }

  public prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

}
