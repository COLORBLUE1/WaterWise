    import { Routes } from "@angular/router";
    import { RegisterComponent } from "./register/register.component";
    import { LoginComponent } from "./login/login.component";


    export const Auth_routes: Routes = [
        { path: 'register', component: RegisterComponent },
        { path: 'login', component: LoginComponent }
    ];