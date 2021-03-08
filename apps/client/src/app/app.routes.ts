import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'notes',
          loadChildren: () =>
            import('@notes-angular/features/notes').then((d) => d.NotesModule),
        },
        {
          path: '',
          pathMatch: 'full',
          redirectTo: '/notes',
        },
      ],
      {
        initialNavigation: 'enabled',
        useHash: true,
      }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutesModule {}
