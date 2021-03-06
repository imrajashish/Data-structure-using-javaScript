class Node{
    constructor(val){
        this.val = null;
        this.first = null;
    }
}
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return++this.size;
    }
}
var queue = new Queue();
