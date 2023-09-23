import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public setItem(key: string, value: never): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getItem<IFormBody>(key: string): IFormBody {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : { email: '', option: '' };
  }

  // public removeItem(key: string): void {
  //   localStorage.removeItem(key);
  // }
}
