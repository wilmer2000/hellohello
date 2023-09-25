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
        email: new FormControl('', [Validators.required]),
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

  private emailValidator(control: { value: string; }) {
    // if (control.value) {
    //   // const matches = control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
    //   const matches = control.value.match('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');
    //   return matches ? null : { 'invalidEmail': true };
    // } else {
    //   return null;
    // }
    const email = control.value;
    if (!email) {
      return null;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      return { invalidEmail: true };
    }
    return null;
  }
}
