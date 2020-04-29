class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null
    }
    addFront(value) {
        if (this.head == null) {
            this.head = new Node(value);
            return this
        } else {
            var restOfList = this.head;
            this.head = new Node(value);
            this.head.next = restOfList;
            return this
        }
    }
    removeFront() {
        this.head = this.head.next;
        return this
    }
    front() {
        return this.head.value
    }
}