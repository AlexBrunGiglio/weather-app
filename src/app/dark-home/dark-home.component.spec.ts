import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkHomeComponent } from './dark-home.component';

describe('DarkHomeComponent', () => {
  let component: DarkHomeComponent;
  let fixture: ComponentFixture<DarkHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
