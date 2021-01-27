import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplicacaoBannerComponent } from './explicacao-banner.component';

describe('ExplicacaoBannerComponent', () => {
  let component: ExplicacaoBannerComponent;
  let fixture: ComponentFixture<ExplicacaoBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplicacaoBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplicacaoBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
