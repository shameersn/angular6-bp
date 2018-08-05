import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';

@Injectable()
export class  LoginService {
  private requestPath = 'users';

  constructor(private apiService: ApiService) {
  }

  get() {
    return this.apiService.get(this.requestPath);
  }
}
