import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VnSingleActionEditorComponent } from './vn-single-action-editor.component';

describe('VnSingleActionEditorComponent', () => {
  let component: VnSingleActionEditorComponent;
  let fixture: ComponentFixture<VnSingleActionEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VnSingleActionEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VnSingleActionEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
