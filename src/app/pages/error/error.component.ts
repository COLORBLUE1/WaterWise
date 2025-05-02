import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  imports: [],
  templateUrl: './error.component.html',
  styles: `section {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  
    div {
      padding: 20px;
      div {
          h2 {
            text-transform: uppercase;
            font-size: 35px;
            font-family: inter;
            font-weight: bold;
            color: #2c2c2c;
            span{
       color: aqua;
            }
          }
          img{
            width: 100%;
            height: 100%;
            max-width: 400px;
            max-height: 400px;
            border-radius: 15px;
          }
      }
    }
  }
  `,
})
export class ErrorComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {
    const log = false;
    setTimeout(() => {
      if (log) {
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['/auth/login']);
      }
    }, 3000);
  }
}
