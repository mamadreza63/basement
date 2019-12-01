

let m: any;
let n: number;
let c: string;
let f: number[];
let d: color.red;

enum color {
    red = 0,
    blue = 2
}

let message;
message = 'abc';
let endWithC = (<string>message).endsWith('c');
let anotherWay = (message as string).endsWith('c');

class Point {

    constructor(private _x?: number, private y?: number) {
    }

    draw() {
        console.log('x: ' +  this._x + ', y: ' + this.y);
    }

    get x() {
        return this._x;
    }

    set x(value) {
        if (value < 0)
            throw new Error('value cannot be less than 0.');
        this._x = value;
    }
}

let point = new Point(1, 2);
let x = point.x;
point.x = 10;
point.draw();

