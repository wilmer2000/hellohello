import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL_BASE } from '../constants/app.constants';
import { IOption } from '../interfaces/option.interfaces';
import { catchError, map, Observable, of } from 'rxjs';
import { IFormBody } from '../interfaces/form-body.interfaces';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  public formBody: IFormBody;

  constructor(private http: HttpClient) {
  }

  public getOptionsList(): Observable<IOption[]> {
    return this.http.get<any[]>(`${API_URL_BASE}/options`).pipe(
      map(e=> e),
      catchError(() => of([]))
    );
  }

  // public submitForm()
}
