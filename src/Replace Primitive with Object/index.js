class Order{
    constructor(data){
        this._priority= new Priority(data._priority);
        // other fields
    }
    get priority(){
        return this._priority.toString();
    }
    set priority(_priority){
        this._priority._value = _priority;
    }
}

class Priority{
    constructor(_value){
        this._value = _value;
    }
    set value(_value){
        this._value = _value;
    }
    toString(){
        return this._value;
    }
    static getValidateValues(){
        return [];
    }
    get index(){

    }
    higherThan(other){
        
    }
    
}

const orders = [];
orders.push(new Order({_priority: 'rush'}));
orders.push(new Order({_priority: 'low'}));
orders.push(new Order({_priority: 'common'}));
orders.push(new Order({_priority: 'high'}));

// console.log(orders);
const highPriorityCount = orders.filter(o => "high" === o.priority || "rush" === o.priority).length;
console.log(highPriorityCount);