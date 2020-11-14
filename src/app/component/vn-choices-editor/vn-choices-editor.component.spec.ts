import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VnChoicesEditorComponent } from './vn-choices-editor.component';

describe('VnChoicesEditorComponent', () => {
  let component: VnChoicesEditorComponent;
  let fixture: ComponentFixture<VnChoicesEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VnChoicesEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VnChoicesEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
