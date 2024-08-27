import _ from 'lodash';
import './style.css';
import {format, parseISO, addDays, isValid} from 'date-fns';

    // Write a project-class that will contain elements from the task class so that the user can segment tasks in different project
    class Project {
        constructor(title = "Placeholder title", description = "Please enter a description", date = new Date() ) {
            this.title = title;
            this.description = description;
            this.tasks = [];
            this.date = date;
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

        addTask(task) {
            this.tasks.push(task);
        }

        removeTask(task) {
            this.tasks = this.tasks.filter((element) => element !== task);
        }
    }

    export { Project };