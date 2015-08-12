// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if(obj === null) return "null";

  else if(typeof obj === 'string') 
    return '"' + obj + '"'; 

  else if(typeof obj === 'boolean' || typeof obj === 'number') 
    return obj.toString();

  else if(Array.isArray(obj)){
    if(obj.length ===0) return '[]';
    var result = _.reduce(obj, function(str, item) {
        return str + stringifyJSON(item) + ',';
    }, '[');
    return result.slice(0, - 1) + ']';

  } else if(typeof obj === 'object'){
      var result = '{';
      _.each(obj, function(value, key){
        if(typeof value === 'undefined' || typeof value === 'function') return;
        result = result + '"' + key +'":' + stringifyJSON(value) + ',';
      });
      if(result.length === 1) return "{}";
      return result.slice(0, - 1) + '}';
  }
  return "null";
};
