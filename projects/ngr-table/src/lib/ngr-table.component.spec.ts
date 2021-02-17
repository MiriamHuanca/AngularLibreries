import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrTableComponent } from './ngr-table.component';

describe('NgrTableComponent', () => {
  let component: NgrTableComponent;
  let fixture: ComponentFixture<NgrTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
