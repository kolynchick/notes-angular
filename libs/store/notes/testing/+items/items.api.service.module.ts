import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgModule } from '@angular/core';
import { ItemsApiService } from '../../src/lib/+items/items.api.service';
import { LoadingFacadeTestingModule } from './+loading/loading.facade.module';
import { ItemsApiServiceMock } from './items.api.service.mock';

@NgModule({
  imports: [HttpClientTestingModule, LoadingFacadeTestingModule],
  providers: [
    {
      provide: ItemsApiService,
      useClass: ItemsApiServiceMock,
    }
  ],
})
export class ItemsApiServiceTestingModule {}
