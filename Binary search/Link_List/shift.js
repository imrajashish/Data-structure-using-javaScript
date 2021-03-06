class node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class singlyLinkeList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length --;
        if(this.length === 0){
            this.tail = null;
            this.tail = null;
        }
        return currentHead;
    }
}
var list = new singlyLinkeList()
list.push("14")
list.push("Good Bye!")
list.push("!")
