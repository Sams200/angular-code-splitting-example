import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNested } from './admin-nested';

describe('AdminNested', () => {
  let component: AdminNested;
  let fixture: ComponentFixture<AdminNested>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminNested]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNested);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
