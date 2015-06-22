
each = function(array,func) {
    if (Array.isArray(array)) {
        for (var i = 0; i < array.length; i++) {
            func(array[i],i);
        }
    }else {
        for (var j in array) {
            func(array[j], j);
        }
    }
};
sum = function(array) {
    var result = 0;
    each(array, function(collection,i) {
        result += collection;
    });
    return result;
};
group = function(array, func) {
    var result = {};
    each(array, function(val, key) {
        new_key = func(val, key);
        result[new_key] = result[new_key] || [];
        result[new_key].push(val);
    });
    return result;
};

map = function(array,func){
    var result = [];
    each(array,function(collection,i) {
        result.push(func(collection,i));
    });
    return result;
};


function exist(collection,num) {
    var result = false;
    each(collection,function (val) {
        if (val === num) {
            result = true;
        }
    });
    return result;
}

//module.exports = exist;

//var each = require('./each.js');

function filter_in(collection,func) {
    var result = [];
    each(collection,function (num,i) {
        if (func(num,i)) {
            result[result.length] = num;
        }
    });
    return result;
}

//module.exports = filter_in;

/*
function get_even(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

var collection = [1,2,3,4,5,6,7,8,9];

console.log(filter_in(collection,get_even));
*/
//var each = require('./each.js');

function filter_out(collection,func) {
    var result = [];
    each(collection,function (num) {
        if (!func(num)) {
            result[result.length] = num;
        }
    });
    return result;
}

//module.exports = filter_out;

//var each = require('./each.js');
//var filter_in = require('./filter_in.js');
//var reduce = require('./reduce.js');

function first(collection, func) {
    var result = collection;
    if (func !== undefined) {
        result = filter_in(collection, func);
    }
    var first_item;
    reduce(result,function (num_a,num_b) {
        first_item = num_a;
        return num_a;
    });

    return first_item;
}

/*
function get_even(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

console.log(first([1,2,3,4,5,6,7,8,9],get_even));
*/
//module.exports = first;

//var each = require('./each.js');
//var filter_in = require('./filter_in.js');
//var reduce = require('./reduce.js');

function last(collection,func) {
    var result = collection;
    if (func !== undefined) {
        result = filter_in(collection, func);
    }
    var last_item;
    reduce(result,function (num_a,num_b) {
        last_item = num_b;
    });

    return last_item;
}

/*
function get_even(result,num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

console.log(last([1,2,3,4,5,6,7,8,9],get_even));
*/

//module.exports = last;

//var each = require('./each.js');

function map(collection,func) {
    var result = [];
    each(collection,function (num) {
        result[result.length] = func(num);
    });
    return result;
}

//module.exports = map;
//映射
//var each = require('./each.js');
//var reduce = require('./reduce.js');

function max(collection) {
    var result;
    reduce(collection,function (num_a,num_b) {
        result = num_a > num_b ? num_a : num_b;
        return result;
    });

    return result;
}

/*
console.log(max([1,2,3,4,5,6,7,8]));
*/

//module.exports = max;
function median(array){
  var number = 0;
  var k;
  if ((array.length)%2===0) {
    k = (array.length)/2;
    number=(array[k]+array[k-1])/2;
  }else {
    k = (array.length-1)/2;
    number=array[k];
  }
  return number;
}

//module.exports = median;
//中位数
//var each = require('./each.js');
//var reduce = require('./reduce.js');

function min(collection) {
    var result;
    reduce(collection,function (num_a,num_b) {
        result = num_a < num_b ? num_a : num_b;
        return result;
    });

    return result;
}
/*
console.log(min([1,2,3,4,5,6,7,8]));
*/
//module.exports = min;
function rank(collection,judge){
  var array;
  for (var i = 0; i < collection.length; i++) {
    for (var y = i+1; y < collection.length; y++) {
      if (judge?collection[i]>collection[y]:collection[i]<collection[y]) {
        array=collection[i];
        collection[i]=collection[y];
        collection[y]=array;
      }
    }
  }
  return collection;
}
//module.exports = rank;
//冒泡排序
//var each = require('./each.js');

function reduce(collection,func) {
    var temp;
    each(collection,function (item,i) {
        if (i === 0) {
            temp = item;
        }else{
            temp = func(temp,item);
        }
    });
}

//module.exports = reduce;
//var each = require('./each.js');
//var reduce = require('./reduce.js');

function sum(collection) {//求和
    var result;
    reduce(collection,function (num_a,num_b) {
        result = num_a + num_b;
        return result;
    });
    return result;
}

/*test
console.log(sum([1,2,3,4,5,6,7,8]));
*/
//module.exports = sum;

function mean(collection){//平均数
  var sum = 0;
  for (var i = 0; i < collection.length; i++) {
    sum += collection[i];
  }
  return sum/collection.length;
}

module.exports = {
  'map': map,
  'each': each,
  'exist': exist,
  'filter_in': filter_in,
  'filter_out': filter_out,
  'first': first,
  'last': last,
  'max': max,
  'min': min,
  'sum': sum,
  'rank': rank,
  'median':median,
  'mean':mean
};
