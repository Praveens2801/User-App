import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthService } from '../core-utilities/user-authentication/auth-service.service';
import { AuthRoutingModule } from './login/auth-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService]
})
export class AuthenticationModule { }
