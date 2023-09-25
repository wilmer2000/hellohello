import { Component, Input } from '@angular/core';
import { WizardService, WizardStepList } from '../../services/wizard.service';
import { FormControl } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { IBackendMsg } from '../../interfaces/backen-msg.interfaces';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent {
  @Input()
  public emailForm: FormControl;
  public isSubmitting = false;

  constructor(private wizardService: WizardService, private emailService: EmailService) {
  }

  public onSubmit() {
    if (this.emailForm.value) {
      this.isSubmitting = true;
      this.emailService.submitForm().subscribe({
        next: (value: IBackendMsg) => {
          this.isSubmitting = false;
          return value.error ? this.nextStep(WizardStepList.Error) : this.nextStep(WizardStepList.Step3);
        },
        error: () => this.nextStep(WizardStepList.Error)
      });
    }
  }

  private nextStep(step: WizardStepList) {
    this.wizardService.goToStep(step);
  }
}
