function matOps(x,callback){
    return callback(x);
}

function double(num){
    return num * 2;
}

const doubled = matOps(5,double);
alert(doubled);