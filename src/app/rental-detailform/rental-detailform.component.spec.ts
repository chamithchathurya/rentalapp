import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalDetailformComponent } from './rental-detailform.component';

describe('RentalDetailformComponent', () => {
  let component: RentalDetailformComponent;
  let fixture: ComponentFixture<RentalDetailformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentalDetailformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalDetailformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
