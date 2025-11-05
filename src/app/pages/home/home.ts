import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header';
import { BaseTelasComponent } from '../../shared/base-telas/base-telas';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, RouterOutlet, BaseTelasComponent],
  standalone:true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {

}
