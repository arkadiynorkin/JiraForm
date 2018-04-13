import { Component } from '@angular/core';

import { Ticket }    from '../ticket';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent {

  requestorName = 'Arkadiy Norkin';
  summary = 'Test Summary';
  description = 'Test Description';

  model = new Ticket(this.requestorName, this.summary, this.description);

  submitted = false;

  onSubmit() { this.submitted = true; }

}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/