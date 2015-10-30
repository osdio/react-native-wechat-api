import {type} from './type';

export default function validType(args, validates) {
    args = Array.prototype.slice.call(args);
    validates.forEach((validate, index)=> {
        let value = args[index];
        Object.keys(validate).forEach(argName=> {
            let currentValidates = validate[argName];
            currentValidates.forEach(item=> {
                if (item === 'required') {
                    if (!value) throw `${argName} params is required`;
                    return;
                }
                if (type(value) != item.toLowerCase()) {
                    throw `${argName} params is not a ${item.toLowerCase()}, it's a ${type(value)}`;
                }
            });
        });
    });
}