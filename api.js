

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "fc37132631004868b3c51dde21f944cb",
  'q': " ",
  'begin_date': " ",
  'end_date': " "
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});
// var searchDiv = $("<div class='search'>");

// searchDiv.append(search);



var search = response.q;

var startY = response.begin_date;

var endY = response.end_date;

