import React from 'react';
import './city.css'


class City{
    constructor(Name, Latitude, Longitude, Population){
        this.cityName=Name;
        this.cityLat=Number(Latitude);
        this.cityLong=Number(Longitude);
        this.cityPop=Number(Population);
        this.state={

        }
    }
    show() {
        let strName= String(this.cityName);
        let strLat= this.cityLat;
        let strlong= this.cityLong;
        let strPop= this.cityPop
        let strTotal= strName+" "+strLat+" "+strlong+" "+strPop;
        return strTotal
    }
        
    movedIn(amount){
        let curentPop = this.cityPop;
        let newPop= curentPop+amount;
        this.cityPop= newPop;
        return this.cityPop
    }

    movedOut(amount){
        let curentPop = this.cityPop;
        let newPop= curentPop-amount;
        this.cityPop= newPop;
        return this.cityPop
    }
    howBig(){
        let refPop= this.cityPop;
        let result;
        if(refPop>100000){
            result="City"
        }else if(refPop>20000){
            result="Large Town"
        }else if(refPop>1000){
            result="Town"
        }else if(refPop>100){
            result="Village"
        }else if(refPop>0){
            result="Hamlet"
        }else{
            result="Crater In The Ground"
        }
        return result
    }
    whichSphere(){
        let direction;
        if(this.cityLat>0){
            direction= "Northern"
        } else if(this.cityLat<0){
            direction="Southern"
        } else{
            direction="Equator"
        }
        return direction
    }
    
}
export default City