import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeSearchComponent } from './coffe-search.component';

describe('CoffeSearchComponent', () => {
  let component: CoffeSearchComponent;
  let fixture: ComponentFixture<CoffeSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoffeSearchComponent]
    });
    fixture = TestBed.createComponent(CoffeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
