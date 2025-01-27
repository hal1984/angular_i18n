import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-first',
  imports: [
    TranslatePipe
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
