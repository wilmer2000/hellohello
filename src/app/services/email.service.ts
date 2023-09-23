import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL_BASE } from '../constants/app.constants';
import { IOption } from '../interfaces/option.interfaces';
import { catchError, Observable, of } from 'rxjs';
import { WizardService } from './wizard.service';
import { IErrorMsg } from '../interfaces/error.interfaces';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private http: HttpClient, private wizardService: WizardService) {
  }

  public getOptionsList(): Observable<IOption[]> {
    return this.http.get<IOption[]>(`${API_URL_BASE}/options`).pipe(
      catchError(() => of([]))
    );
  }

  public submitForm(): Observable<IErrorMsg> {
    const { email, option } = this.wizardService.wizardData.formBody;

    return this.http.post<IErrorMsg>(`/api/send?email=${email.value}&option=${option}`, {}).pipe(
      catchError(() => of())
    );
  }
}
