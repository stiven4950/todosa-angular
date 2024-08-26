import { Component, inject } from '@angular/core';
import { routes } from '../../app.routes';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';
import { RouterOutlet } from '@angular/router';
import { UserService } from '@shared/services/user.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, SkeletonComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  userService = inject(UserService);

  ngOnInit(){
    this.userService.loadUsers().subscribe();
  }
}
