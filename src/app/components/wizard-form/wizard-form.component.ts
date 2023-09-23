import { Component } from '@angular/core';
import { IFormBody } from '../../interfaces/form-body.interfaces';
import { IOption } from '../../interfaces/option.interfaces';
import { WizardService, WizardStepList } from '../../services/wizard.service';

export interface IWizardInputs {
  formBody: IFormBody;
  optionsList: IOption[];
}

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard-form.component.html',
  styleUrls: ['./wizard-form.component.scss']
})
export class WizardFormComponent {
  protected readonly WizardStepList = WizardStepList;

  constructor(public wizardService: WizardService) {
  }
}
