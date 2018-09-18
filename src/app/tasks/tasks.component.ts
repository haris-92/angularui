import { Component, OnInit } from '@angular/core';
import {TaskserviceService} from '../../services/taskservice.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
 public tasks: any;
  constructor( public taskservice: TaskserviceService) { }

  ngOnInit() {
    this.getalltasks();
  }

  getalltasks() {
    this.taskservice.getAllTasks()
    .subscribe((result) => {
      if (result != null && result !== undefined) {
        this.tasks = result;
      }
      return false;
    }, (err) => {
      throw err;
    });
  }
}
