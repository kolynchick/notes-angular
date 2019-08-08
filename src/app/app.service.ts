import { Subscription } from 'rxjs';
import {
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef
} from '@angular/core';
import { NotesStorageService } from './core/services/notes-storage.service';
import { Note } from './core/types';
import { NoteComponent } from './note/note.component';

export class AppService {

  public createMode: boolean;
  public loading = true;

  private containerNotes: ViewContainerRef;
  private subs: Map<string, Subscription[]> = new Map();

  constructor(
    private notesStorage: NotesStorageService,
    private resolver: ComponentFactoryResolver
  ) { }

  public initialize = (containerNotes: ViewContainerRef): void => {
    this.containerNotes = containerNotes;
    this.notesStorage.get().subscribe((notes: Note[]) => {
      this.loading = false;
      notes.forEach((note: Note) => {
        const component: ComponentRef<NoteComponent> = this.attach(note);
        this.subscribe(component);
      });
    });
  }

  public createNewNote = (): void => {
    this.createMode = true;

    const component = this.attach(null, {
      createMode: true, editMode: true
    });

    let subs: Subscription[] = [];

    const instance: NoteComponent = component.instance;

    const unsubscribeAll = () =>
      subs.forEach((subscription: Subscription) => {
        subscription.unsubscribe();
    });

    subs = [
      instance.Cancel.subscribe(() => {
        unsubscribeAll();
        this.destroy(component);
        this.createMode = false;
      }),
      instance.Create.subscribe((data: {message: string}) => {
        component.instance.loading = true;
        this.notesStorage.put(data.message).subscribe((note: Note) => {
          this.createMode = false;

          component.instance.editMode = false;
          component.instance.createMode = false;
          component.instance.loading = false;

          Object.keys(note).forEach((key: string) => {
            component.instance[key] = note[key];
          });

          unsubscribeAll();
          this.subscribe(component);
        }, () => {
          component.instance.loading = false;
        });
      }),
    ];
  }

  public unsubscribeAll = (): void => {
    this.subs.forEach(
      (subscriptions: Subscription[]) =>
        subscriptions.forEach(
          (subscription: Subscription) =>
          subscription.unsubscribe()));
  }

  private subscribe = (component: ComponentRef<NoteComponent>): void => {
    const instance = component.instance;
    let prevStateMessage: string = instance.message;

    this.subs.set(component.instance.id, [
      instance.Cancel.subscribe(() => {
        instance.editMode = false;
        instance.message = prevStateMessage;
      }),
      instance.Edit.subscribe(() => {
        instance.editMode = true;
        prevStateMessage = instance.message;
      }),
      instance.Remove.subscribe((data: {id: string}) => {
        instance.loading = true;
        this.notesStorage.delete(data.id).subscribe(() => {
          instance.editMode = false;
          instance.loading = false;

          this.destroy(component);
          this.unsubscribe(component);
        }, () => {
          instance.loading = false;
        });

      }),
      instance.Save.subscribe((data: {id: string, message: string}) => {
        instance.loading = true;
        this.notesStorage.patch(data.id, data.message)
          .subscribe(() => {
            instance.editMode = false;
            instance.loading = false;
        }, () => {
          instance.loading = false;
        });
      })
    ]);
  }

  private unsubscribe = (component: ComponentRef<NoteComponent>): void => {
    this.subs.get(component.instance.id)
      .forEach((subscription: Subscription) => subscription.unsubscribe());
    this.subs.delete(component.instance.id);
  }

  private attach = (
    note: Note | null,
    options?: {createMode: boolean, editMode: boolean}
  ): ComponentRef<NoteComponent> => {
    const component = this.containerNotes.createComponent(
      this.resolver.resolveComponentFactory(NoteComponent));

    if (note) {
      Object.keys(note).forEach((key: string) => {
        component.instance[key] = note[key];
      });
    }

    if (options) {
      Object.keys(options).forEach((key: string) => {
        component.instance[key] = options[key];
      });
    }
    console.log(component);
    return component;
  }

  private destroy = (component: ComponentRef<NoteComponent>): void =>
    component.destroy()
}
