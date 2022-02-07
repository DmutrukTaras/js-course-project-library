import $ from "../core";

$.prototype.html = function (content) {
    for (let i = 0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }

    return this;
};

$.prototype.eq = function (index) {
    const swap = this[index];
    const objLength = Object.keys(this).length;

    for (let i = 0; i < objLength; i++) {
        delete this[i];
    };

    this[0] = swap;
    this.length = 1;
    return this;
}

$.prototype.index = function () {

    const parent = this[0].parentNode;
    const childs = [...parent.children];

    const findMyIndex = item => item == this[0];

    return childs.findIndex(findMyIndex);
}

// $.prototype.indexOneTag = function () {

//     const parent = this[0].parentNode;
//     const childs = [...parent.children];

//     const findMyIndex = item => item == this[0];

//     return childs.findIndex(findMyIndex);
// }

$.prototype.find = function (selector) {

    const clone = Object.assign({}, this);
    let numberOfItems = 0;
    let conter = 0;

    for (let i = 0; i < clone.length; i++) {
        const arr = clone[i].querySelectorAll(selector);
        if (arr.length == 0) {
            continue;
        }

        for (let j = 0; j < arr.length; j++) {
            this[conter] = arr[j];
            conter++;
        }

        numberOfItems += arr.length;
    }

    this.length = numberOfItems;
    for (let i = numberOfItems; i < Object.keys(this).length; i++) {
        delete this[i];
    }

    return this;

}

$.prototype.closest = function (selector) {
    let conter = 0;
    for (let i = 0; i < this.length; i++) {
        if (this[i].closest(selector)) {
            this[conter] = this[i].closest(selector);
            conter++;
        }

    }

    const objLength = Object.keys(this).length;
    for (let j = conter; j < objLength; j++) {
        delete this[j];
    };

    this.length = conter;
    return this;
}

$.prototype.siblings = function () {
    let numberOfItems = 0;
    let counter = 0;

    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].parentNode.children;

        for (let j = 0; j < arr.length; j++) {
            if (copyObj[i] === arr[j]) {
                continue;
            }

            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length - 1;
    }

    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
};