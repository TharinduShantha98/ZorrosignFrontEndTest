import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LabelManagementServiceService } from 'src/app/service/label-management-service.service';
@Component({
  selector: 'app-label-management',
  templateUrl: './label-management.component.html',
  styleUrls: ['./label-management.component.css']
})
export class LabelManagementComponent {


  constructor(private router: Router,private labelManagementService: LabelManagementServiceService){

  }

  ngOnInit(): void {
    this.getlabelDetail();
    
  }

  onSubmit(userForm: NgForm) {

    this.router.navigate(['/test']);
    console.log(userForm.value);

  }


  getlabelDetail():void{
    

    this.labelManagementService.getLabelDetails().subscribe(
      (res)=> {
        console.log(res);
        
      },(err) => {
        alert(err.error.error.description + " : " + err.error.error.message);
      }
    )

  }
  


}
