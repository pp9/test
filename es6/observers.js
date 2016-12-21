Object.prototype.log = function() {
    console.log(this);
}




const pushCopy = [].push;

Array.prototype.push = function(...args) {
    let res;
    console.log('prePush');
    res = pushCopy.apply(this, args);
    console.log('postPush');
    return res;
}

const arr = ['1', 3, 'dfdf'];
var smm = arr.push(1, 2, 5);
console.log(arr);