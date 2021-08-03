// two objects HTMLElement(parent) and HTMLSelectElement(dropdown list)


function HTMLElement(){ //constructor of parent
    this.click = function() {
        return "clicked";
    }
}
HTMLElement.prototype.focus = function() {  return "focused";}



const e = new HTMLElement();
console.log(e);
 // e should have a function click in the child and then a function "focus" in the prototype
 
console.log(e.click());
console.log(e.focus());




function HTMLSelectElement(array){ //constructor of child also i can use array=[] instead of the or 

    // HTMLElement.call(this);

    this.array = array || [];

    this.addItem = function(item){ this.array.push(item);}
    this.removeItem = function(item){ this.array.splice( this.array.indexOf(item) ,1 );  }

}

HTMLSelectElement.prototype = new HTMLElement(); // instead of Object.protot... because using it we couldnt see the click method but now we can
HTMLSelectElement.prototype.constructor = HTMLSelectElement;



const s = new HTMLSelectElement (); // can pass an array or nothing
console.log(s);
// s should have 2 functions in the child addItem and removeItem and an array items 
s.addItem('1');
s.addItem('2');
s.removeItem('2');
console.log(s);

