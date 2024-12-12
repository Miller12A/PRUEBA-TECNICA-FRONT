import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module'; // Asegúrate de que LoginModule esté importado aquí

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule  // Importar el LoginModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
