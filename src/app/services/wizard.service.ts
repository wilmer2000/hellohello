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
  Step3 = 'Step3'
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
      formBody: { email: new FormControl('', [Validators.required, Validators.email]), option: '' }
    };
  }

  // Methods to navigate between steps
  public goToStep(step: WizardStepList) {
    this.currentStep = step;
  }

  // Method to save user data
  // public saveaveUserData(data: IUserData) {
  //   this.wizardData = { ...this.wizardData, ...data };
  // }
}
