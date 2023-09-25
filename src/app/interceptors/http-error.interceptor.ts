import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, throwError } from 'rxjs';
import { IBackendMsg } from '../interfaces/backen-msg.interfaces';

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
            const responseBody: IBackendMsg = event.body as IBackendMsg;
            if (!this.isValidResponse(responseBody)) {
              throw new Error('Invalid response body');
            }
          }
          return event;
        },
        error: () => {
          console.log(`throwError(() => new Error('Server Error'))`);
          return throwError(() => new Error('Server Error'));
        }
      })
    );
  }

  private isValidResponse(responseBody: IBackendMsg): boolean {
    return responseBody && !responseBody.error;
  }
}
