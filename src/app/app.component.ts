import { 
  Component, 
  ViewChild, 
  ViewContainerRef, 
  AfterContentInit, 
  ComponentFactoryResolver, 
  ComponentRef
} from '@angular/core';
import { NotesStorageService } from './core/services/notes-storage.service';
import { Note } from './core/types';
import { NoteComponent } from './note/note.component';
import { IconService } from './core/services/icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {
  @ViewChild('containerNotes', {
    read: ViewContainerRef, 
    static: true
  }) containerNotes: ViewContainerRef;

  public isCreatingNewNote: boolean;

  constructor(
    private notesStorage: NotesStorageService,
    private icon: IconService,
    private resolver: ComponentFactoryResolver,
  ) {
    this.icon.addSvgIcon(['add', 'remove']);
  }

  public add = () => {

  }

  ngAfterContentInit() {
    this.notesStorage.get().subscribe((notes: Note[]) => {
        const component = this.attach();
    });
  }

  private attach = (): ComponentRef<NoteComponent> => 
    this.containerNotes.createComponent(this.resolver
      .resolveComponentFactory(NoteComponent));


}
