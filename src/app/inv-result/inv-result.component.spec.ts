import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvResultComponent } from './inv-result.component';

describe('InvResultComponent', () => {
  let component: InvResultComponent;
  let fixture: ComponentFixture<InvResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
