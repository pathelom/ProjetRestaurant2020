import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Compte } from './compte.page';

describe('Compte', () => {
  let component: Compte;
  let fixture: ComponentFixture<Compte>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Compte],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Compte);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
