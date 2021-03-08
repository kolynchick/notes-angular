import { NgModule } from '@angular/core';
import { ItemsService } from '../../src/lib/+items/items.service';
import { ItemsApiServiceTestingModule } from './items.api.service.module';
import { ItemsServiceMock } from './items.service.mock';

@NgModule({
  imports: [ItemsApiServiceTestingModule],
  providers: [
    {
      provide: ItemsService,
      useClass: ItemsServiceMock,
    },
  ],
})
export class ItemsServiceTestingModule {}
