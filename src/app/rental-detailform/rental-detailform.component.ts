import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, numberAttribute } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rental-detailform',
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './rental-detailform.component.html',
  styleUrl: './rental-detailform.component.css'
})
export class RentalDetailformComponent {

  constructor(private http:HttpClient){
  }

  detail={
    id:null,
    totalItemCost:null,
    Quantity:null
  }
  add(){
    console.log(this.detail);
    this.http.post("http://localhost:8080/add-rental-details",this.detail).subscribe(data=>{
      alert("item Added")
    })

}
}
