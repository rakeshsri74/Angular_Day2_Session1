import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-entry',
  templateUrl: './expense-entry.component.html',
  //template: `<h1> {{title}} </h1>`,
  styleUrls: ['./expense-entry.component.css']
  //styles: ['h1{color:red;}']
})
export class ExpenseEntryComponent {
  title:string="Expense Entry";
  
}
