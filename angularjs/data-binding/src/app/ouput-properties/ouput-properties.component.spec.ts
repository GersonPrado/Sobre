import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OuputPropertiesComponent } from './ouput-properties.component';

describe('OuputPropertiesComponent', () => {
  let component: OuputPropertiesComponent;
  let fixture: ComponentFixture<OuputPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OuputPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OuputPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
