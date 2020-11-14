import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VnSingleChoiceEditorComponent } from './vn-single-choice-editor.component';

describe('VnSingleChoiceEditorComponent', () => {
  let component: VnSingleChoiceEditorComponent;
  let fixture: ComponentFixture<VnSingleChoiceEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VnSingleChoiceEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VnSingleChoiceEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
