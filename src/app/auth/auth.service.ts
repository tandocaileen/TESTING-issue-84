import { Injectable } from '@angular/core';
// 追加
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { from } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import Amplify, { Auth } from 'aws-amplify';
import { environment } from './../../environments/environment';
import { SignUpParams } from '@aws-amplify/auth';
import { UsernamePasswordOpts } from '@aws-amplify/auth/lib-esm/types';

@Injectable()
export class AuthService {

  public loggedIn: BehaviorSubject<boolean>;

  constructor(
    private router: Router
  ) {
    Amplify.configure(environment.amplify);
    this.loggedIn = new BehaviorSubject<boolean>(false);
  }

  /** サインアップ */
  public signUp(email:any, password:any) {
    return from(Auth.signUp(email, password));
  }

  /** 検証 */
  public confirmSignUp(email:any, code:any) {
    return from(Auth.confirmSignUp(email, code));
  }

  /** ログイン */
  public signIn(email:any, password:any): Observable<any> {
    return from(Auth.signIn(email, password))
      .pipe(
        tap(() => this.loggedIn.next(true))
      );
  }

  /** ログイン状態の取得 */
  public isAuthenticated(): Observable<boolean> {
    return from(Auth.currentAuthenticatedUser())
      .pipe(
        map(result => {
          this.loggedIn.next(true);
          return true;
        }),
        catchError(error => {
          this.loggedIn.next(false);
          return of(false);
        })
      );
  }

  /** ログアウト */
  public signOut() {
    from(Auth.signOut())
      .subscribe(
        (result:any) => {
          this.loggedIn.next(false);
          this.router.navigate(['/login']);
        },
        error => console.log(error)
      );
  }
}