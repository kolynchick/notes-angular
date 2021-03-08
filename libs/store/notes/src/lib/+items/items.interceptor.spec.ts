import { HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { LoadingFacadeTestingModule } from '@notes-angular/store/notes/testing';
import { of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { LoadingFacade } from './+loading/loading.facade';

import { ItemsInterceptor } from './items.interceptor';

describe('ItemsInterceptor', () => {
  let loadingFacade: LoadingFacade;
  let service: ItemsInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoadingFacadeTestingModule],
      providers: [ItemsInterceptor],
    });

    loadingFacade = TestBed.inject(LoadingFacade);
    service = TestBed.inject(ItemsInterceptor);
  });

  describe('intercept', () => {
    it('successful response', (done) => {
      const handle$ = of(new HttpResponse());

      service
        .intercept({} as HttpRequest<unknown>, { handle: () => handle$ } as any)
        .subscribe((response: any) => {
          expect(response).toBeDefined();
          done();
        });
    });

    it('failure response', (done) => {
      const handle$ = of('1').pipe(switchMap(() => throwError('')));

      service
        .intercept({} as HttpRequest<unknown>, { handle: () => handle$ })
        .pipe(catchError(() => of('2')))
        .subscribe((response: any) => {
          expect(response).toEqual('2');
          done();
        });
    });
  });
});
