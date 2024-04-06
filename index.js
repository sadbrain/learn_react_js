var arr1 = ["JS", "Ruby", "C#"]
var arr2 = ["ReactJS", "Dart"]
//noi arr1 va arr2
var arr3 = [...arr1, ...arr2];
console.log("spread with arr")
console.log(arr3)


var obj1 ={
    name: "JS",
}
var obj2 ={
    price: 1000,
}
//noi arr1 va arr2
var obj3 = {...obj1, ...obj2};
console.log("spread with obj")
console.log(obj3)