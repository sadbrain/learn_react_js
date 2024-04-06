// const logger = function(log){
//     console.log(log);
// }
// function logger(log){
//     console.log(log);
// }
//arrow function

const logger = (log) => console.log(log);
logger("NT");

const course = {
    name: "Javascrip basic",
    getName: () => {
        return this;
    }
    
}
console.log(course.getName());
