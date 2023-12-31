import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IOption } from '../interfaces/option.interfaces';

export interface IWizardData {
  optionsList: IOption[],
  formBody: { email: FormControl, option: string }
}

export enum WizardStepList {
  Step1 = 'Step1',
  Step2 = 'Step2',
  Step3 = 'Step3',
  Error = 'Error'
}

@Injectable({
  providedIn: 'root'
})
export class WizardService {
  public currentStep: WizardStepList = WizardStepList.Step1;
  public wizardData: IWizardData;

  constructor() {
    this.wizardData = {
      optionsList: [],
      formBody: {
        email: new FormControl('', [Validators.required, Validators.email]),
        option: ''
      }
    };
  }

  public goToStep(step: WizardStepList) {
    this.currentStep = step;
  }

  public clearData(): void {
    this.wizardData.formBody.option = '';
    this.wizardData.formBody.email.reset();
  }
}
