import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayData = {
    firstName: "",
    lastName : "",
    email : "",
    gender : "",
    pNumber : ""
  };
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'gender','pNumber'];

  gridDataList = [];
  dataSource = [];

  onSubmit(form : NgForm){
    
    this.displayData.firstName = form.value.firstName;
    this.displayData.lastName = form.value.lastName;
    this.displayData.email = form.value.email;
    this.displayData.gender = form.value.gender;
    this.displayData.pNumber = form.value.pNumber;

    console.log(this.displayData);
    console.log(form);
    if(form.status == "VALID"){
      this.gridDataList.push(this.displayData);
    }
    console.log(this.gridDataList);
    this.dataSource = this.gridDataList;

    form.reset();
  }
  
}
