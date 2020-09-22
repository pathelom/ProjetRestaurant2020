import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddplatPage } from './addplat.page';

describe('AddplatPage', () => {
  let component: AddplatPage;
  let fixture: ComponentFixture<AddplatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddplatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddplatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
