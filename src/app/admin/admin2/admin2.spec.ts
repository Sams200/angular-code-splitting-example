import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin2 } from './admin2';

describe('Admin2', () => {
  let component: Admin2;
  let fixture: ComponentFixture<Admin2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Admin2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Admin2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
