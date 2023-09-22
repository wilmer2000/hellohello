import { Component, Input } from '@angular/core';
import { IWizardInputs } from '../wizard-form/wizard-form.component';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent {
  @Input()
  public wizardInput: IWizardInputs;

  public onSubmit(): void {
    // keep
  }

}
