import { Component } from '@angular/core';
import { WizardService, WizardStepList } from '../../services/wizard.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard-form.component.html',
  styleUrls: ['./wizard-form.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)', delay: '400ms' }),
        animate('300ms ease-in', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('200ms ease-out', style({ opacity: 0, transform: 'translateY(50px)' })),
      ]),
    ]),
  ],

})
export class WizardFormComponent {
  protected readonly WizardStepList = WizardStepList;

  constructor(public wizardService: WizardService) {
  }
}
