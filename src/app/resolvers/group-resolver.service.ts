import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { GroupService } from '../services/group.service';

@Injectable()
export class GroupResolverService implements Resolve<any> {

  constructor(private groupService: GroupService, private router: Router) { }

  resolve(routeSnapshot: ActivatedRouteSnapshot, stateSnapshot: RouterStateSnapshot) {
    return this.groupService.getGroupDetails(routeSnapshot.params.id)
      .pipe(catchError((error) => {
        this.router.navigate(['/not-found']);
        return throwError(error);
      }));
  }

}
