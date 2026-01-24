import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAggrak } from './about-aggrak';

describe('AboutAggrak', () => {
  let component: AboutAggrak;
  let fixture: ComponentFixture<AboutAggrak>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutAggrak]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutAggrak);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
