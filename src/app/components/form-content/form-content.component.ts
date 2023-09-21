import { Component, OnInit } from '@angular/core';
import { IFormBody } from '../../interfaces/form-body.interfaces';
import { IOption } from '../../interfaces/option.interfaces';
import { LocalStorageService } from '../../services/local-storage.service';
import { FORM_DATA_STORAGE_KEY } from '../../constants/app.constants';

@Component({
  selector: 'app-form-content',
  templateUrl: './form-content.component.html',
  styleUrls: ['./form-content.component.scss']
})
export class FormContentComponent implements OnInit {
  public set formBody (formBody: IFormBody) {
    this._formBody = formBody;
  }
  public get formBody(): IFormBody {
    return this._formBody;
  }

  private _formBody: IFormBody;

  constructor(private localStorage: LocalStorageService) {
  }

  public ngOnInit(): void {
    this._formBody = this.localStorage.getItem(FORM_DATA_STORAGE_KEY)
  }
}
