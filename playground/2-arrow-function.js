// const squareData = function(x){
//     return x*x
// }

// const cube = (x) =>{
//     return x*x*x
// }

// const square = (x) => x*x

// console.log(square(3))

const event ={
    name : "Birthday Party",
    guestList : ['Bijon','Eshita','Shakil'],
    printGuestList(){
        console.log("Welcome to the "+this.name)
        this.guestList.forEach((guest)=>{
            console.log(guest+" has attended!")
        })
    }
}
event.printGuestList()