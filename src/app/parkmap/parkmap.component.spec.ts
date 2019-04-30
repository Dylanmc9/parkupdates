import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkmapComponent } from './parkmap.component';

describe('ParkmapComponent', () => {
  let component: ParkmapComponent;
  let fixture: ComponentFixture<ParkmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
