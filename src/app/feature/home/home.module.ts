import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserDataTableComponent } from './components/user-data-table/user-data-table.component';
import { AppService } from '../../core-utilities/common/services/app.service';
import { HomeRoutingModule } from './home.routing.module';



@NgModule({
  declarations: [HomeComponent, UserDataTableComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [AppService]
})
export class HomeModule { }
