import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  basepath = "http://localhost:3000/api/"
  constructor() { }
}
