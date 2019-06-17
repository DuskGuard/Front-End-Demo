
import AccountPOJO from './AccountPOJO'

class AccountsPOJO {
    constructor() {       
       this.arrControl = [];
       this.counter = 0;
    }

    addAccounts(balance, name) {
       const tempAccount = new AccountPOJO(balance, name);
       tempAccount.id = this.counter;
       this.arrControl.push(tempAccount);
       this.counter++;
    }

    
    deleteAccount = (name) => {
        console.log(this.arrControl)
       const tempArray = this.arrControl.filter(item => item.name !== name);
       console.log(tempArray)
        this.arrControl = tempArray; 
        console.log(this.arrControl)
    }

    minAccount = () => {
   
        let tempArray = []; 
        
        for(let i = 0; i<this.arrControl.length; i++) { 
            tempArray.push(this.arrControl[i].balance);  
        }
 
        const minValue = Math.min.apply(Math, tempArray);
        console.log("This is our min value:", minValue)

        return Number(minValue);
    }

    maxAccount = () => {
        let tempArray = []; 
        
        for(let i = 0; i<this.arrControl.length; i++) { 
            tempArray.push(this.arrControl[i].balance);  
        }

        const maxValue = Math.max.apply(Math, tempArray);
        console.log("This is our Max value:", maxValue)

        return Number(maxValue);
    }

    totalAccount = () => {
        let tempTotal = 0;

        for(let i = 0; i<this.arrControl.length; i++) { 
        //    tempTotal = tempTotal + (this.arrControl[i].balance);
        tempTotal += this.arrControl[i].balance;
        }
        
        console.log("This is our tempTotal:", tempTotal);
        return Number(tempTotal);
    }

}

export default AccountsPOJO;

