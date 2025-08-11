import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicHome } from './dynamic-home';

describe('DynamicHome', () => {
  let component: DynamicHome;
  let fixture: ComponentFixture<DynamicHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
