//destructuring phan ra mot obj

var array = ['JS', 'JAVA', 'C#']

var [a,,c] = array;
console.log("1. destructuring")
console.log(a,c)

// output JS C#

//rest la nhung phan tu con lai va khi no dung ket hop voi
//destructuring
var [a, ...c] = array;
console.log("2. rest")
console.log(a, c)
//output JS , ['JAVA', 'C#']


//xample with object
var course ={
    name: "JS",
    price: 1000,
    image: "default"
}
var {name, ...rest} = course;
console.log("3. rest with object")
console.log(name, rest);

//out put JS { price: 1000,  image: "default"}

//if obj has child obj
console.log("4. rest with object has child object")
var course ={
    name: "JS",
    price: 1000,
    image: "default",
    children: {
        name: "C#"
    }
}
var {name :parentName, children:{name}, description = "default description"} = course;
console.log(parentName, name, description);