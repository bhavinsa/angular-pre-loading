import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCustomersComponent } from './sub-customers.component';

describe('SubCustomersComponent', () => {
  let component: SubCustomersComponent;
  let fixture: ComponentFixture<SubCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
