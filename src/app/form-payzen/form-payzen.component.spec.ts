import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPayzenComponent } from './form-payzen.component';

describe('FormPayzenComponent', () => {
  let component: FormPayzenComponent;
  let fixture: ComponentFixture<FormPayzenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPayzenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPayzenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
