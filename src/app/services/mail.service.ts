import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable()
export class MailService {

  constructor(private http: HttpClient) { }

  public async sendContactEmail(mail: { subject: string, from: string, body: string }): Promise<void> {
    const url = `${environment.api}/mail/${environment.id}/contact`;
    await this.http.post(url, mail).toPromise();
  }
}
