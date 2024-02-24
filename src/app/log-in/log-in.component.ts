import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.sass']
})
export class LogInComponent {


  constructor(private router: Router) { }

  goToStart() {
    this.router.navigate(['/startpage']);
  }

}
