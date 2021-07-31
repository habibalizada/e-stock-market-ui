import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOneCompanyComponent } from './list-one-company.component';

describe('ListOneCompanyComponent', () => {
  let component: ListOneCompanyComponent;
  let fixture: ComponentFixture<ListOneCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOneCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOneCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
