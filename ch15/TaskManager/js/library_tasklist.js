myapp.tasklist.sortTaskList = function (tasks) {
  var isArray = Array.isArray(tasks);
  if (isArray) {
    tasks.sort();
  }
  return isArray;
};

myapp.tasklist.displaySortedTaskList = function (tasks, divEle, deleteHandler) {
  var html = "";
  var isArray = myapp.tasklist.sortTaskList(tasks);
  if (isArray) {
    // build task list to display
    for (var i in tasks) {
      html = html.concat("<p>");
      html = html.concat("<a href='#' id='", i, "'>Delete</a>");
      html = html.concat(" " + tasks[i]);
      html = html.concat("</p>");
    }

    divEle.innerHTML = html;

    // add delete handler to delete link
    var links = divEle.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
      links[i].onclick = deleteHandler;
    }
  }
};

myapp.tasklist.deleteTask = function (tasks, i) {
  var isArray = myapp.tasklist.sortTaskList(tasks);
  if (isArray) {
    tasks.splice(i, 1); // remove task number i out of task list
  }
};

myapp.tasklist.capitalizeTask = function (task) {
  var first = task.substring(0, 1);
  return first.toUpperCase() + task.substring(1);
};
