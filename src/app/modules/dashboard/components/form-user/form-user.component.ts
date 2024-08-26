import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '@data/models/user.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPersonCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '@shared/services/user.service';

@Component({
  selector: 'app-form-user',
  standalone: true,
  imports: [FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.scss'
})
export class FormUserComponent {
  userService = inject(UserService);

  iconPerson = faPersonCirclePlus;
  formUser: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.formUser = this.formBuilder.nonNullable.group({
      username: ['', [Validators.required, Validators.maxLength(20)]],
      name: ['', [Validators.required, Validators.maxLength(40)]],
      lastname: ['', [Validators.required, Validators.maxLength(40)]],
    })
  }
  get name(){
    return this.formUser.get("name") as FormControl;
  }
  get lastname(){
    return this.formUser.get("lastname") as FormControl;
  }
  get username(){
    return this.formUser.get("username") as FormControl;
  }

  onSubmit() {
    if (this.formUser.valid) {
      const user: User = {
        name: this.formUser.controls["name"].getRawValue() ?? '',
        lastname: this.formUser.controls["lastname"].getRawValue() ?? '',
        username: this.formUser.controls["username"].getRawValue() ?? '',
      }

      this.userService.createUser(user).subscribe({
        next: ()=> {
          console.log("Usuario creado!!!");
          this.formUser.reset();
        }
      });
    } else {
      this.formUser.markAllAsTouched();
    }
  }
}
