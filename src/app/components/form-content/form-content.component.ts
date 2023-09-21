import { Component, OnInit } from '@angular/core';
import { IFormBody } from '../../interfaces/form-body.interfaces';
import { LocalStorageService } from '../../services/local-storage.service';
import { FORM_DATA_STORAGE_KEY } from '../../constants/app.constants';
import { ActivatedRoute } from '@angular/router';
import { IWizardInputs } from '../wizard-form/wizard-form.component';

@Component({
  selector: 'app-form-content',
  templateUrl: './form-content.component.html',
  styleUrls: ['./form-content.component.scss']
})
export class FormContentComponent implements OnInit {
  public wizardInput: IWizardInputs = { formBody: {}, optionList: [] };

  private _formBody: IFormBody;

  constructor(private activatedRoute: ActivatedRoute, private localStorage: LocalStorageService) {

  }

  public ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ optionList }) => {
      this.wizardInput.optionList = optionList;
      this.setFormBody();
    });
  }

  private setFormBody(): void {
    this._formBody = this.localStorage.getItem(FORM_DATA_STORAGE_KEY);
    this.wizardInput.formBody = this._formBody;
  }
}
