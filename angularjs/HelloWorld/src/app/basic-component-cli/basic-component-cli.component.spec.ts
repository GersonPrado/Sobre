import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicComponentCliComponent } from './basic-component-cli.component';

describe('BasicComponentCliComponent', () => {
  let component: BasicComponentCliComponent;
  let fixture: ComponentFixture<BasicComponentCliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicComponentCliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicComponentCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
