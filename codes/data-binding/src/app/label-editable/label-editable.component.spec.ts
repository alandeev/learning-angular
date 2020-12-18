import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelEditableComponent } from './label-editable.component';

describe('LabelEditableComponent', () => {
  let component: LabelEditableComponent;
  let fixture: ComponentFixture<LabelEditableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelEditableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
