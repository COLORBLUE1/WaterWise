import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styles: `div{
    //background-color: red;
    height: 100px;
    width: 90%;
    position: absolute;
    bottom: 10px;
    padding: 15px;
    h3{
      color: #000;
      font-family: montserrat;
      font-weight: bold; 

    }
nav{
  ul{
    padding: 0;
    display: flex;
    justify-content: space-around;
    li{
      list-style: none;
      font-family: montserrat;
      color:rgba(0, 0, 0, 0.43);
      padding: 0;
      a{
        text-decoration: none;
        color: white;
        font-size: 20px;
        &:hover{
          color: black;
          font-weight: bold;
        }
      }
    }
    .active{
      color: #7286D3;
      font-weight: bold; 
      font-family: montserrat;
    }
  }
}

  }`,
})
export class MenuComponent {}
