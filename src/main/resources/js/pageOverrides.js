window.alert = function () {
};
window.confirm = function () {
};
window.onbeforeunload = null;
window.showModalDialog = null;

window.Ping = function () {
};

String.prototype.hashCode = function () {
    var hash = 0;
    if (this.length === 0) return hash;
    for (var i = 0, chr; i < this.length; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0;
    }
    return hash;
};

if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (elt) {
        var len = this.length >>> 0;

        var from = Number(arguments[1]) || 0;
        from = (from < 0)
            ? Math.ceil(from)
            : Math.floor(from);
        if (from < 0)
            from += len;

        for (; from < len; from++) {
            if (from in this &&
                this[from] === elt)
                return from;
        }
        return -1;
    };
}

function stripAllSpace(input) {
    return input.replace(/[^a-zA-Z0-9א-ת]+/g, '');
}