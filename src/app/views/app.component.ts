import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
     title = 'WaterWise';
  }
