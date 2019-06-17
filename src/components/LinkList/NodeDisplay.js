import React, {Component} from 'react'
import NodeApp from './NodeApp'
import LinkControl from './LinkControl'

class NodeDisplay extends Component{
    constructor(){
        super();
        this.Amount=0;
        this.state={ }
        
    }

    render(){
        console.log(this.props)
        //prev
            let prevAm= this.props.state.prevnodeAmount;
            let prevNa= this.props.state.prevnodeName;
            let prevID= this.props.state.prevnodeID;
        //next  
            let nextAm= this.props.state.nextnodeAmount;
            let nextNa= this.props.state.nextnodeName;
            let nextID= this.props.state.nextnodeID;
        //display logics

         return(

            <div className="link-display-container">
                <div id="link-box-0" className="link-box">
                    <h2 id="link-h2-0" >Prev</h2>
                    <h3 className="link-display-h3">Amount: {prevAm===null?prevAm=0:prevAm}</h3>
                    <h3 className="link-display-h3">Subject: {prevNa===null?prevNa=0:prevNa}</h3>
                    <h3 className="link-display-h3">Node ID: {prevID===null?prevID=0:prevID}</h3>
                </div>

                <div id="link-box-1" className="link-box">
                    <h2 id="link-h2-1" >Current</h2>
                    <h3 className="link-display-h3">Amount: {this.props.state.currentnodeAmount}</h3>
                    <h3 className="link-display-h3">Subject: {this.props.state.currentnodeName}</h3>
                    <h3 className="link-display-h3">Node ID: {this.props.state.currentNodeID}</h3>
                </div>

                <div id="link-box-2" className="link-box">
                    <h2 id="link-h2-2" >Next</h2>
                    <h3 className="link-display-h3">Amount: {nextAm===null?nextAm=0:nextAm}</h3>
                    <h3 className="link-display-h3">Subject: {nextNa===null?nextNa=0:nextNa}</h3>
                    <h3 className="link-display-h3">Node ID: {nextID===null?nextID=0:nextID}</h3>
                </div>
            </div>
           
        )
    }
}

export default NodeDisplay