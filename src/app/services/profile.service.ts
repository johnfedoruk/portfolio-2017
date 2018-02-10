import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProfileService {

  constructor(private http:Http) {
      this.http.get("https://tech-profile.firebaseio.com/profiles/johnfedoruk.json").subscribe(
          (data)=>{
              console.log(data.json());
          }
      )
  }

}
