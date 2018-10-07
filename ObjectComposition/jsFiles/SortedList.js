'use strict';
function getSortedList() {
    let myList = [];
    let obj = {
        size: myList.length,
        add: function (element) {
            myList.push(element);
            this.size++;
            return this.sortElements(myList);
        },
        sortElements: function (myList) {
            return myList.sort((a, b) => a - b);
        },
        remove: function (index) {
            if (index >= 0 && index < myList.length) {
                myList.splice(index, 1);
                this.size--;
                return myList;
            }

        },
        get: function (index) {
            if (index >= 0 && index < myList.length) {
                return myList[index];
            }
        }
    }

    return obj;
}

let sortedList = getSortedList();
console.log(sortedList.add(2));
console.log(sortedList.add(-8));
console.log(sortedList.add(100));
console.log(sortedList.add(15));
console.log(sortedList.add(200));
console.log(sortedList.remove(14));
// console.log(sortedList.get(12));
// console.log(sortedList.size);