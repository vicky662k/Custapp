import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapcustComponent } from './mapcust.component';

describe('MapcustComponent', () => {
  let component: MapcustComponent;
  let fixture: ComponentFixture<MapcustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapcustComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapcustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
