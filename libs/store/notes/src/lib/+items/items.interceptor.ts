import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { LoadingFacade } from './+loading/loading.facade';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class ItemsInterceptor implements HttpInterceptor {
  constructor(private loading: LoadingFacade) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.loading.loadingStart();
    return next.handle(request).pipe(
      tap((event) => event instanceof HttpResponse && this.loading.loadingCompleted()),
      catchError((error) => {
        this.loading.loadingCompleted();
        return throwError(error);
      })
    );
  }
}
