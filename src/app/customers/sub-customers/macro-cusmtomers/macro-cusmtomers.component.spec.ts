import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroCusmtomersComponent } from './macro-cusmtomers.component';

describe('MacroCusmtomersComponent', () => {
  let component: MacroCusmtomersComponent;
  let fixture: ComponentFixture<MacroCusmtomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacroCusmtomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacroCusmtomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
