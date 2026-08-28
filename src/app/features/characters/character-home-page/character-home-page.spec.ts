import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterHomePage } from './character-home-page';

describe('CharacterHomePage', () => {
  let component: CharacterHomePage;
  let fixture: ComponentFixture<CharacterHomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterHomePage],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterHomePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
