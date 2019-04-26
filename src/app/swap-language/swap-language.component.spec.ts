import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapLanguageComponent } from './swap-language.component';

describe('SwapLanguageComponent', () => {
  let component: SwapLanguageComponent;
  let fixture: ComponentFixture<SwapLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
