import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterFacadeTestingModule } from '@notes-angular/store/notes/testing';

import { NotesFilterComponent } from './notes-filter.component';

describe('NotesFilterComponent', () => {
  let component: NotesFilterComponent;
  let fixture: ComponentFixture<NotesFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterFacadeTestingModule],
      declarations: [NotesFilterComponent],
    })
      .overrideComponent(NotesFilterComponent, {
        set: {
          template: '',
        },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesFilterComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('ngOnInit', (done) => {
    component.form.valueChanges.subscribe((value) => {
      expect(value).toBeDefined();
      done();
    });

    component.ngOnInit();
  });

  describe('dateChange', () => {
    let setFilterFacadeSpy: jasmine.Spy;

    beforeEach(() => {
      setFilterFacadeSpy = jasmine.createSpy();
      //@ts-ignore
      spyOn(component.filterFacade, 'setFilter').and.callFake(
        setFilterFacadeSpy
      );
    });

    it('dateRangePicker not fully filled', () => {
      component.form.setValue({
        createStartDate: new Date(),
        createEndDate: null,
      });

      component.dateChange();

      expect(setFilterFacadeSpy).not.toHaveBeenCalled();
    });

    it('dateRangePicker filled', () => {
      component.form.setValue({
        createStartDate: new Date(),
        createEndDate: new Date(),
      });

      component.dateChange();

      expect(setFilterFacadeSpy).toHaveBeenCalled();
    });
  });
});
