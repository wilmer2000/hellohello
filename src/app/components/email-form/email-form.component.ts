import { Component, Input } from '@angular/core';
import { WizardService, WizardStepList } from '../../services/wizard.service';
import { FormControl } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { IErrorBackend } from '../../interceptors/http-error.interceptor';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent {
  @Input()
  public emailForm: FormControl;

  constructor(private wizardService: WizardService, private emailService: EmailService) {
  }

  public onSubmit() {
    if (this.emailForm.value) {
      this.emailService.submitForm().subscribe((res: IErrorBackend) => {
        if (!res.error) {
          this.nextStep(WizardStepList.Step3);
        } else {
          this.nextStep(WizardStepList.Error);
        }
      });
    }
  }

  private nextStep(step: WizardStepList) {
    this.wizardService.goToStep(step);
  }
}
