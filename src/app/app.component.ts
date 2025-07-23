import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'firstapp-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'firstapp';
}
