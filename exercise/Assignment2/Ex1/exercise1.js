var numbers = [1, 2, 5, 90, 3, 67, 26, 100, 10, 89];

var printArray = function () {
  var arrString = "";
  for (var i = 0; i < numbers.length; i++) {
    arrString += numbers[i] + " ";
  }
  alert(arrString);
};

var search = function () {
  var num = parseInt(prompt("Enter number to search:"));
  if (isNaN(num) || num < 0) {
    alert("Please enter integer number");
  } else {
    var numIndex = numbers.indexOf(num);
    if (numIndex === -1) {
      alert("Number is not in array");
    } else {
      var position = parseInt(numIndex) + 1;
      alert("Number " + num + " is in array at position " + position);
    }
  }
};

var max = function () {
  var max = -Infinity;
  numbers.map(function (item) {
    if (max < item) {
      max = item;
    }
  });
  alert("Maximum value in array: " + max);
};

var sum = function () {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  alert("Sum of all elements in array: " + sum);
};

var sortArrayByDescending = function () {
  var comparison = function (x, y) {
    return y - x;
  };
  alert(
    "Array before sort:\n" +
      numbers.join(" ") +
      "\n\n" +
      "Array after sort by descending:\n" +
      numbers.sort(comparison).join(" "),
  );
};

var showMenu = function () {
  do {
    var menu = "1. Print Array\n";
    menu += "2. Search a member\n";
    menu += "3. Find maximum number\n";
    menu += "4. Sum of all elements in array\n";
    menu += "5. Sort all elements of array by descending\n";
    menu += "6. Exit\n\n";

    var item = parseInt(prompt(menu + "Select menu item:", 1));
    if (isNaN(item) || item < 1 || item > 6) {
      alert("Please enter valid menu item");
    } else {
      switch (item) {
        case 1: {
          printArray();
          break;
        }
        case 2: {
          search();
          break;
        }
        case 3: {
          max();
          break;
        }
        case 4: {
          sum();
          break;
        }
        case 5: {
          sortArrayByDescending();
          break;
        }
      }
    }
  } while (item !== 6);
};

window.onload = function () {
  showMenu();
};
