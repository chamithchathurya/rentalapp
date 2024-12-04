import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { RentalFormComponent } from './rental-form/rental-form.component';
import { RentalDetailformComponent } from './rental-detailform/rental-detailform.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,HttpClientModule,RentalFormComponent,RentalDetailformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rentalapp';

  constructor(private http:HttpClient){

  }

  public rental={
     id:null,
    rentalDate:null,
    returnDate:null,
    dueDate:null,
    totalCost:null,
    fine:null
  }

  add(){
    console.log(this.rental);
    this.http.post("http://localhost:8080/add-rental",this.rental).subscribe(data=>{
      alert("rental Added")
    })
  }
}
