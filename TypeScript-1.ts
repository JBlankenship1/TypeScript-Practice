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
    l.forEach((element, index) => {
        if (index != 0) { 
         l[index] = element + (l[index - 1] ?? 0);
        }
    });
    return l;
}

var int_arr: number[] = [12,27,13];
console.log("Problem 1 answer with input", int_arr, ":", cumulative_sum(int_arr));


// Problem 2
// Write a function search that takes two arguments xs and n. It should return the index of the first 
// appearance of n in xs. For example, search([1, 3, 5, 3, 1], 3) should return 1.
// If n does not appear in xs, you should return undefined

function search(l: number[], n: number): number | undefined{
    l.forEach((element, index) => {
        if (element === n) { return index}
    })
    return undefined;
}

int_arr = [1, 3, 5, 3, 1];
var int: number = 3;
console.log("Problem 2 answer with inputs", int_arr, "and", int, ":", search(int_arr, int));


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


var successor: Nat = new Succ(new Succ(Zero));
var int: number = 3;
console.log("Problem 3 function to_int answer with inputs", successor, ":", to_int(successor));
console.log("Problem 3 function from_int answer with inputs", int, ":", from_int(int));

// Problem 4
// Write a function sequence that takes 3 int arguments called spacing, low, and high. It should return an 
// int list of numbers from low to high (possibly including high) separated by spacing in sorted order. Assume 
// spacing is positive and must use a loop.
function sequence(s: number, l: number, h: number): number[] {
    var arr: number[] = [];
    while (l < h) {
        arr.push(l);
        l = l + s;
    }
    return arr;
}

var spacing: number = 18;
var low: number = 0;
var high: number = 381;
console.log("Problem 4 function squesence with inputs", spacing, low, "and", high, ":", sequence(spacing,low,high));

// Problem 5
// Write a function string_append_map that takes a string list called xs and a string called suffix and returns a 
// string list. Each element of the output should be the corresponding element of the input appended with suffix 
// (with no extra space between the element and suffix).
function string_append_map(l: string[], s: string): string[] {
    
}

// Problem 6a
// Create a class Expr with the following subtypes:
// - Literal, which represents an integer literal
// - Plus, which represents "+"
// - Minus, which represents "-"
// - Mul, which represents "*"


// Problem 6b
// Write a function evaluate(exp: Expr): number.
// The function should evaluate the expression defined in 6a and return the result


// Problem 7a
// Write a new VExpr class that extents Expr and also has a subtype
// - Var string, which is a variable name


// Problem 7b
// Write a function evaluate_env(exp: VExpr, env: [string, number][]): number | undefined
// The function should evaluate the expression in 7a under the bindings, return undefined if a variable
// appears that is not contained in the environment.


// Problem 8
// Write a function filtermap<T, U>(filterf: (v: T) => boolean, mapf: (v: T) => U, l: T[]): U[]
// that takes a filter function and a map function, applying each function to the elements in the list.
// If the filter function returns false, drop the element
// If the filter function returns true, apply the map function and append to the result
// You should only traverse the input list once (a loop is required)!


// Problem 9
// write a function makesay(s: string): (os: string) => string
// The makesay function will take a string and return a new function that when called appends the original 
// string (a space) and then the argument string
// e.g. (makesay("hello"))("world") will output "helloworld"


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

