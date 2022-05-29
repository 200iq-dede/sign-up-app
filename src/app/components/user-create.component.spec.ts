import { ComponentFixture, TestBed } from '@angular/core/testing';

import { userCreateComponent } from './user-create.component';

describe('userCreateComponent', () => {
  let component: userCreateComponent;
  let fixture: ComponentFixture<userCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ userCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(userCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
