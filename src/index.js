const sorArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log("sort arr", arr);
};

sorArr([3, 2, 55, 3, 6, 7, 1]);

/* ============================ */

const sortObjArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].name.toLowerCase() > arr[j].name.toLowerCase()) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log("sort arr of obj", arr);
};

sortObjArr([
  { name: "agh", id: 10 },
  { name: "acgh", id: 10 },
  { name: "vhgh", id: 10 },
  { name: "kdgh", id: 10 }
]);
