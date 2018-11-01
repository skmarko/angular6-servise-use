import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'markapp';
  empinfo=[]
  constructor(private myservices:MyserviceService){
    this.empinfo=this.myservices.getMyEmp();

  }
}
