import { Component } from '@angular/core';
import { WizardService, WizardStepList } from '../../services/wizard.service';

@Component({
  selector: 'app-error-form',
  templateUrl: './error-form.component.html',
  styleUrls: ['./error-form.component.scss']
})
export class ErrorFormComponent {

  protected readonly WizardStepList = WizardStepList;

  constructor(private wizardService: WizardService) {
  }

  public nextStep(step: WizardStepList) {
    this.wizardService.goToStep(step);
  }
}
