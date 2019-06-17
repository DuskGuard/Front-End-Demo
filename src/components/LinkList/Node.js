
class Node{
    constructor(SubjectName,InitalAmount){
        this.next= null;
        this.prev= null;
        this.subject=SubjectName;
        this.amount=Number(InitalAmount);
    } 
    show(){
        let display= String(this.subject+" "+this.amount+"$")
        return display
    }
    showAmount(){
        let display = this.amount;
        return display;
    }
}
export default Node