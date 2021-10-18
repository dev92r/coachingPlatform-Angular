import { Component, OnInit, ViewChild } from '@angular/core';
import { Contact } from '../shared/contact';
// import { observable  } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  contactInput!: Contact;
  @ViewChild('cform') contactFormDirective: any;

  formErrors: any = {
    'firstName': '',
    'lastName': '',
    'email': '',
    'phone': '',
    'subject': '',
    'message': ''
  }

  validationMessages:any = {
    'firstName': {
      'required': 'First Name is required',
      'minlength': 'First Name must be at least 2 charecters long'
    },
    'lastName': {
      'required': 'Last Name is required',
      'minlength': 'Last Name must be at least 2 charecters long'
    },
    'email': {
      'required': 'Email is required',
      'email': 'Email not in valid format'
    },
    'phone': {
      'required': 'Phone number is required',
      'pattern': 'Phone number must contain only numbers'
    },
    'subject': {
      'required': 'Subject is required'
    },
    'message': {
      'required': 'Message is required'
    }
    
  }

  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit(): void {
  } 

  createForm() {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [0, [Validators.required, Validators.pattern]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });

    this.contactForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();

  }

  onValueChanged(data?: any) {
    if (!this.contactForm) { return; }
    const form = this.contactForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit() {
    this.contactInput = this.contactForm.value;
    console.log(this.contactInput);
    this.contactForm.reset({
      firstName: '',
      lastName: '',
      email: '',
      phone: 0,
      subject: '',
      message: ''
    });
    this.contactFormDirective.resetForm();
  }

}
