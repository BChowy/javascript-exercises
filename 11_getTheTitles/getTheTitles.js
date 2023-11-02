const getTheTitles = function(list) {
    let books = [];
list.forEach(element => {
    books.push(element.title);
});

return books;

};

// Do not edit below this line
module.exports = getTheTitles;
