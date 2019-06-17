import React, {Component} from 'react'
import './city.css'
import City from './City'
import Community from './Community'
import CityCard from './CityCard'
import war from './war.jpg'

class CityApp extends Component{
    constructor(){
        super();
        this.newcityName="";
        this.newcityLat=0;
        this.newcityLong=0;
        this.newcityPop=0;
        this.delInput="";
        this.state={
            Northy:"",
            Southy:"",
            totalPop:0,
        }
        this.handleChange=this.handleChange.bind(this);
        this.addCity= this.addCity.bind(this);
        this.delCity= this.delCity.bind(this)
        this.home= new Community();
    }
    handleChange(event){
        if(event.target.id==="input1"){
            console.log(event.target.value)
             this.newcityName = String(event.target.value)
        }else if(event.target.id==="input2"){
            this.newcityLat=event.target.value
       }else if(event.target.id==="input3"){
        this.newcityLong=event.target.value
        }else if(event.target.id==="input4"){
            this.newcityPop=event.target.value
       }else if(event.target.id==="input5"){
             this.delInput= String(event.target.value)
        }
      
    }

    addCity(){
        let newName= this.newcityName;
        let newLat= this.newcityLat;
        let newLong= this.newcityLong;
        let newPop= this.newcityPop;
        console.log(newName, newLat, newLong, newPop,"Inputs")
        this.home.createCity(newName,newLat,newLong,newPop);
        console.log(this.home.List,"City List")
        let northest= this.home.mostNorth();
        let southest= this.home.mostSouth();
        let total= this.home.totalPop();
        this.setState({
            Northy: northest,
            Southy: southest,
            totalPop: total,
        })
    }

    delCity(){
        if(this.home.List.length>1){
            let delName= this.delInput;
            this.home.deleteCity(delName)
            let northest= this.home.mostNorth();
            let southest= this.home.mostSouth();
            let total= this.home.totalPop();
            this.setState({
                Northy: northest,
                Southy: southest,
                totalPop: total,
            })
        }else{
            alert("Cannot Delete Last City")
        }
    }

    componentDidMount(){
        this.home.createCity("Calgary",51,114,1200000);
        this.home.createCity("Edmonton",53.5,113.5,1000000);  
        let northest= this.home.mostNorth();
        let southest= this.home.mostSouth();
        let total= this.home.totalPop();
        this.setState({
            Northy: northest,
            Southy: southest,
            totalPop: total,
        })
    }


    render(){
        const CardList = this.home.List.map((item) => {
            console.log("This is what item looks like:", item);       
            return(
              <CityCard key={item.id} city={item}  />
            )     
          });
        
        return(
            <div id="root">  
                    <div id="city-border-main">
                        <h1 id="city-h1-main">World Domination Sim</h1>
                                <br/>
                            <input  className="city-input-type1" id="input1" type="text" onChange={this.handleChange} placeholder="New City Name"></input>
                            <input  className="city-input-type2" id="input2" type="number" onChange={this.handleChange} placeholder="New City Latitude"></input>
                            <input  className="city-input-type1" id="input3" type="number" onChange={this.handleChange} placeholder="New City Longitude"></input>
                            <input  className="city-input-type2" id="input4" type="number" onChange={this.handleChange} placeholder="New City Initial Pop."></input>
                                <br/>
                            <button className="city-button-type1" onClick={this.addCity}>Create City</button>
                                <br/>
                                <br/>
                            <input className="city-input-type1" id="input5" type="text"  onChange={this.handleChange} placeholder="Enter City Name to Delete"></input>
                            <button className="city-button-type2" onClick={this.delCity}>Delete City</button>
                                <br/>
                                <br/>
                    </div>

                    <div className="city-list-border">
                        <h2 id="city-h2-list">City Tracker</h2>
                            <br/>
                        <div id="city-card-container">
                            {CardList}
                        </div>
                    </div>
                    <div className="city-sub-border">
                        <h2  id="city-h2-summary">Summary</h2>
                            <br/>
                        <h2 className="city-h2-detail">Northernmost City:{this.state.Northy}</h2>
                            <br/>
                        <h2 className="city-h2-detail">Southernmost City:  {this.state.Southy}</h2>
                            <br/>
                        <h2 className="city-h2-detail">Total Targeted Population: {this.state.totalPop} people</h2>
                            <br/>
                    </div>
            </div>
        )
    }
}

export default CityApp