import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Auth } from './auth/component/auth';
import { ToolbarModule } from '@openng/optimus-ui/toolbar';
import { Character } from './features/characters/character/character';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Auth, ToolbarModule, Character],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('tekkendb');
}
