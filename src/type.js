export function type(o) {
    var s = Object.prototype.toString.call(o);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
}


function getTypeFunction() {
    let o = {};
    [
        'Null',
        'Undefined',
        'Object',
        'Array',
        'String',
        'Number',
        'Boolean',
        'Function',
        'RegExp',
        'NaN',
        'Infinite'
    ].forEach((t)=> {
        o[`is${t}`] = (object)=> type(object) === t.toLowerCase();
    });
    return o;
}


export const Type = getTypeFunction();