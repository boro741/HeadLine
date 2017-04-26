var $hinduElem = $('#headline-articles');
var hindu_Url = 'https://newsapi.org/v1/articles?source=the-hindu&sortBy=top&apiKey=51a3c994ba7d4ff2ad18b20e69848b25';

$.getJSON(hindu_Url, function(data){
    
    hindu_articles = data.articles;
    
    for(var i=0; i < hindu_articles.length; i++) {
        var article = hindu_articles[i];
        $hinduElem.append('<li class="article">'+
                          '<a href="' + article.url + '">' + article.title + '</a>' + 
                         // '<img src="'+article.urlToImage+'"/>'+
                          '<p>' + article.description + '</p>' + '</li>');
    }
})