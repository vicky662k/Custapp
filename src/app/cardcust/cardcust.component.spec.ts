import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardcustComponent } from './cardcust.component';

describe('CardcustComponent', () => {
  let component: CardcustComponent;
  let fixture: ComponentFixture<CardcustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardcustComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardcustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
