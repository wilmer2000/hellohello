import { Component, Input } from '@angular/core';
import { IOption } from '../../interfaces/option.interfaces';
import { WizardService } from '../../services/wizard.service';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent {
  @Input()
  public option: IOption;

  constructor(private wizardService: WizardService) {
  }

  public isOptionSelected(optionValue: string): boolean {
    return this.wizardService.wizardData.formBody.option === optionValue;
  }

  public onSelectOption(optionValue: string): void {
    this.wizardService.wizardData.formBody.option = optionValue;
  }
}
