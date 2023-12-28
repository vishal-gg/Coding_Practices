const promise1 = fetch('https://jsonplaceholder.typicode.com/users/1')
const promise2 = fetch('https://jsonplaceholder.typicode.com/users/2')
const promise3 = fetch('https://jsonplaceholder.typicode.com/users/3')
const promise4 = fetch('https://jsonplaceholder.typicode.com/users/4')
const promise5 = fetch('https://jsonplaceholder.typicode.com/users/5')
  
const results = Promise.all([promise1, promise2, promise3, promise4, promise5])

const handleResults = async (results) => {
    try {
        const res = await results;

        // Promise.all method
        const final = await Promise.all(res.map(res => res.json()))
        console.log(final)


        // // for...of method
        // let list = []
        // for(const someData of res) {
        //     const jsonData = await someData.json()
        //     list.push(jsonData)
        // }
        // console.log(list)


    } catch (err) {
        console.log(err)
    }
}

console.log(handleResults(results))
