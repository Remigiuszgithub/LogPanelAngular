import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { MaterialsModule } from '../materials-module/materials-module.component';

@Component({
  selector: 'app-log-panel',
  imports: [MaterialsModule],
  templateUrl: './log-panel.component.html',
  styleUrls: ['./log-panel.component.css']
})
export class LogPanelComponent {
  username = '';
  password = ''; 
  errorMessage = ''; 

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/AdminPanel']);
    } else {
      this.errorMessage = 'Nieprawidłowe dane logowania';
    }
  }
}
