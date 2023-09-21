import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IOption } from '../../interfaces/option.interfaces';
import { IWizardInputs } from '../wizard-form/wizard-form.component';

@Component({
  selector: 'app-options-list',
  templateUrl: './options-list.component.html',
  styleUrls: ['./options-list.component.scss']
})
export class OptionsListComponent {
  @Input()
  public wizardInput: IWizardInputs;
  @Output()
  public optionSelected = new EventEmitter<string>

  public get optionList(): IOption[] {
    console.log(this.wizardInput.optionList)
    return this.wizardInput.optionList;
  }

  public onOptionSelected(optionSelected: string) {
    this.optionSelected.emit(optionSelected);
  }
}
