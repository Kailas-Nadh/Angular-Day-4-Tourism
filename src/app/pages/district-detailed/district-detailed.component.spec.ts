import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictDetailedComponent } from './district-detailed.component';

describe('DistrictDetailedComponent', () => {
  let component: DistrictDetailedComponent;
  let fixture: ComponentFixture<DistrictDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistrictDetailedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
