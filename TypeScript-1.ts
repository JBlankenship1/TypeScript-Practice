//tsc
//node TypeScript-1.ts

// Example code to see if the TypeScript compiler is working
// let a: number = 10;
// console.log(a);
// let b: number = a + 23;
// let c: number = 2 * b;
// console.log(c);

// Problem 1
// Write a function cumulative_sum that takes an array of numbers and returns a array of the partial 
// sums of these numbers. For example, cumulative_sum([12, 27, 13]) = [12, 39, 52].
function cumulative_sum(l: number[]): number[] {
    let sum = 0;
    return l.map((element) => {
        sum += element;
        return sum;
    });
}

var int_arr: number[] = [12,27,13];
console.log("\nProblem 1 answer with input", int_arr, "returns:", cumulative_sum(int_arr));


// Problem 2
// Write a function search that takes two arguments xs and n. It should return the index of the first 
// appearance of n in xs. For example, search([1, 3, 5, 3, 1], 3) should return 1.
// If n does not appear in xs, you should return undefined

function search(l: number[], n: number): number | undefined {
    for (let i = 0; i < l.length; i++) {
        if (l[i] === n) {
            return i;
        }
    }
    return undefined;
}

int_arr = [1, 3, 5, 3, 1];
var int: number = 3;
console.log("\nProblem 2 answer with inputs", int_arr, "and", int, "returns:", search(int_arr, int));


// Problem 3
// A natural number can be represented with the following types in TypeScript:
// class Succ { readonly n: Succ | undefined; constructor(n: Succ | undefined) { this.n = n; } }
// type Nat = Succ | undefined;
// const Zero: Nat = undefined;
// That is, a natural number is either 0 (undefined), or it is the successor of some other natural number.
// Write the following functions using nats:
// - add should take two nats and produce a nat representing their sum
// - to_int should take a nat and produce the equivalent int. For example, to_int Zero should produce 0 and to_int 
// (Succ (Succ Zero)) should produce 2
// - from_int should take an int and produce the equivalent nat. You can assume the int is not negative
class Succ { 
    readonly n: Succ | undefined; 
    constructor(n: Succ | undefined) {
        this.n = n; 
    } 
}
type Nat = Succ | undefined;
const Zero: Nat = undefined;

function to_int(x: Nat): number {
    var n: number = 0;
    while (x !== undefined) {
        n += 1;
        x = x.n;
    }
    return n;
}

function from_int(x: number): Nat {
    var nat: Nat = Zero;
    while (x > 0) {
        x -= 1;
        nat = new Succ(nat);
    }
    return nat;
}

function add (x: Nat, y: Nat): Nat {
    return from_int(to_int(x) + to_int(y));
}

var successor: Nat = new Succ(new Succ(Zero));
var int: number = 3;
console.log("\nProblem 3 function to_int answer with inputs", successor, "returns:", to_int(successor));
console.log("\nProblem 3 function from_int answer with inputs", int, "returns:", from_int(int));
console.log("\nProblem 3 function add answer with inputs", successor, "and", successor, "returns:", add(successor, successor));
// Problem 4
// Write a function sequence that takes 3 int arguments called spacing, low, and high. It should return an 
// int list of numbers from low to high (possibly including high) separated by spacing in sorted order. Assume 
// spacing is positive and must use a loop.
function sequence(s: number, l: number, h: number): number[] {
    var arr: number[] = [];
    while (l <= h) {
        arr.push(l);
        l = l + s;
    }
    return arr;
}

var spacing: number = 18;
var low: number = 0;
var high: number = 381;
console.log("\nProblem 4 function sequence with inputs", spacing, low, "and", high, "returns:", sequence(spacing,low,high));

// Problem 5
// Write a function string_append_map that takes a string list called xs and a string called suffix and returns a 
// string list. Each element of the output should be the corresponding element of the input appended with suffix 
// (with no extra space between the element and suffix).
function string_append_map(l: string[], s: string): string[] {
    return l.map((element) => { 
        return element += s; 
    })
}

var string_list: string[] = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", 
  "j", "k", "l", "m", "n", "o", "p", "q", "r", 
  "s", "t", "u", "v", "w", "x", "y", "z"];
  
var string: string = "abracadabra";
console.log("\nProblem 5 function string_append_map with inputs", string_list, "and", string, "returns:", string_append_map(string_list,string));

// Problem 6a
// Create a class Expr with the following subtypes:
// - Literal, which represents an integer literal
// - Plus, which represents "+"
// - Minus, which represents "-"
// - Mul, which represents "*"
class Expr  {}

class Literal extends Expr {
    n: number;
    constructor(v: number) {
        super();
        this.n = v;
    }
}
class Plus extends Expr {
    left: Expr;
    right: Expr;
    constructor(l: Expr, r: Expr) {
        super();
        this.left = l;
        this.right = r;
    }
}
class Minus extends Expr {
    left: Expr;
    right: Expr;
    constructor(l: Expr, r: Expr) {
        super();
        this.left = l;
        this.right = r;
    }
}
class Mul extends Expr {
    left: Expr;
    right: Expr;
    constructor(l: Expr, r: Expr) {
        super();
        this.left = l;
        this.right = r;
    }
}

// Problem 6b
// Write a function evaluate(exp: Expr): number.
// The function should evaluate the expression defined in 6a and return the result
function evaluate(exp: Expr): number {
    if (exp instanceof Literal) {
        return exp.n;
    } else if (exp instanceof Plus) {
        return evaluate(exp.left) + evaluate(exp.right);
    } else if (exp instanceof Minus) {
        return evaluate(exp.left) - evaluate(exp.right);
    } else if (exp instanceof Mul) {
        return evaluate(exp.left) * evaluate(exp.right);
    } else {
        // Invalid
        return 1;
    }
}

var expression: Expr = new Mul(new Plus(new Literal(5), new Literal(3)), new Literal(2));
console.log("\nProblem 6 function evaluate with inputs", expression, "returns:", evaluate(expression));

// Problem 7a
// Write a new VExpr class that extents Expr and also has a subtype
// - Var string, which is a variable name
class VExpr extends Expr {
    s: string;
    constructor(v: string) {
        super();
        this.s = v;
    }
}

// Problem 7b
// Write a function evaluate_env(exp: VExpr, env: [string, number][]): number | undefined
// The function should evaluate the expression in 7a under the bindings, return undefined if a variable
// appears that is not contained in the environment.
function evaluate_env(exp: VExpr, env: [string, number][]): number | undefined {
    let contained_var = env.find(vars => vars[0] === exp.s);
    if (contained_var) {
        return contained_var[1];
    }
    return undefined;
}


let env_expression: VExpr = new VExpr("x");
let env_set: [string, number][] = [["x", 5], ["y", 43], ["z", 12]];
console.log("\nProblem 7 function evaluate_env with inputs", env_expression, "and", env_set, "returns:", evaluate_env(env_expression, env_set));


// Problem 8
// Write a function filtermap<T, U>(filterf: (v: T) => boolean, mapf: (v: T) => U, l: T[]): U[]
// that takes a filter function and a map function, applying each function to the elements in the list.
// If the filter function returns false, drop the element
// If the filter function returns true, apply the map function and append to the result
// You should only traverse the input list once (a loop is required)!
function filtermap<T, U>(filterf: (v: T) => boolean, mapf: (v: T) => U, l: T[]): U[] {
    let newl: U[] = [];
    l.map((element) => {
        if(filterf(element)) {
            newl.push(mapf(element));
        }
    })
    return newl;
}

let filterfunc: (v: T) => boolean = (n) => n % 2 === 0;
let mapfunc: (v: T) => U = (n) => `Num: ${n * 10}`;
int_arr = [1, 2, 3, 4, 5, 6];
console.log("\nProblem 8 function filtermap with inputs", filterfunc, mapfunc, "and", int_arr, "returns:", filtermap(filterfunc, mapfunc, int_arr));


// Problem 9
// write a function makesay(s: string): (os: string) => string
// The makesay function will take a string and return a new function that when called appends the original 
// string (a space) and then the argument string
// e.g. (makesay("hello"))("world") will output "hello world"

function makesay(s: string): (os: string) => string {
    return function saymake(os: string) {
        s = s + " " + os;
        return s;
    }
}



let str1: string = "hello";
let str2: string = "world";
console.log("\nProblem 9 function makesay with inputs", str1, "and", str2, "returns:", makesay(str1)(str2));

// Problem 10:
// Given the definitions:
// class TLeaf {
// }
// class TNode {
//     left: Tree;
//     right: Tree;
//     constructor(left: Tree, right: Tree) { this.left = left; this.right = right; }
// }
// type Tree = TLeaf | TNode | undefined;
// write a function maxdepth(t: Tree): number 
// This function should compute the deepest node in the tree (where the undefined empty tree is 0).

class TLeaf {
}
class TNode {
    left: Tree;
    right: Tree;
    constructor(left: Tree, right: Tree) { 
        this.left = left; 
        this.right = right; 
    }
}
type Tree = TLeaf | TNode | undefined;

function maxdepth(t: Tree): number {
    let depth: number = 0;
    let depth_set: number[] = [];
    function traverse(t: Tree, d: number): void {
        if (t instanceof TNode) {
            traverse(t.left, d + 1);
            traverse(t.right, d + 1);
        } else if (t instanceof TLeaf) {
            depth_set.push(d + 1);
        } else {
            depth_set.push(d);
        }
    }
    traverse(t, depth);
    return(depth_set.reduce((max, current) => Math.max(max, current), 0));
}



let tree: Tree = new TNode(
    new TLeaf(), 
    new TNode(
        undefined, 
        new TNode(new TLeaf(), undefined)
    )
);
console.log("\nProblem 10 function maxdepth with inputs", tree, "returns:", maxdepth(tree));