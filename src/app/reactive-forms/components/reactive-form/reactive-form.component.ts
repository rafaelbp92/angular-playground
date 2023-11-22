import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.sass']
})
export class ReactiveFormComponent implements OnInit {
  roles = [
    {
      id: 1,
      title: 'Developer',
    },
    {
      id: 2,
      title: 'Product Owner',
    }
  ]

  registerForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    roleId: [1, Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm.get('roleId')?.valueChanges.subscribe(_roleId => {
      console.log('Do something when value changes')
    })
  }

  onSubmit() : void {
    console.log(`submitted form: ${this.registerForm.value}, $${this.registerForm.invalid}`);
  }

}
