import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHikeComponent } from './new-hike.component';

describe('NewHikeComponent', () => {
  let component: NewHikeComponent;
  let fixture: ComponentFixture<NewHikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewHikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
