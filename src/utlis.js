const listHandle = function(list) {
  for (var key in list[0]) {
    var k = 0;
    var j = 0;
    while (k < list.length) {
      list[k][key + "count"] = 1;
      list[k][key + 'number'] = j;
      for (var i = k + 1; i <= list.length - 1; i++) {
        if (list[k][key] == list[i][key] && list[k][key] != "") {
          list[k][key + "count"]++;
          list[i][key + "count"] = 0;
          list[i][key + 'number'] = j;
        } else {
          break;
        }
      }
      j++
      k = i;
    }
  }
  return list;
}

export {
  listHandle
}