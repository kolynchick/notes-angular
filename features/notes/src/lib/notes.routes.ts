import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotesComponent } from './notes.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: NotesComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class NotesRoutesModule {}
