import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IOption } from '../../interfaces/option.interfaces';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent {
  @Input()
  public option: IOption;
  @Output()
  public optionSelected = new EventEmitter<string>();

  public onSelectOption(optionValue: string): void {
    this.optionSelected.emit(optionValue);
  }
}
