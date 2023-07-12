import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit{
  form : FormGroup | any;
  formSections : any[] = [];

  constructor(){ }

  ngOnInit(): void {
    this.form = new FormGroup({
      sectionNav : new FormControl('', Validators.required),
      sectionDetails : new FormControl('', Validators.required)
    })
  }

  addSection(){
    if(this.form.valid){
      const newSec = {
        header : this.form.value.sectionNav,
        details : this.form.value.sectionDetails
      };
      this.formSections.push(newSec);
      this.form.reset();
    }
  }

  onClick(){
    console.log(this.form)
  }
}
