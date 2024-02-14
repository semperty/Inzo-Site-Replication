import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingShowsComponent } from './upcoming-shows.component';

describe('UpcomingShowsComponent', () => {
  let component: UpcomingShowsComponent;
  let fixture: ComponentFixture<UpcomingShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingShowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
