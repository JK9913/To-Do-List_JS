import _ from 'lodash';
import './style.css';
import {format, parseISO, addDays, isValid} from 'date-fns';

export default function createTask() {
  // Write a class that creates to-do tasks and belong to the project variable
  class Task {
    constructor(title = "Placeholder title", description = "Please enter a description", dueDate = addDays(new Date(), 1), priority = 0, notes = "") {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.notes = notes;
    }

    get viewDueDate() {
      return format(this.dueDate, "yyyy-MM-dd");
    }

    set editDueDate(date) {
      if (date === "") {
        console.log("Date cannot be empty");
        return;
      }

      const parsedDate = parse(date, 'dd.MM.yyyy', new Date());
      if (!isValid(parsedDate));{
      console.log("Invalid date");
      return;
     }

      this.dueDate = parsedDate;
    }

    get viewTitle() {
      return this.title;
    }

    set editTitle(title) {
      if (title === "") {
        console.log("Title cannot be empty");
        return;
      } else if (title.length > 50) {
        console.log("Title must be less than 50 characters");
        return;
      }

      this.title = title;
    }

    get viewDescription() {
      return this.description;
    }

    set editDescription(description) {
      this.description = description;
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

  return Task;
} 
