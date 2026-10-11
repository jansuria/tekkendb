import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Auth } from './auth/component/auth';
import { ToolbarModule } from '@openng/optimus-ui/toolbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Auth, ToolbarModule, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('tekkendb');
}
