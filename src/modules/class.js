export default class Todo {
  constructor(title = null, complete, id) {
    this.title = title;
    this.id = id;
    this.complete = complete;
  }
}