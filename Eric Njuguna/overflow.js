//Doubling the stacklength, creating a new array double the size. Spread the old array into the new array.
//Pushing the element into the new array

class Stack {
    items = [];
    top = -1;
    constructor(size) {
        this.stackLength = size;
        this.items = new Array(size);
    }

    push = (element) => {
        if (this.stackIsFull()) {
            this.stackLength *= 2;
            let temp = new Array(this.stackLength);
            temp = [...items];
            this.items = temp;
            this.items[++this.top] = element;
        } else {
            this.items[++this.top] = element;
        }
    };

    pop = () => {
        if (this.stackIsEmpty()) throw new Error("Stack is Empty");
        let element = this.items[this.top];
        delete this.items[this.top--];
        return element;
    };

    peek = () => {
        if (this.stackIsEmpty()) throw new Error("Stack is Empty");
        return this.items[this.top];
    };

    stackIsEmpty = () => this.size() - 1 === -1;
    stackIsFull = () => this.top + 1 === this.stackLength;
    size = () => this.top + 1;
}

module.exports = Stack;

// Driver code
let stack = new Stack(5);
let { items, push, pop } = stack;

push(4); //First element
push(6); // Second element
push(7); // Third element
push(4); // Fourth element
push(6); // Fifth element

// new array to double and push in a new element
push(6); // Fifth element
push(7);

console.log(stack);