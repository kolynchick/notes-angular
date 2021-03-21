import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { environment } from '@notes-angular/environments';
import { AppRoutesModule } from './app.routes';
import { AppComponent } from './app.component';
import { TranslocoModule } from '@notes-angular/dependencies';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutesModule,
    TranslocoModule,
    NgxsModule.forRoot([], {
      developmentMode: !environment.production,
    }),
    NgxsStoragePluginModule.forRoot({
      key: ['notes.filter', 'notes.pagination', 'notes.sort', 'notes.viewMode'],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
