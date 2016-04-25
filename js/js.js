alert ('We will solve quadratic equation: Ax2+Bx+c=0');
math();
function math(a, b, c) {
var x1, x2;
var a = parseInt(prompt ('Please enter A', ''), 10);
var b = parseInt(prompt ('Please enter B', ''), 10);
var c = parseInt(prompt ('Please enter C', ''), 10);
var d = b * b - 4 * a * c;
    if ( d > 0 ) {
        x1 = -b + Math.sqrt(d) / ( 2 * a );
        x2 = -b - Math.sqrt(d) / ( 2 * a );
    }
    else if ( d == 0 ) {
        x1 = x2 = -b + Math.sqrt(d) / ( 2 * a );
    }
    else {
        x1 = 'There equation has';
        x2 = ' no real roots';
    }
    alert ('x1=  ' + x1 + 'x2=  ' + x2);
}
