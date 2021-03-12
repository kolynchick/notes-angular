import { HttpRequest, HttpResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { LoadingFacadeTestingModule } from '@notes-angular/store/notes/testing';
import { of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

import { ItemsInterceptor } from './items.interceptor';

describe('ItemsInterceptor', () => {
  let service: ItemsInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoadingFacadeTestingModule],
      providers: [ItemsInterceptor],
    });

    service = TestBed.inject(ItemsInterceptor);
  });

  describe('intercept', () => {
    it('successful response', (done) => {
      const handle$ = of(new HttpResponse());

      service
        .intercept({} as HttpRequest<unknown>, { handle: () => handle$ })
        .subscribe((response) => {
          expect(response).toBeDefined();
          done();
        });
    });

    it('failure response', (done) => {
      const handle$ = of('1').pipe(switchMap(() => throwError('')));

      service
        .intercept({} as HttpRequest<unknown>, { handle: () => handle$ })
        .pipe(catchError(() => of('2')))
        .subscribe((response) => {
          expect(response).toEqual('2');
          done();
        });
    });
  });
});
