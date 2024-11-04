import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightContainerComponent } from './right-container.component';

describe('RightContainerComponent', () => {
  let component: RightContainerComponent;
  let fixture: ComponentFixture<RightContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
