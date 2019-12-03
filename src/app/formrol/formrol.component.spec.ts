import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormrolComponent } from './formrol.component';

describe('FormrolComponent', () => {
  let component: FormrolComponent;
  let fixture: ComponentFixture<FormrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
