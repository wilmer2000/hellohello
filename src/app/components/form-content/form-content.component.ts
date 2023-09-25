import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WizardService } from '../../services/wizard.service';

@Component({
  selector: 'app-form-content',
  templateUrl: './form-content.component.html',
  styleUrls: ['./form-content.component.scss']
})
export class FormContentComponent implements OnInit {
  constructor(private wizardService: WizardService, private activatedRoute: ActivatedRoute) {
  }

  //
  public ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ optionsList }) => {
      this.wizardService.wizardData.optionsList = optionsList;
    });
  }
}
