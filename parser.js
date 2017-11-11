var fs = require("fs");
var userId, userLink, dateTime, userText;
const cheerio = require("cheerio");

var inputFile = "test.html";
var outputFile = "result.txt";
htmlText = fs.readFileSync(inputFile, "utf-8");
const $ = cheerio.load(htmlText);

var regExp = /\n|  /g;
var editedText;
var i=0;


fs.appendFileSync(outputFile, "N\t\t|\t\t\tUser Id\t\t\t\t|\t\t\tUser Link\t\t\t\t|\t\t\tPost Time\t\t\t\n\n")
try {
    $("._307z").each(function (index, element) {
        userId = $(".clearfix a", element).attr("data-hovercard");
        if (userId.indexOf("user") != -1) {
            i++;
            userLink = $(".clearfix a", element).attr("href");
            dateTime = $("._42ef abbr", element).attr("title");
            fs.appendFileSync(outputFile, i + "\t\t|\t" + userId + "\t|\t" + userLink + "\t|\t" + dateTime + "\n");

            userText = $("._4rmu ._5-jo", element).text();
            editedText = userText.replace(regExp, "")+"\n";
            fs.appendFileSync(outputFile, editedText);
        }
    })
}
catch (err) {
    if (err == 1) {
        console.log("error occured during writing main data");
        return;
    }
    if (err == 2) {
        console.log("error occured during writing user text");
        return;
    }
}