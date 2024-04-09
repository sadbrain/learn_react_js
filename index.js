//modules => namespace in c#
//import nap vao
//export load ra
//muon dung cai gi => import ma import cai gi thi phai export cai do ra
//example muon dung ham logger tai module1 thi phai import logger function, o module2 thi phai export no ra.
//destructuring de ma import nhieu cai
//khi import nhu nay thi dang import logger as export default   
import l2, {
    TYPE_LOG,
    TYPE_WARN,
    TYPE_ERROR,
    sum
}from "./logger.js";
const arr1 = [1,2,3];
const arr2 = [3,4,6];
//import * as logger from "./logger.js";
l2([...arr1, ...arr2], TYPE_ERROR);
console.log(sum(1,2))
const arr3 = [...   arr1, ...arr2]
console.log(arr3)

//
// import logger from "./logger.js";
// export default logger;

// export default from "./logger.js"; 