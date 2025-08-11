import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicHomeContent } from './dynamic-home-content';

describe('DynamicHomeContent', () => {
  let component: DynamicHomeContent;
  let fixture: ComponentFixture<DynamicHomeContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicHomeContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicHomeContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
