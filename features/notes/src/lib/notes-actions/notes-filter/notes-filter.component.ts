import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { Filter, FilterFacade } from '@notes-angular/store/notes';
import { TranslationFacade } from '@notes-angular/store/translation';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-notes-filter',
  templateUrl: './notes-filter.component.html',
  styleUrls: ['./notes-filter.component.scss'],
})
export class NotesFilterComponent implements OnInit {
  public currentDate: Date = new Date();
  public form: FormGroup = new FormGroup({
    createStartDate: new FormControl(0),
    createEndDate: new FormControl(0),
  });

  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private filterFacade: FilterFacade,
    private translationFacade: TranslationFacade,
    private dateAdapter: DateAdapter<Date>
  ) {}

  ngOnInit(): void {
    this.filterFacade
      .getFilter()
      .pipe(takeUntil(this.destroy$))
      .subscribe((filter: Filter) => {
        this.form.setValue({
          createStartDate: new Date(filter.createStartDate),
          createEndDate: new Date(filter.createEndDate),
        });
      });

    this.translationFacade
      .getActiveLanguage()
      .pipe(takeUntil(this.destroy$))
      .subscribe((activeLanguage: string) => {
        this.dateAdapter.setLocale(activeLanguage);
      });
  }

  public dateChange(): void {
    const { createStartDate, createEndDate } = this.form.value;

    if (createStartDate && createEndDate) {
      this.filterFacade.setFilter({
        createStartDate: +createStartDate,
        createEndDate: +createEndDate,
      });
    }
  }
}
