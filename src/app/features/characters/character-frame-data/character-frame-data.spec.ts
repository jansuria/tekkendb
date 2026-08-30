import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterFrameData } from './character-frame-data';

describe('CharacterFrameData', () => {
  let component: CharacterFrameData;
  let fixture: ComponentFixture<CharacterFrameData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterFrameData],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterFrameData);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
