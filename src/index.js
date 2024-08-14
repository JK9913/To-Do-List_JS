import _ from 'lodash';
import './style.css';
import {format, parseISO, addDays} from 'date-fns';

export default function createTask() {


  // Write a class that creates to-do tasks and belong to the project variable
  const createdTask = class Task {
    constructor(title = "Placeholder title", description = "Please enter a description", dueDate = addDays(new Date(), 1), priority = 0, notes = "") {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.notes = notes;
    }

    set editProirity(priority) {
      if (priority < 0 || priority > 3) {
        console.log("Priority must be between 0 and 3");
        return;
      }
      
      this.priority = priority;
    }

    get viewPriority() {
      return this.priority;
    }

  }

} 
