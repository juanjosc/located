import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContUsersComponent } from './cont-users.component';

describe('ContUsersComponent', () => {
  let component: ContUsersComponent;
  let fixture: ComponentFixture<ContUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
