import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // TODO: FETCH IT THROUGH COOKIES OR LOCALSTORAGE
    const token = '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';
    const isApiUrl = request.url.startsWith(environment.apiUrl);

    if (isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(request);
  }
}
