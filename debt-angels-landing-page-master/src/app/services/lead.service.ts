import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Lead } from '../shared/models/lead.model';

@Injectable({
  providedIn: 'root'
})
export class LeadService {
  constructor(
    private http: HttpClient
  ) { }

  private baseUrl = "https://debt-angels-api.azurewebsites.net/api/lead";

  addLead(lead: Lead) {
    return this.http.post(this.baseUrl, lead);
  }
}
