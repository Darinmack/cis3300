/*
let  age=24
let result = (age>25) ? "Older man" : "Young man";
 console.log(result);        
*/

 let x=4
 let number = (x>5) ? "Number is greater than 5" : "Number is less than 5";
 console.log(number);

 console.log(" ");

 const shoes = {
    brand:'Jordan',
    color: 'Black and red',
    Size: '12',
    Year: '2005',
 };

for(let key in shoes)
     {
        if(shoes.hasOwnProperty(key))
        {
         console.log(key + ":" + shoes[key]);
        }
    }
 
    console.log(" ");
 const numbers = [1,2,3,4,5];
 const map1= numbers.map((x)=> x**2)
 console.log(numbers);
 console.log("  ");
 console.log(map1);

 /*
 function htmlDOMChange()
 {
   document.getElementById("click").textContent=`DIFFERENT TEXT NOW!!`;
 }
document.getElementById("click").onlick = htmlDOMChange
*/
document.getElementById("clicks").addEventListener(`click`, function() {
    document.getElementById("clicks").textContent=`DIFFERENT TEXT NOW!!`;
})
 

document.getElementById("fun").addEventListener(`click`,function() {
    document.getElementById("fun").style.color ="blue"
})

document.getElementById("add").addEventListener(`click`, function(){
    const theDiv = document.getElementById("diff");
    const content = document.createElement(`p`)
    content.textContent= "This is some appended material text that appears after you clicked the second button";
    theDiv.appendChild(content);
})
