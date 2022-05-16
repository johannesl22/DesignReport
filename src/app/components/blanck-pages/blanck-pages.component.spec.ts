import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlanckPagesComponent } from './blanck-pages.component';

describe('BlanckPagesComponent', () => {
  let component: BlanckPagesComponent;
  let fixture: ComponentFixture<BlanckPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlanckPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlanckPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
