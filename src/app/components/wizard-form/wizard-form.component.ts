import { Component } from '@angular/core';
import { WizardService, WizardStepList } from '../../services/wizard.service';

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
