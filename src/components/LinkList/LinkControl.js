import React,{Component} from 'react'
import Node from './Node'


class EndNode{
    constructor(Name){
        this.next= null;
        this.prev= null;
        this.amount=0;
        this.id="N/A" 
        this.subject= String(Name);
    } 
    showAmount(){
        let display = this.amount;
        return display;
    }
}

class LinkControl extends Component{
    constructor(){
        super();
        this.head= new EndNode("Head");
        this.tail= new EndNode("Tail");
        this.counter=0;
        this.current=null;
        this.temp=null;
        this.anchor=null;
        this.crownAmount=0;
        this.fifoAmount=0;
        this.fifoName="";
        this.lifoAmount=0;
        this.lifoName="";
        this.first= this.first.bind(this);
        this.totalAmount= this.totalAmount.bind(this);
    }
    insertNode(Name,Amount){
        if(this.current!==this.tail){    
            if(this.current===null){
                let currentNode= new Node(Name,Amount);
                    currentNode.id= this.counter;
                this.current= currentNode;
                this.current.next=this.tail;
                this.current.prev=this.head;
                this.tail.prev=this.current;
                this.head.next=this.current;
                this.temp=this.current;
                //fifo          
                this.fifoAmount= this.current.amount;
                this.fifoName= this.current.subject;
                }else if(this.current.next===this.tail){
                    this.temp=this.current;
                    let currentNode= new Node(Name,Amount);
                        currentNode.id= this.counter;
                    this.current= currentNode;
                    this.current.prev=this.temp;
                    this.current.next=this.tail;
                    this.tail.prev=this.current;
                    this.temp.next=this.current;
                    }else{
                        this.anchor=this.current.next;
                        this.temp=this.current;
                        let currentNode= new Node(Name,Amount);
                            currentNode.id= this.counter;
                        this.current= currentNode;
                        this.current.prev= this.temp;
                        this.current.next= this.anchor;
                        this.temp.next=this.current;
                        this.anchor.prev=this.current;        
                    }
        }else{
            alert("Cannot Insert Node Behind")
        }
        this.counter++;
        let refCrown= Number(this.crownAmount);
        let targetAmount = Number(this.current.amount);
        let root =Number(targetAmount+ refCrown);
        this.crownAmount= root;
         //lifo
            this.lifoName= this.current.subject;
            this.lifoAmount= this.current.amount;
    }
    back(){
        if(this.current.prev!==this.head.prev){
            let moveanchor= this.current.prev;
            this.current=moveanchor;
            return this.current
        }else{
            alert("Cannot Traverse Past The Head")
        }
    }
    forward(){
        if(this.current.next!==this.tail.next){
            let posanchor =this.current.next;
            this.current= posanchor;
            return this.current
        }else{
            alert("Cannot Traverse Past The Tail")
        }
    }
    first(){
        let headanchor= this.head.next;
        this.current=headanchor;
        return this.current
    }
    last(){
        let lastanchor= this.tail.prev;
        this.current=lastanchor
        return this.current
    }
    deleteNode(){
        if(this.counter>0 && this.current!==this.head &&this.current !==this.tail){
                let refCrown= Number(this.crownAmount);
                let targetAmount = Number(this.current.amount);
                let root =Number(refCrown- targetAmount);
                this.crownAmount= root;
            this.temp=this.current.prev;
            this.anchor=this.current.next;
            this.temp.next= this.anchor;
            this.anchor.prev=this.temp;
            this.current.next=null;
            this.current.prev=null;
            this.current=this.temp;
                let countref= this.counter;
                let newcount=Number(countref-1);
                this.counter=newcount;
            return this.current.subject
        }else if(this.counter=0){
            alert("Cannot Delete Last Node")
        }else{
            alert("Cannot Delete EndNode")
        }
       
    }
    totalAmount(){
        let crown= this.crownAmount;
        return crown
    } 
    lifo(){
        //return node  info with counter-1
        let lifoname= this.lifoName;
        let lifoamount= this.lifoAmount;
        let stringlifo= String("The Last Node In Is "+lifoname+" w/ "+lifoamount);
        return stringlifo;
    }
    fifo(){
        //return node info with counter of 1
        let fifoname= this.fifoName;
        let fifoamount= this.fifoAmount;
        let stringfifo= String("The First Node In Is "+fifoname+" w/ "+fifoamount);
        return stringfifo;
    }
}
export default LinkControl