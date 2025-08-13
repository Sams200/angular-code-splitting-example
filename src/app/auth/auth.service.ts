import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Role } from "./role";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor() {}

  public getUserRole(): Observable<Role> {
    /*
    fake API call
     */
    return of(localStorage.getItem("app_role") as Role);
  }
}
