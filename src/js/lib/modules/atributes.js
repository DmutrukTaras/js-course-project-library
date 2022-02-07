import $ from "../core";

$.prototype.addAttribute = function (attrName, attrValue) {
    if (!attrName || !attrValue) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        this[i].setAttribute(attrName, attrValue);
    }

    return this;
}

$.prototype.removeAttribute = function (attrName) {
    if (!attrName) {
        return this;
    }
    for (let i = 0; i < this.length; i++) {
        this[i].removeAttribute(attrName);
    }

    return this;
}

$.prototype.toggleAttribute = function (attrName) {
    if (!attrName) {
        return this;
    }
    for (let i = 0; i < this.length; i++) {
        this[i].toggleAttribute(attrName);
    }
    return this;
}