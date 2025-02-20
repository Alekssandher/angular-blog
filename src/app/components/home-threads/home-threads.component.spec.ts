import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeThreadsComponent } from './home-threads.component';

describe('HomeThreadsComponent', () => {
  let component: HomeThreadsComponent;
  let fixture: ComponentFixture<HomeThreadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeThreadsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeThreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
