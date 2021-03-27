var taskList = {
  tasks: [],
  storage: getTaskStorage("tasks"), // create a instance of storage
  displayDiv: null,
  deleteClickHandler: null,
  editClickHandler: null,
  load: function () {
    if (this.tasks.length == 0) {
      this.tasks = this.storage.get();
    }
    return this;
  },
  save: function () {
    this.storage.set(this.tasks);
    return this;
  },
  sort: function () {
    this.tasks.sort();
    return this;
  },
  add: function (task) {
    this.tasks.push(task.toString());
    return this;
  },
  // edit task with id
  // id for edit task is edit_indexNumber
  // so split string to get indexNumber for item in array
  edit: function (id, newValue) {
    // remove edit_ text out of id
    var index = id.substring(id.indexOf("_") + 1);
    this.sort();
    this.tasks.splice(index, 1, [newValue]);
    return this;
  },
  delete: function (id) {
    // remove delete_ text out of id
    var i = id.substring(id.indexOf("_") + 1);
    this.sort();
    this.tasks.splice(i, 1);
    return this;
  },
  clear: function () {
    this.tasks.length = 0;
    this.storage.clear();
    this.displayDiv.innerHTML = "";
    return this;
  },
  display: function () {
    var html = "";
    this.sort();
    // build task list to display
    for (var i in this.tasks) {
      html = html.concat("<p>");
      html = html.concat("<a href='#' class='delete' id='delete_", i, "'>Delete</a>");
      html = html.concat("&nbsp;");
      html = html.concat("<a href='#' class='edit' id='edit_", i, "'>Edit</a>");
      html = html.concat("<span> " + this.tasks[i] + "</span>");
      html = html.concat("</p>");
    }
    this.displayDiv.innerHTML = html;

    // add delete handler to delete link
    var deleteLinks = this.displayDiv.getElementsByClassName("delete");
    for (var i = 0; i < deleteLinks.length; i++) {
      deleteLinks[i].onclick = this.deleteClickHandler;
    }

    // add edit handler to edit link
    var editLinks = this.displayDiv.getElementsByClassName("edit");
    for (var i = 0; i < editLinks.length; i++) {
      editLinks[i].onclick = this.editClickHandler;
    }

    return this;
  },
};
