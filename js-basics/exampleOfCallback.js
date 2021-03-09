console.log('start');

function getData(email, callback){
    setTimeout(() => {
        console.log('we are got the Data');
        callback( {userEmail: email})
    }, 3333)
}

const user = getData('vasya@email.com', user => {
    console.log(user)
});

console.log('end');