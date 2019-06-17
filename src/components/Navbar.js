import React, {Component} from 'react';
import Home from '../Home'
import CityApp from './Cities/CityApp'
import NodeApp from './LinkList/NodeApp'
import AccountsComp from './AccountApp/AccountsComp'
    import coin from './coin.png'
    import city from './city.png'
    import list from './list.png'
    import home from './home.png'
import './navbar.css'
class Navbar extends React.Component{
    constructor(){
        super()
        this.state={
            toHome:true,
            toCity:false,
            toAccount:false,
            toList:false
        }
        this.handleClick= this.handleClick.bind(this);
        this.handleDBLclick=this.handleDBLclick.bind(this);
    }
    handleClick(event){
        let target= event.target.id;
        console.log(target)
        switch (target) {
            case "li1":
                this.setState({
                    toHome:true,
                    toCity:false,
                    toAccount:false,
                    toList:false
                })
                break;
            case "li2":
                this.setState({
                    toHome:false,
                    toCity:true,
                    toAccount:false,
                    toList:false
                })
                break;
            case "li3":
                this.setState({
                    toHome:false,
                    toCity:false,
                    toAccount:true,
                    toList:false
                })
                break;
            case "li4":
                this.setState({
                    toHome:false,
                    toCity:false,
                    toAccount:false,
                    toList:true
                })
                break;
        }
    }
    handleDBLclick(event){
        let target= event.target.id ;
        switch (target) {
            case "li1":
                this.setState({
                    toHome:false,
                    toCity:false,
                    toAccount:false,
                    toList:false
                })
                break;
        }
    }
    render(){
        let displaycomp;
                if(this.state.toHome===true){
                    displaycomp=<Home/> ;
                }else if (this.state.toCity===true){
                    displaycomp=<CityApp/> ;
                }else if(this.state.toAccount===true){
                    displaycomp=<AccountsComp/> ;
                }else if(this.state.toList===true){
                    displaycomp=<NodeApp/>
                }else{
                    displaycomp=null
                }
        
        return(
            <div id="root">
                <br/>
                <ul id="tile-border">
                    <img src={home} onDoubleClick={this.handleDBLclick} className="tile" id="li1" onClick={this.handleClick}></img>
                    <img src={city} className="tile" id="li2" onClick={this.handleClick}></img>
                    <img src={coin} className="tile" id="li3" onClick={this.handleClick}></img>
                    <img src={list} className="tile" id="li4" onClick={this.handleClick}></img>
                </ul>
                <br/>
                <br/>
                <br/>
                <div id="displaycomp-border">
                    <div id="displaycomp-glow">
                        {displaycomp}
                    </div>    
                </div>
                
            </div>
        )
    }
}
export default Navbar