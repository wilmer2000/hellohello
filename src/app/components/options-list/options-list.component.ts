import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IOption } from '../../interfaces/option.interfaces';

@Component({
  selector: 'app-options-list',
  templateUrl: './options-list.component.html',
  styleUrls: ['./options-list.component.scss']
})
export class OptionsListComponent {
  @Input()
  public optionsList: IOption[] = [];

  @Output()
  public optionSelected = new EventEmitter<string>

  public onOptionSelected(optionSelected: string) {
    this.optionSelected.emit(optionSelected);
  }
}
