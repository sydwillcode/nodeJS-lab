const rp = require('request-promise');
const fs = require('fs');

// let redditPath = path.join(__dirname, "../popluar-articles.json");

// request('https://reddit.com/r/popular.json', (err, res, body) => {
//     if(err) console.log(err);
//     JSON.parse(body).data.children.forEach(item => {
//         console.log(item.data.title)
//     });
//     fs.writeFile(redditPath, res.body, err => {
//         if(err) console.log(err);
//     });

// })

rp('https://reddit.com/r/popular.json')
.then(res => JSON.parse(res))
.then(data => {
    let articleArr = [];
   data.data.children.forEach(article => {
       let obj = {
           title: article.data.title,
           url: article.data.url,
           author:article.data.author
       }
       articleArr.push(obj);
    });
    fs.writeFile("./popular-articles.json", JSON.stringify(articleArr), (err) => {
        if(err) throw err;
        console.log("The file has been saved")
    })
})
.catch(err => console.log(err))