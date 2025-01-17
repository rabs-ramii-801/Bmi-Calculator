import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataManageComponent } from './data-manage.component';

describe('DataManageComponent', () => {
  let component: DataManageComponent;
  let fixture: ComponentFixture<DataManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataManageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
