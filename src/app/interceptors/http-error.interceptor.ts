import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface IErrorBackend {
  error: boolean,
  message: string
}

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap({
        next: (event: HttpEvent<unknown>) => {
          if (event instanceof HttpResponse) {
            const responseBody: IErrorBackend = event.body as IErrorBackend;
            if (!this.isValidResponse(responseBody)) {
              throw new Error('Invalid response body');
            }
          }
          return event;
        },
        error: () => {
          return throwError(() => new Error('Server Error'));
        }
      }),
      catchError((requestError) => {
        return throwError(() => new Error(requestError));
      })
    );
  }

  private isValidResponse(responseBody: IErrorBackend): boolean {
    return responseBody && !responseBody.error;
  }
}
