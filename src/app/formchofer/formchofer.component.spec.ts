import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormchoferComponent } from './formchofer.component';

describe('FormchoferComponent', () => {
  let component: FormchoferComponent;
  let fixture: ComponentFixture<FormchoferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormchoferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormchoferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
