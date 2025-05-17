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
  // data: Observable<any[]>;

  // constructor(private firestore: Firestore) { 
  //   // Para Firestore
  //   const col = collection(this.firestore, 'your-collection');
  //   this.data = collectionData(col);
  // }

  // ngOnInit() {
  //   this.data.subscribe(data => {
  //     console.log(data);
  //   });
  // }
  // addData() {
  //   // Para agregar datos
  //   const col = collection(this.firestore, 'your-collection');
  //   addDoc(col, { name: 'New Item', value: 1 });
  // }
  }
