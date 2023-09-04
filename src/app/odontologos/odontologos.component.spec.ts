import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdontologosComponent } from './odontologos.component';

describe('OdontologosComponent', () => {
  let component: OdontologosComponent;
  let fixture: ComponentFixture<OdontologosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OdontologosComponent]
    });
    fixture = TestBed.createComponent(OdontologosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
