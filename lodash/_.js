
const _ = {
    clamp (number, lower, upper){
        const lowerClampedValue = Math.max(number, lower);
        const clampedValue = Math.min(lowerClampedValue, upper);

        return clampedValue;
    },

    inRange (number, startValue, endValue) {
       if (endValue === undefined) {
           endValue = startValue;
           startValue = 0;
       }
       if (startValue > endValue) {
           let tempValue = startValue;
           startValue = endValue;
           endValue = tempValue;
       }

       if (number >= startValue && number < endValue) {
           return true;
       } else {
           return false;
       }

       console.log(number, startValue, endValue);
    },

    words(str) {
        const words = str.split(' ');
        return words;
    },

    pad(str, length) {

        if (str.length >= length) {
            return str;
        };

        
        let startPaddingLength = Math.floor((length - str.length) / 2);
        const endPaddingLength = length - str.length - startPaddingLength;
        const paddedString = ' '.repeat(startPaddingLength) + str + ' '.repeat(endPaddingLength);
        
        return paddedString;
    },

    has(object, key) {
     const hasValue = object[key] !== undefined ? true : false;

     return hasValue;
    },

    invert(object){

        let invertedObject = {}

        for (let key in object){
            const originalValue = object[key];
            invertedObject = {originalValue : key} 
        }
            return invertedObject;
    },

    findKey(object, predicate){
    

        for (let key in object){
            let value = object[key];
            let predicateReturnValue = predicate(value);
            if  (predicateReturnValue === true){
                return key;
            }
        }

        return undefined;
    },

        drop(arr, drop){

           let droppedArray = [];

            if (drop === undefined){
                drop = 1;
            }  

            return droppedArray = arr.slice(drop);  

        },

        dropWhile (arr, predicate) {
            
            let cb = (element, index) => {
                return !predicate(element, index, arr);
            }

            let dropNumber = arr.findIndex(cb);

            let droppedArray = this.drop(arr,dropNumber);

            return droppedArray;
        },

        chunk (arr, size) {
            if (size === undefined){
                size = 1;
            }

            let arrayChunks = [];
          
            for (let i = 0; i < arr.length; i+=size){
            
                let arrayChunk = arr.slice(i, i+size);

                arrayChunks.push(arrayChunk);
            }

            return arrayChunks;
        }


};

    
    


// Do not write or modify code below this line.
module.exports = _;