import { inject } from '@angular/core';
import { IOption } from '../interfaces/option.interfaces';
import { EmailService } from '../services/email.service';
import { ResolveFn } from '@angular/router';

export const optionsListResolver: ResolveFn<IOption[]> =
  () => {
    return inject(EmailService).getOptionsList();
  };
