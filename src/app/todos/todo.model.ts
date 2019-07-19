export class Todo {
  public title: string;
  public description: string;
  public isDone: boolean;
  public priority: string;
  public dueDate: Date;

  constructor(title: string, description: string, isDone: boolean, priority: string, dueDate: Date) {
    this.title = title;
    this.description = description;
    this.isDone = isDone;
    this.priority = priority;
    this.dueDate = dueDate;
  }
}
