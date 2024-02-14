import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthMagicComponent } from './earth-magic.component';

describe('EarthMagicComponent', () => {
  let component: EarthMagicComponent;
  let fixture: ComponentFixture<EarthMagicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarthMagicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarthMagicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
