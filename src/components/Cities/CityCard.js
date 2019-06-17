import React, { Component } from 'react';

class CityCard extends Component{
    constructor(props){
        super(props)
        this.inputVal=0;
        this.targetCity=this.props.city
        this.state={
            pop: this.targetCity.cityPop,
        }
        this.handleChange= this.handleChange.bind(this)
        this.handleClick=this.handleClick.bind(this)
    }
        
    handleChange(event){
        if(event.target.id==="city-card-input"){
            this.inputVal= Number(event.target.value)
        }
    }
    handleClick(event){
        console.log(this.inputVal)
        if(this.inputVal<0){
            let adjustedIn= (this.inputVal*-1)
            let newpop = this.props.city.movedOut(adjustedIn);
            this.setState({
                pop: Number(newpop)
            }) 
        }else if(this.inputVal>=0){
            let newpop = this.props.city.movedIn(this.inputVal);
            this.setState({
                pop: Number(newpop)
            })
        }
        console.log(this.state.pop)
    }
    
    render() {
        return(
            <div className="city-card">
                    <h3 className="city-card-title">{this.props.city.cityName}</h3>
                    <h3 className="city-card-h3-cord"><p className="city-p">City Lat: </p> {this.props.city.cityLat}° , <p className="city-p">City Long: </p> {this.props.city.cityLong}°</h3>
                        <br/>
                    <h3 className="city-card-h3"><p className="city-p">City Pop: </p><br/>{this.state.pop} People</h3>
                        <br/>
                    <h3 className="city-card-h3"><p className="city-p">City Size: </p><br/>{this.props.city.howBig()}</h3>
                        <br/>
                    <h3 className="city-card-h3"><p className="city-p">Hemisphere: </p><br/>{this.props.city.whichSphere()}</h3>
                        <br/>
                    <h3 className="city-card-h3"><p className="city-p">City ID: </p><br/>{this.props.city.id}</h3>
                    <input id="city-card-input" type="number" onChange={this.handleChange} placeholder="Pop. +/- Amount"></input>
                    <button id="city-card-btn" onClick={this.handleClick}>Confirm</button>
            </div>
        )

    }

}

export default CityCard
