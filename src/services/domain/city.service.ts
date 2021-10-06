import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { CityDTO } from "../../models/city.dto";

@Injectable()
export class CityService {

  constructor(public http: HttpClient) {

  }

  findAll(estateId : string): Observable<CityDTO[]> {
    return this.http.get<CityDTO[]>(`${API_CONFIG.baseUrl}/estates/${estateId}/cities`);
  }

}
