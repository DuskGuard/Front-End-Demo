import React, { Component } from 'react';

class CardComp extends Component {
    constructor(props) {
        super(props)
        console.log("In the CardComp constructor");
        console.log("This is what this.props in the CardComp looks like:", this.props);
    }    

    render() {
        return(
            <div id={this.props.account.id}>
                <div className="acc-card" id={this.props.account.name}>
                    <h3 className="acc-card-h3">Account Name: <p className="acc-card-p">{this.props.account.name}</p></h3> 
                    <h3 className="acc-card-h3"> Current Balance: <p className="acc-card-p">${this.props.account.balance}</p></h3>
                    <h4 className="acc-card-h3"> Account ID: <p className="acc-card-p">{this.props.account.id}</p></h4>
                    <div className="acc-card-btndiv">
                        <button className="acc-card-btn" id="acc-cardbtn" onClick={this.props.detailAcc}>Account Details </button>
                        <button className="acc-card-btn" onClick={this.props.delAcc}> Delete Account </button>
                    </div>
                </div>
            </div>
        )

    }

}

export default CardComp