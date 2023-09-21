import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { IOption } from '../interfaces/option.interfaces';
import { EmailService } from '../services/email.service';

export const optionsListResolver: ResolveFn<IOption[]> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(EmailService).getOptionsList();
  };
