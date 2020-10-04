
const onLed = () => {

    fetch('/onLed' , {
        method: 'POST'
    })  
        .then(result => console.log(result))
        .catch(err => console.log(err))
}

const offLed = () => {

    fetch('/offLed' , {
        method: 'POST'
    })  
        .then(result => console.log(result))
        .catch(err => console.log(err))
}