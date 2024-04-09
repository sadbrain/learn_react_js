//modules => namespace in c#
//import nap vao
//export load ra
//muon dung cai gi => import ma import cai gi thi phai export cai do ra
//example muon dung ham logger tai module1 thi phai import logger function, o module2 thi phai export no ra.
console.log(1,2);
//destructuring de ma import nhieu cai
//khi import nhu nay thi dang import logger as export default   
import logger, {
    TYPE_LOG,
    TYPE_WARN,
    TYPE_ERROR,
}from "./logger.js";
//import * as logger from "./logger.js";
logger(1,2,3,4,5);


//
// import logger from "./logger.js";
// export default logger;

// export default from "./logger.js"; 