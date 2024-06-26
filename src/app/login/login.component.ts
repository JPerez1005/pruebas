import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LogginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    form: { email: string; password: string } = { email: '', password: '' };

    constructor(private loginService: LogginService) { }

    ngOnInit(): void { }

    login(form: NgForm): void {
        const email = form.value.email;
        const password = form.value.password;
        this.loginService.login(email, password);
    }
}
