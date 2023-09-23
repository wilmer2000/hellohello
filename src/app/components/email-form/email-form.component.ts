import { Component, Input } from '@angular/core';
import { WizardService, WizardStepList } from '../../services/wizard.service';
import { FormControl } from '@angular/forms';
import { EmailService } from '../../services/email.service';

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
    if (this.emailForm.valid) {
      this.emailService.submitForm().subscribe((resp) => {
        this.nextStep()
      });
    }
  }

  public nextStep() {
    this.wizardService.goToStep(WizardStepList.Step3);
  }

}
