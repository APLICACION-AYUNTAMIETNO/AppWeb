import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificarteComponent } from './identificarte.component';

describe('IdentificarteComponent', () => {
  let component: IdentificarteComponent;
  let fixture: ComponentFixture<IdentificarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdentificarteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdentificarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
