import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Plats } from './plats.page';

describe('Plats', () => {
  let component: Plats;
  let fixture: ComponentFixture<Plats>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Plats],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Plats);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
