const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', "utf-8", (error, result) => {
    if (error) {
        console.log(error)
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (error, result) => {
        if (error) {
            console.log(error)
        }
        const second = result;
        writeFile('./content/result-async.txt',
            `Here is the only writeFile result:  ${first} and ${second}`,
            (error, result) => {
                if (error) {
                    console.log(error)
                }
                console.log(result)
            }
        )
    })
})

