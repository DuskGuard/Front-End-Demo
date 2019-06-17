import React, {Component} from 'react'
class AccountApp extends Component {
    constructor(props){
        super(props);
        this.amount=0
        this.nameinput=""
        this.state={
            targetAccount: this.props.targetAccount,
            currentBal : this.props.targetAccount.balance,
            currentName: this.props.targetAccount.name,
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.stateupdater= this.stateupdater.bind(this)
    }
    stateupdater(){
        this.setState({
            targetAccount: this.props,
            currentBal : this.props.targetAccount.balance,
            currentName: this.props.targetAccount.name,
        })
        console.log(this.state.currentBal)
    }
    handleClick(event){
        console.log(event)
        this.setState({
            targetAccount: this.props.targetAccount
        })
        switch (event.target.id) {
            case "acc-detail-card-btn1": this.setState(prevstate=>{
                return{
                    currentName: prevstate.currentName=this.nameinput
                }
            });
            break;
            case "acc-detail-card-btn2": this.setState(prevState=>{
                return{
                    currentBal: (Number(prevState.currentBal) - Number(this.amount)) 
                }})
            break;
            case "acc-detail-card-btn3": this.setState(prevState=>{
                return{
                    currentBal: (Number(prevState.currentBal)+ Number(this.amount))
                }})
            break;
        }
    }
    handleChange(event){
        console.log(event)
        if(event.target.id==="acc-detail-card-input-1"){
            console.log("Event Change")
            let amount = event.target.value;
            console.log(amount)
            this.amount=amount
            console.log(this.amount)
        }else if(event.target.id==="acc-detail-card-input-2"){
            console.log("Event Change");
            let newName = event.target.value;
            this.nameinput = newName;
            console.log(this.nameinput)
        }
    }
    render(){            
        console.log(this.props.targetAccount,"From Account App")
        console.log(this.props)
    
    return (
        <div id={this.state.currentName}>
            <div id={this.state.currentBal} className="acc-detail-card-border">
                <h1 className="acc-detail-card-h1">Welcome {this.state.currentName}</h1>
                    <input type="number" onChange={this.handleChange} id="acc-detail-card-input-1" placeholder="+/- Amount/Funds"></input>
                    <input type="text" onChange={this.handleChange} id="acc-detail-card-input-2" placeholder="New Account Name"></input>
                <div id="acc-detail-card-btndiv">
                    <button id="acc-detail-card-btn1" onClick={this.handleClick} className="acc-detail-card-btn">Change Name</button>
                    <button id="acc-detail-card-btn2" onClick={this.handleClick} className="acc-detail-card-btn">Withdraw Funds</button>
                    <button id="acc-detail-card-btn3" onClick={this.handleClick} className="acc-detail-card-btn">Deposit Funds</button>
                </div>
                <button className="acc-detail-card-btn" onClick={this.props.updateinfo}>Back to Accounts</button>
                <h1 className="acc-detail-card-display-h1">You Now Have {this.state.currentBal}$</h1>
            </div>    
        </div>
    )
}
}
export default AccountApp 