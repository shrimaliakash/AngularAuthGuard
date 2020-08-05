import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from  '@angular/forms';
import { Router } from  '@angular/router';
import { User } from  '../user';
import { AuthService } from  '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder ) { }
	
	authForm: FormGroup;
	isSubmitted  =  false;
 	ngOnInit() {
		this.authForm  =  new FormGroup({
        	email:  new FormControl(''),
        	password:  new FormControl('')
	    });
  	}

  	get formControls() { return this.authForm.controls; }

  	signIn(){
  	console.log(this.authForm);
	    this.isSubmitted = true;
	    if(this.authForm.invalid){
	      return;
	    } else {
		    this.authService.signIn(this.authForm.value);
			this.router.navigateByUrl('/admin');
	    }
	}

}
