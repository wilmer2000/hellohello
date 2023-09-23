import { Component } from '@angular/core';
import { WizardService, WizardStepList } from '../../services/wizard.service';

@Component({
  selector: 'app-success-form',
  templateUrl: './success-form.component.html',
  styleUrls: ['./success-form.component.scss']
})
export class SuccessFormComponent {

  protected readonly WizardStepList = WizardStepList;

  constructor(private wizardService: WizardService) {
  }

  public nextStep(step: WizardStepList) {
    this.wizardService.goToStep(step);
  }
}
