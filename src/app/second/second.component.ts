import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-second',
  imports: [
    TranslatePipe,
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
