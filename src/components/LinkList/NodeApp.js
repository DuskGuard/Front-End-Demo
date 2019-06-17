import Node from './Node'
import LinkControl from './LinkControl'
import React, {Component} from 'react'
import NodeDisplay from './NodeDisplay'
import './linklist.css'
class NodeApp extends React.Component{
    constructor(){
        super();
        this.controller= new LinkControl();
        this.state={
            totalAmount:0,
            currentNodeID:0,
            currentnodeName:"",
            currentnodeAmount:0,
            prevnodeAmount:0,
            prevnodeName:"",
            prevnodeID:0,
            nextnodeAmount:0,
            nextnodeName:"",
            nextnodeID:0,
            totalNodes:0,
        }
        this.newnodeAmount=0;
        this.newnodeName="";
        this.handleChange= this.handleChange.bind(this);
        this.addNode=this.addNode.bind(this);
        this.removeNode= this.removeNode.bind(this);
        this.nextNode= this.nextNode.bind(this);
        this.prevNode= this.prevNode.bind(this);
        this.firstNode= this.firstNode.bind(this);
        this.lastNode= this.lastNode.bind(this);
    }
    handleChange(event){
        if(event.target.id==="input1"){
            console.log(event.target.value)
             this.newnodeName = String(event.target.value)
        }else if(event.target.id==="input2"){
            this.newnodeAmount=event.target.value
        }
    }
    addNode(){
        console.log(this.controller)
        this.controller.insertNode(this.newnodeName,this.newnodeAmount);
        let newtotal= this.controller.totalAmount();
        this.setState({
            totalAmount: newtotal
        })
        this.setState({
            totalNodes: this.controller.counter,
            //current node update
            currentnodeName: this.controller.current.subject,
            currentnodeAmount: this.controller.current.amount,
            totalNodes: this.controller.counter,
            currentnodeName: this.controller.current.subject,
            currentNodeID: this.controller.current.id,
            //prev node update
            prevnodeAmount: this.controller.current.prev.amount,
            prevnodeName: this.controller.current.prev.subject,
            prevnodeID: this.controller.current.prev.id,
            //next node update
            nextnodeAmount: this.controller.current.next.amount,
            nextnodeName: this.controller.current.next.subject,
            nextnodeID: this.controller.current.next.id,
        })
    }
    removeNode(){
        console.log(this.controller)
        if(this.controller.current.next===this.controller.tail && this.controller.current.prev===this.controller.head){
            alert("Cannot Delete Last Node \nPlease Press Enter to Continue!")
        }else if(this.controller.current.prev===this.controller.head){
            alert("Cannot Delete Origin Node \nPlease Press Enter to Continue!")
        }else{
            this.controller.deleteNode();
            console.log(this.controller)
            let newtotal= this.controller.totalAmount();
            this.setState({
                totalAmount: newtotal
            })
            this.setState({
                totalNodes: this.controller.counter,
                //current node update
                currentnodeName: this.controller.current.subject,
                currentnodeAmount: this.controller.current.amount,
                totalNodes: this.controller.counter,
                currentnodeName: this.controller.current.subject,
                currentNodeID: this.controller.current.id,
                //prev node update
                prevnodeAmount: this.controller.current.prev.amount,
                prevnodeName: this.controller.current.prev.subject,
                prevnodeID: this.controller.current.prev.id,
                //next node update
                nextnodeAmount: this.controller.current.next.amount,
                nextnodeName: this.controller.current.next.subject,
                nextnodeID: this.controller.current.next.id,
            })
        }
    }
    nextNode(){
        console.log(this.controller)
        if(this.controller.current.next===this.controller.tail){
            alert("Cannot Stand on Tail \nPlease Press Enter to Continue!")
        }else{
            this.controller.forward();
            this.setState({
                totalNodes: this.controller.counter,
                //current node update
                currentnodeName: this.controller.current.subject,
                currentnodeAmount: this.controller.current.amount,
                totalNodes: this.controller.counter,
                currentnodeName: this.controller.current.subject,
                currentNodeID: this.controller.current.id,
                //prev node update
                prevnodeAmount: this.controller.current.prev.amount,
                prevnodeName: this.controller.current.prev.subject,
                prevnodeID: this.controller.current.prev.id,
                //next node update
                nextnodeAmount: this.controller.current.next.amount,
                nextnodeName: this.controller.current.next.subject,
                nextnodeID: this.controller.current.next.id,
            })
        }
    }
    prevNode(){
        console.log(this.controller)
        if(this.controller.current.prev===this.controller.head){
            alert("Cannot Stand On Head \nPlease Press Enter to Continue!")
        }else{
            this.controller.back();
            this.setState({
                totalNodes: this.controller.counter,
                //current node update
                currentnodeName: this.controller.current.subject,
                currentnodeAmount: this.controller.current.amount,
                totalNodes: this.controller.counter,
                currentnodeName: this.controller.current.subject,
                currentNodeID: this.controller.current.id,
                //prev node update
                prevnodeAmount: this.controller.current.prev.amount,
                prevnodeName: this.controller.current.prev.subject,
                prevnodeID: this.controller.current.prev.id,
                //next node update
                nextnodeAmount: this.controller.current.next.amount,
                nextnodeName: this.controller.current.next.subject,
                nextnodeID: this.controller.current.next.id,
            })
        }
    }
    firstNode(){
        this.controller.first();
        this.setState({
            totalNodes: this.controller.counter,
            //current node update
            currentnodeName: this.controller.current.subject,
            currentnodeAmount: this.controller.current.amount,
            totalNodes: this.controller.counter,
            currentnodeName: this.controller.current.subject,
            currentNodeID: this.controller.current.id,
            //prev node update
            prevnodeAmount: this.controller.current.prev.amount,
            prevnodeName: this.controller.current.prev.subject,
            prevnodeID: this.controller.current.prev.id,
            //next node update
            nextnodeAmount: this.controller.current.next.amount,
            nextnodeName: this.controller.current.next.subject,
            nextnodeID: this.controller.current.next.id,
        })
    }
    lastNode(){
        this.controller.last();
        this.setState({
            totalNodes: this.controller.counter,
            //current node update
            currentnodeName: this.controller.current.subject,
            currentnodeAmount: this.controller.current.amount,
            totalNodes: this.controller.counter,
            currentnodeName: this.controller.current.subject,
            currentNodeID: this.controller.current.id,
            //prev node update
            prevnodeAmount: this.controller.current.prev.amount,
            prevnodeName: this.controller.current.prev.subject,
            prevnodeID: this.controller.current.prev.id,
            //next node update
            nextnodeAmount: this.controller.current.next.amount,
            nextnodeName: this.controller.current.next.subject,
            nextnodeID: this.controller.current.next.id,
        })
    }

    render(){


        return(
            <div id="root">

                <div className="link-border-main">
                    <h1 className="link-main-h1"> Linked List</h1>
                    <div className="link-main-container">
                        <div className="link-create-border">
                            <h2 className="link-main-h2">Insert A Node</h2>
                            <input className="link-main-input" type="text" onChange={this.handleChange} id="input1" placeholder="New Node Name"></input>
                            <input className="link-main-input" type="number" onChange={this.handleChange} id="input2" placeholder="New Node Amount"></input>
                            <button  className="link-main-btn" onClick={this.addNode}>Insert</button>
                            <h3 className="link-main-h3">Total Amount: {this.state.totalAmount} | Total Nodes: {this.state.totalNodes}</h3>        
                        </div>
                    </div>
                     <div className="link-control">
                        <button className="link-control-btn" onClick={this.firstNode}>First</button>
                        <button className="link-control-btn" onClick={this.prevNode}>Prev</button>
                        <button className="link-control-btn" onClick={this.removeNode}>Delete Node</button>
                        <button className="link-control-btn" onClick={this.nextNode}>Next</button>
                        <button className="link-control-btn" onClick={this.lastNode}>Last</button>
                    </div> 
                </div>   
                <div className="link-display-border">
                    <h2 className="link-display-h1">Interactive Map</h2>
                    <NodeDisplay state={this.state}/>
                </div> 
            </div>
        )
    }
}
export default NodeApp