// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


function updatedTime (){
    const currentDate = new Date();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    return `${addingZero(hour)}:${addingZero(minute)}:${addingZero(seconds)}`

    function addingZero(n){
        return n < 10 ? `0${n}` : n
    }
}

// console.log(formattedWay);

setInterval(() => {
    console.log(updatedTime());
}, 1000)