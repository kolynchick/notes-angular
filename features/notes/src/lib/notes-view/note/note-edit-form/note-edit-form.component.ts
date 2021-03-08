import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Note } from '@notes-angular/models';
import { Subject } from 'rxjs';
import { debounceTime, startWith, takeUntil } from 'rxjs/operators';
import { NoteEditForm } from './note-edit-form.models';

@Component({
  selector: 'app-note-edit-form',
  templateUrl: './note-edit-form.component.html',
  styleUrls: ['./note-edit-form.component.scss'],
})
export class NoteEditFormComponent implements OnInit, OnChanges, OnDestroy {
  @Input() note: Note = {} as Note;
  @Output() changed: EventEmitter<Note> = new EventEmitter<Note>();

  public form!: FormGroup;
  public edit: boolean = false;

  private destroy$: Subject<void> = new Subject<void>();

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(this.note.title),
      message: new FormControl(this.note.message),
    });

    this.form.valueChanges
      .pipe(
        startWith(this.form.value),
        debounceTime(200),
        takeUntil(this.destroy$)
      )
      .subscribe(({ title, message }: NoteEditForm) =>
        this.changed.emit({ ...this.note, title, message })
      );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.note.firstChange) {
      this.form.setValue({
        title: this.note.title,
        message: this.note.message,
      });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
