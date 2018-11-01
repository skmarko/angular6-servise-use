import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  empinfo=[
    {id:1001,name:"Dhoni",age:32 },
    {id:1002,name:"shaksi", age:28},
    {id:1003,name:"virat",age:27},
    {id:1004, name:"Anushka",age:26}
  ]

  constructor() { }

  getMyEmp(){
    return this.empinfo;
  }
}
