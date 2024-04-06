// -	Định nghĩa key value cho ngắn ngọn
// -	Địng nghĩa method cho object


var name = "Tinh";
var price = "vo gia";

var course = {
    name,
    price,
    getName(){
        return this.name;
    }
}
console.log(course);
console.log(course.getName());


// -	Định nghĩa key cho obj dưới dạng biến => gia tri cua bien se la key cua obj
// const course = {
//     [name] : "JavaScript",
//     [price]: 1000

// };
// console.log(course);
