import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtenteCreateComponent } from './utente-create.component';

describe('UtenteCreateComponent', () => {
  let component: UtenteCreateComponent;
  let fixture: ComponentFixture<UtenteCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtenteCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtenteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
