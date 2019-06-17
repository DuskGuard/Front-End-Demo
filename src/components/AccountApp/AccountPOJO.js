class AccountPOJO {
    constructor(initialBalance, accountName) {
        this.balance = initialBalance;
        this.name = accountName;
    }

    deposit(dollar) {
        this.balance = this.balance + dollar;
    }

    withdraw(dollar) {
        if (typeof(dollar) === "number") {
            console.log(typeof(dollar));
            if (dollar <= this.balance && dollar > 0) {
                this.balance = this.balance - dollar;
            }
        }    
    }

    getBalance() {
        return this.balance;
    }

    renameAccount(newname){
        let newName=newname;
        this.name= newName;
        return this.name
    }

}

export default AccountPOJO;


