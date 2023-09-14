import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ExampleInterceptorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // Clone the request to make modifications
    const reqCopy = request.clone({
      // Set a new header
      setHeaders: {
        'x-access-token': `${localStorage.getItem('token')}`,
        role: `${localStorage.getItem('role')}`,
      },
      // Modify an existing header (append)
      // headers: request.headers.append('Content-Type', 'multipart/form-data'),
      // Delete a header
      // delete: request.headers.delete("Content-Type")
    });

    // Pass the modified request to the next handler
    return next.handle(reqCopy);
  }
}
