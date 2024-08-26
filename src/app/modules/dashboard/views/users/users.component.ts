import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SkeletonComponent } from '@layout/skeleton/skeleton.component';
import { IconButtonComponent } from '@shared/components/icon-button/icon-button.component';
import { faPersonCirclePlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { UserProviderService } from '@shared/providers/user-provider.service';
import { FormUserComponent } from '@modules/dashboard/components/form-user/form-user.component';
import { UserService } from '@shared/services/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, SkeletonComponent, IconButtonComponent, FormUserComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  userProvider = inject(UserProviderService);
  userService = inject(UserService);

  iconDelete = faTrash;
  iconPerson = faPersonCirclePlus;

  handleDelete(username: String) {
    this.userService.deleteUser(username).subscribe({
      next: () => {
        console.log("Usuario eliminado exitosamente");
      }
    });
  }
}
