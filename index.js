'use strict';

function listToObject(list, values) {
  var obj = {};
  var i;

  for (i = 0; i < list.length; i++) {
    if (values) {
      obj[list[i]] = values[i];
    } else {
      obj[list[i][0]] = list[i][1];
    }
  }

  return obj;
}

module.exports = listToObject;
