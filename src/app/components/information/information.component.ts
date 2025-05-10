import { Component } from '@angular/core';

@Component({
  selector: 'app-information',
  imports: [],
  templateUrl: './information.component.html',
  styles: `div{
    cursor: pointer;
    background-color:#E5E0FF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding: 10px;
    height: 30px;
    width: 80%;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 20px;   
    gap: 30px;
    p {
    margin: 0;
    font-size: 20px;
    color: white;
    text-align: left;
    font-family: inter;
    font-weight: bold;
    }

    img {
      width: 40px; 
      height: 40px; 
    }
  }`,
})
export class InformationComponent {}
