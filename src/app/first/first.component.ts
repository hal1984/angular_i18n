import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  imports: [
  ],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {
    router = inject(Router);

    navitageToSecond() {
      this.router.navigate(['second']);
    }
}
