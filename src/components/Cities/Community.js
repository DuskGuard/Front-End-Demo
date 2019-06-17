
import City from './City'

class Community{
    constructor(){
        this.List=[]
        this.counter=0;
    }
    createCity(Name,Lat,Long,Pop){
        let newCity = new City(Name,Lat,Long,Pop)
        newCity.id= this.counter;
        this.List.push(newCity);
        this.counter++;
    }

    deleteCity(name){
        console.log(this.List)
       const factoredArray = this.List.filter(item => item.cityName !== name);
       console.log(factoredArray)
        this.List = factoredArray; 
        console.log(this.List)
        return this.List
    }

    mostNorth(){
        let max= Math.max.apply(Math, this.List.map((item) => { return item.cityLat; }));
        console.log(max)
        let northObj = this.List.find((item) => {return item.cityLat ===max });
        console.log(northObj)
        let northestCity = northObj.cityName
        return northestCity
    }

    mostSouth(){
        let min= Math.min.apply(Math, this.List.map((item) => { return item.cityLat; }));
        console.log(min)
        let southObj = this.List.find((item) => {return item.cityLat ===min });
        console.log(southObj)
        let southestCity = southObj.cityName
        return southestCity
    }

    totalPop(){
        let initialValue = 0;
        let total = this.List.reduce(
        (accumulator, item) => accumulator + item.cityPop
        ,initialValue
        );
        console.log(total)
        return total
    }
}
export default Community