import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IFormBody } from '../../interfaces/form-body.interfaces';
import { OptionsListComponent } from '../options-list/options-list.component';
import { EmailFormComponent } from '../email-form/email-form.component';
import { SucesssFormComponent } from '../sucesss-form/sucesss-form.component';

// export interface IWizardSteps {
//   id: string;
//   component: any; // TODO
// }

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard-form.component.html',
  styleUrls: ['./wizard-form.component.scss']
})
export class WizardFormComponent {
  @Output()
  public onSubmitForm = new EventEmitter<IFormBody>();
  @Input()
  public formBody: IFormBody;

  public currentStep = 0;
  public readonly FORM_WIZARD_STEPS = [
    { id: 'WIZARD_STEP_1', component: OptionsListComponent },
    { id: 'WIZARD_STEP_2', component: EmailFormComponent },
    { id: 'WIZARD_STEP_3', component: SucesssFormComponent }
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
