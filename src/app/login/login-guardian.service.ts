import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { LogginService } from "./login.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginGuardian implements CanActivate{
    constructor(
        private ls:LogginService,
        private router:Router
    ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if (this.ls.isAutenticado()) {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }
}