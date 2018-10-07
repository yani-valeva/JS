'use strict';
function  extensibleObject() {
    let obj = {
        extend: function(template) {
            for (let key in template) {
                if(template.hasOwnProperty(key)) {
                    if (typeof(template[key]) !== 'function') {
                        obj[key] = template[key];
                    } else {
                        Object.getPrototypeOf(obj)[key] = template[key];               
                    }  
                }      
            }
        }
    };

    return obj;
}

let myObj = extensibleObject();
let template = {
    extensionMethod: function() {
        console.log('Method');
    },
    extensionProp: 'Property'
};

myObj.extend(template);
console.log(myObj);
console.log(Object.getPrototypeOf(myObj));
