function getObject(array) {
  let currentObject = {};
  currentObject[array[0]] = array[1];
  currentObject[array[2]] = array[3];
  currentObject[array[4]] = array[5];

  return currentObject;
}

getObject(['name', 'Pesho', 'age', '23', 'gender', 'male']);