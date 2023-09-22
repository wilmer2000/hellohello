import { Component, OnInit } from '@angular/core';
import { IFormBody } from '../../interfaces/form-body.interfaces';
import { LocalStorageService } from '../../services/local-storage.service';
import { FORM_DATA_STORAGE_KEY } from '../../constants/app.constants';
import { ActivatedRoute, Data } from '@angular/router';
import { IWizardInputs } from '../wizard-form/wizard-form.component';

@Component({
  selector: 'app-form-content',
  templateUrl: './form-content.component.html',
  styleUrls: ['./form-content.component.scss']
})
export class FormContentComponent implements OnInit {
  public wizardInput: IWizardInputs = { formBody: {}, optionsList: [] };

  private _formBody: IFormBody;

  constructor(private activatedRoute: ActivatedRoute, private localStorage: LocalStorageService) {

  }

  public ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ optionsList }) => {
      this.wizardInput.optionsList = optionsList;
      this.setFormBody();
    });
  }

  private setFormBody(): void {
    this._formBody = this.localStorage.getItem(FORM_DATA_STORAGE_KEY);
    this.wizardInput.formBody = this._formBody;
  }
}
