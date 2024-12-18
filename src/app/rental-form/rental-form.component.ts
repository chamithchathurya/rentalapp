import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rental-form',
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './rental-form.component.html',
  styleUrl: './rental-form.component.css'
})
export class RentalFormComponent {

  constructor(private http:HttpClient){}

  
  
  item={
    id:null,
     name:null,
     rentalPreDay:null,
     finePerDay:null,
     availability:null}

     id:any=this.item.id

  add(){
    console.log(this.item);
    this.http.post("http://localhost:8080/add-item",this.item).subscribe(data=>{
      alert("item Added")
    })
  }
 
  delete(){
    console.log(this.id);
    this.http.delete(`http://localhost:8080/delete-item/${this.id}`).subscribe(data=>{
      alert("item Delete")
    })
  }

}
