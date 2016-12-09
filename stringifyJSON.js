// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
   if (typeof obj === 'number' || obj === null || typeof obj === 'boolean' || typeof obj === 'string') {
     if (typeof obj === 'string') { 
       obj = '"' + obj + '"';
     }
     return '' + obj + '';

   } else if (obj === undefined || typeof obj === 'function') {
     return '';

   } else if (typeof obj === 'object') {
     if (Array.isArray(obj)) {
       var results = [];
       for (var i = 0; i < obj.length; i++) {
         results.push(stringifyJSON(obj[i]));
       }
       return '[' + results + ']';

     } else { 
       var results = [];
       var key;
       for (var key in obj) {
         if (key === 'undefined') { 
           results = ''; 
         } else {
           results.push('"' + key + '"' + ':' + stringifyJSON(obj[key]));
         }
       }
       return '{' + results + '}';
     }
   } 
};

