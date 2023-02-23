import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IplstatsComponent } from './iplstats.component';

describe('IplstatsComponent', () => {
  let component: IplstatsComponent;
  let fixture: ComponentFixture<IplstatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IplstatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IplstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
