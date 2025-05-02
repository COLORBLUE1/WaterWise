import { Component } from '@angular/core';

@Component({
  selector: 'app-pre-home',
  imports: [],
  templateUrl: './pre-home.component.html',
  styles: `section {
    color:#72757E;
    height: 100%;

    div {
      display: grid;
      justify-items: center;
      height: 100%;
    span {
      font-family: inter;
      position: relative;
    }
     span:first-child {
        text-align: right;
        right: 10px;        
        width: 100%;
      }
      span:nth-child(2) {
        text-align: left;
        left:20px;        
        width: 100%;

      }
      span:nth-child(3) {
        text-align: right;
        right: 10px;        
        width: 100%;  
      }
      button {
        margin-top: 20px;
        background: #7286d3;
        border-radius: 30px;
        font-family: inter;
        font-weight: 400;
        border: none;
        padding: 10px;
        cursor: pointer;
        width: 250px;
        height: 50px;
        }
    }
  }`,
})
export class PreHomeComponent {
  constructor() {}
}
