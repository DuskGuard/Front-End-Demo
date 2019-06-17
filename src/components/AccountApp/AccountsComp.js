import React, { Component } from 'react';
import AccountsPOJO from "./AccountsPOJO";
import AccountApp from './AccountApp'
import CardComp from "./CardComp";
import './AccountsComp.css';


class AccountsComp extends Component {
    constructor() {
      super();
      this.newAccName="";
      this.newAccBal=0;
      this.state = { 
        maxValue: 0, 
        minValue: 0, 
        total: 0,
        detailModeOn: false,
        bankingOn: false,
      }
      this.controller = new AccountsPOJO();
      this.handleClick= this.handleClick.bind(this);
      this.addNewAccount= this.addNewAccount.bind(this);
      this.handleChange= this.handleChange.bind(this);
      this.delAccount = this.delAccount.bind(this);
      this.detailAccount = this.detailAccount.bind(this);
      this.detailTargetAccount = {};
      this.updateAccount = this.updateAccount.bind(this);
    }
      handleClick(event){
        console.log(event.target.id)
          if(event.target.id="acc-home-detail"){
            this.setState({
              bankingOn: !this.state.bankingOn
            });
          }
      }
      handleChange(event){
        let tempname=""
        let tempbal=0;
        if(event.target.id==="acc-input-balance"){
          tempbal=event.target.value;
          console.log(tempbal)
          this.newAccBal=tempbal;
        }else if(event.target.id==="acc-input-name"){
          tempname=event.target.value;
          this.newAccName=tempname;
        }
        console.log(this.newAccBal,this.newAccName)
      }
      addNewAccount() {
        let newName= String(this.newAccName);
        let newBal= Number(this.newAccBal);
        this.controller.addAccounts(newBal, newName);
        console.log("This is the accounts list:", this.controller.arrControl);
        let updateMin = this.controller.minAccount();
        let updateMax = this.controller.maxAccount();
        let total = this.controller.totalAccount();
        this.setState({
          maxValue: updateMax,
          minValue: updateMin,
          total: total
        });
      }

      delAccount(event){
        console.log(event.target.parentElement.id)
        if(this.controller.arrControl.length>1){
          let targetID = event.target.parentElement.parentElement.id;
          this.controller.deleteAccount(targetID);
          let updateMax = this.controller.maxAccount();
          let updateMin = this.controller.minAccount();
          let total = this.controller.totalAccount();
          this.setState({
            maxValue: updateMax,
            minValue: updateMin,
            total: total, 
          });
        }else{
            console.log("Cannot Delete Last Account")
        }
        console.log(this.controller.arrControl)
      }
      detailAccount(event){
        let targetID = event.target.parentElement.parentElement.parentElement.id;
        console.log(targetID,"this is the account id")
        let objectFound = this.controller.arrControl[targetID];
        console.log(objectFound)
        this.detailTargetAccount= objectFound;
        console.log(this.detailTargetAccount);
        this.setState({
          detailModeOn: !this.state.detailModeOn
        })
      }
      updateAccount(event){
        let newbal = Number(event.target.parentElement.id);
        let newname = String(event.target.parentElement.parentElement.id);
        this.detailTargetAccount.balance= newbal;
        this.detailTargetAccount.name= newname;
        this.setState({
          detailModeOn: false 
        })
        let updateMin = this.controller.minAccount();
        let updateMax = this.controller.maxAccount();
        let total = this.controller.totalAccount();
        this.setState({
          maxValue: updateMax,
          minValue: updateMin,
          total: total
        });
      }
    render() {
      let CardList= this.controller.arrControl.map((item) => {
          return(
            <CardComp key={item.id} account={item} delAcc={this.delAccount} detailAcc={this.detailAccount} />
          ) 
      });

      let DetailAccount= <AccountApp targetAccount={this.detailTargetAccount} updateinfo={this.updateAccount}/>;
      
    
      return(
        <div id="root">
          <div className="acc-border-main">
                <h1 className="acc-home-h1"> ~ Low Cost Banking Service ~ </h1>
                <h2 className="acc-home-h2">  " By Poor People, For Poor People.™ " </h2>
                  <br/>
               <div className="acc-border-home">   
                <div className="acc-home-create">
                  <h2 className="acc-create-h2">Create Account</h2>
                  <input className="acc-home-input" onChange={this.handleChange} type="text" id="acc-input-name" placeholder="Name of Account"/>
                  <input className="acc-home-input" onChange={this.handleChange} type="number" id="acc-input-balance" placeholder="Starting Balance"/>
                  <button className="acc-home-btn" onClick={this.addNewAccount}>Open New Account</button>
                </div>
                <div className="acc-home-summary">
                  <h2 className="acc-summary-h2">Banking Summary</h2>
                  <h3 className="acc-summary-h3"> The Max Valued Account Is: { this.state.maxValue }$ </h3> 
                  <h3 className="acc-summary-h3"> The Min Valued Account Is: { this.state.minValue }$ </h3>  
                  <h3 className="acc-summary-h3"> The Value of All Accounts: { this.state.total }$ </h3>
                </div>
                  <br/>
                
              </div>
              <div className="acc-detail">
                  <button id="acc-home-detail" onClick={this.handleClick}>Show/Hide Banking Details</button>
              </div>
            </div>
            <div className="acc-card-border"> 
              <div style={this.state.detailModeOn===false?{display:"inline-flex"}:{display: "none"}}id="acc-card-container">
                {this.state.bankingOn===true?CardList:null}   
              </div>
            </div>
            <div style={this.state.detailModeOn===false?{display:"none"}:{display:"flex"}} id="acc-detailcard-container">
              {this.state.detailModeOn===true?DetailAccount:null}
            </div>
        </div>
      )
    }
}

export default AccountsComp