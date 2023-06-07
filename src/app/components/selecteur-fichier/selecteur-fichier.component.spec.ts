import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecteurFichierComponent } from './selecteur-fichier.component';

describe('SelecteurFichierComponent', () => {
  let component: SelecteurFichierComponent;
  let fixture: ComponentFixture<SelecteurFichierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecteurFichierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecteurFichierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
