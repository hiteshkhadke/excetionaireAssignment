import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'gender','pNumber','dateOfBirth'];

  gridDataList = [];
  dataSource = new MatTableDataSource<any>(this.gridDataList);;

  onSubmit(form : NgForm){

    console.log(form.value);
    console.log(form);
    if(form.status == "VALID" && form.value.termCondition){
      this.gridDataList.push(form.value);
    }
    console.log(this.gridDataList);
    this.dataSource =new MatTableDataSource<any>(this.gridDataList);;
    console.log("===>", this.dataSource)

    //form.reset();
    form.resetForm();
  }
  
}
