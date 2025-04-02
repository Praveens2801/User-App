import { Component } from '@angular/core';
import { AppService } from '../../../core-utilities/common/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private commonService: AppService) {

  }
}
