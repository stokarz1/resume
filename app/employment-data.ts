import { InMemoryDbService } from 'angular-in-memory-web-api';
export class EmploymentData implements InMemoryDbService {
  createDb() {
    let employment = [ { } ];
    return {employment};
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/