import { Component } from '@angular/core';
import { WizardService, WizardStepList } from '../../services/wizard.service';
import { animate, sequence, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard-form.component.html',
  styleUrls: ['./wizard-form.component.scss'],
  animations: [
    trigger('stepAnim', [
      state('in', style({ opacity: 1, transform: 'translateX(0)' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-30px)' }),
        animate('200ms ease-in', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
      transition('* => out', [
        animate('200ms ease-out', style({ opacity: 0, transform: 'translateX(30px)' })),
      ]),
    ]),
  ],
})
export class WizardFormComponent {
  protected readonly WizardStepList = WizardStepList;

  constructor(public wizardService: WizardService) {
  }
}
