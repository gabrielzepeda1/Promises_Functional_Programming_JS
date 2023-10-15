require('isomorphic-fetch')

fetch('https://jsonplaceholder.typicode.com/users')
    .then(x => x.json()) 
    .then(x => console.log(x))


// Promises help handle errors in one place. 

// $.get('https://jsonplaceholder.typicode.com/users', (res) => { 
//     if(err) throw err
//     $.get('https://jsonplaceholder.typicode.com/posts', (res) => { 
//         if (err) throw (err)
//     })
// })