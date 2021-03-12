"use strict";
var $ = function (id) {
  return document.getElementById(id);
};
var tasks = [];
var TASKS_KEY = "tasks";

var displayTaskList = function () {
  var list = ""; // contains task list
  if (tasks.length === 0) {
    // get in storage
    tasks = getStorageItem(TASKS_KEY);
  }

  // sort and display tasks
  if (tasks.length > 0) {
    displaySortedTaskList(tasks, $("tasks"), deleteFromTaskList);
  }

  // display tasks string and set focus on task text box
  $("task").focus();
};

var addToTaskList = function () {
  var task = $("task").value;
  if (task === "") {
    alert("Please enter a task");
  } else {
    // add task to localstorage and tasks array
    tasks.push(capitalizeTask(task));
    setStorageItem(TASKS_KEY, tasks);

    // clear task list text and re-display tasks
    $("task").value = "";
    displayTaskList();
  }
};

var clearTaskList = function () {
  tasks.length = 0;
  localStorage.removeItem("tasks");
  $("task_list").value = "";
  $("task").focus();
};

var deleteFromTaskList = function () {
  deleteTask(tasks, this.id); // this => clicked link
  setStorageItem(TASKS_KEY, tasks);
  displayTaskList();
};

window.onload = function () {
  $("add_task").onclick = addToTaskList;
  $("clear_tasks").onclick = clearTaskList;
  displayTaskList();
};
