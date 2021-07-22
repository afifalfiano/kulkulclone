import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyKulkulComponent } from './why-kulkul.component';

describe('WhyKulkulComponent', () => {
  let component: WhyKulkulComponent;
  let fixture: ComponentFixture<WhyKulkulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyKulkulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyKulkulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
