const rp = require("request-promise"),
  path = require("path"),
  fs = require("fs");

rp("https://reddit.com/r/popular.json")
  .then((res) => JSON.parse(res))
  .then((data) => {
    data.data.children.forEach((article) => {
      if (path.extname(article.data.url) === ".jpg") {
        rp(article.data.url)
        .then(res => {
            fs.appendFile(`./downloads/${article.data.id}.jpg`, res, "base64", (err) => {
                if(err) throw err; 
                console.log('The data to append was appended to file');
            })
        });
      }
    });
  })
  .catch((err) => console.log(err));
