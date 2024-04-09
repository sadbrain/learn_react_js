const TYPE_LOG = 'log';
const TYPE_WARN = 'warn';
const TYPE_ERROR = 'error';
const logger = ([a,b,...rest], type = TYPE_LOG) => {
    console[type](rest);
}
export {TYPE_LOG, TYPE_WARN, TYPE_ERROR, sum}
function sum (a,b){
    return a+b;
}
export default logger;
function minus (a,b){
    return a-b;
}