import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL_BASE } from '../constants/app.constants';
import { IOption } from '../interfaces/option.interfaces';
import { Observable } from 'rxjs';
import { WizardService } from './wizard.service';
import { IBackendMsg } from '../interfaces/backen-msg.interfaces';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private http: HttpClient, private wizardService: WizardService) {
  }

  public getOptionsList(): Observable<IOption[]> {
    return this.http.get<IOption[]>(`${API_URL_BASE}/options`);
  }

  public submitForm(): Observable<IBackendMsg> {
    const { email, option } = this.wizardService.wizardData.formBody;

    return this.http.post<IBackendMsg>(`/api/send?email=${email.value}&option=${option}`, {});
  }
}
