import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseTelas } from './base-telas';

describe('BaseTelas', () => {
  let component: BaseTelas;
  let fixture: ComponentFixture<BaseTelas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseTelas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseTelas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
