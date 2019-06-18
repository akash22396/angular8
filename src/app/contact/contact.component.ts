import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  // contactForm: FormGroup;
  isSubmitted: boolean;

  contactForm = this.fb.group ({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      c_email: ['', [Validators.required, Validators.email]],
      c_no: ['', Validators.required],
      c_for: ['', [Validators.required]],
      c_msg: ['', [Validators.required, Validators.minLength(5)]],
      ops: ['', Validators.required]
/*
fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      c_email: new FormControl('', [Validators.required, Validators.email]),
      c_no: new FormControl('', Validators.required),
      c_for: new FormControl('', [Validators.required]),
      c_msg: new FormControl('', [Validators.required, Validators.minLength(5)]),

*/
    });





  ngOnInit() {
this.onReset();

this.contactForm.setValue({
  fname: '',
  lname: '',
  c_email: '',
  c_no: '',
  c_for: 'sales',
  c_msg: '',
   ops: 'ng_cont'
});
  }
  onSubmit() {
    console.log(this.contactForm);
    const data = this.contactForm.value;
    console.log(data);
    this.isSubmitted = true;

  }
  onReset() {
    this.contactForm.reset();
  }
}
