import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvUserInputComponent } from './inv-user-input.component';

describe('InvUserInputComponent', () => {
  let component: InvUserInputComponent;
  let fixture: ComponentFixture<InvUserInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvUserInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvUserInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
