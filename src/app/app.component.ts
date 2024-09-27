import { Component, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DataManageComponent} from './components/data-manage/data-manage.component'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DataManageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BmiCalculator';
}
