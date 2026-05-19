import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RefreshViewService {

  private refreshSubject = new Subject<void>();

  refresh() {
    this.refreshSubject.next();
  }

  getObservable() {
    return this.refreshSubject.asObservable();
  }
}
