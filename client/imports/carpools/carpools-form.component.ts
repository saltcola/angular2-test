import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder,  Validators } from '@angular/forms';

import { Carpools } from '../../../both/collections/carpools.collection';
 
import template from './carpools-form.component.html';

@Component({
  selector: 'carpools-form',
  template,
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class CarpoolsFormComponent implements OnInit { 
	addForm : FormGroup;

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit() {
		this.addForm = this.formBuilder.group({
			Time: ['', Validators.required], 
			From: ['', Validators.required], 
			To: ['', Validators.required], 
			Provider: ['', Validators.required], 
			Contact : ['', Validators.required] 
		});
	}

	resetForm() {
	    this.addForm.controls['Time']['updateValue']('');
	    this.addForm.controls['From']['updateValue']('');
	    this.addForm.controls['To']['updateValue']('');
	    this.addForm.controls['Provider']['updateValue']('');
	    this.addForm.controls['Contact']['updateValue']('');
	}

	addCarpool() {
	    if (this.addForm.valid) {
	      Carpools.insert(this.addForm.value);	 
	      // XXX will be replaced by this.addForm.reset() in RC5+
	      this.resetForm();
	    }else{
	    	alert("All fileds are needed!");
	    }
	}


}