import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second',
  imports: [
  ],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss',
})
export class SecondComponent {
  router = inject(Router);

  navitageToFirst() {
    this.router.navigate(['first']);
  }

}
