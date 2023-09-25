import { Component, Input } from '@angular/core';
import { IOption } from '../../interfaces/option.interfaces';
import { WizardService, WizardStepList } from '../../services/wizard.service';

@Component({
  selector: 'app-options-list',
  templateUrl: './options-list.component.html',
  styleUrls: ['./options-list.component.scss']
})
export class OptionsListComponent {
  @Input()
  public optionsList: IOption[];  
  protected readonly WizardStepList = WizardStepList;

  constructor(private wizardService: WizardService) {
  }

  public get hasOptionSelected(): boolean {
    return !this.wizardService.wizardData.formBody.option.length;
  }

  public nextStep(step: WizardStepList) {
    this.wizardService.goToStep(step);
  }
}
