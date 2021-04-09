const articles = [
    { price: 0.97, counter: 0, htmlId: 'apple' },
    { price: 7.98, counter: 0, htmlId: 'cherry' },
    { price: 1.03, counter: 0, htmlId: 'banana' }
];

articles.forEach(function(article){
    article.html = document.getElementById('counter')+article.htmlId;
    const moreButton = document.getElementById('more')+article.htmlId;
    const lessButton = document.getElementById('less')+article.htmlId;
    moreButton.addEventListener('click',function(){ more(article) });
    lessButton.addEventListener('click',function(){ less(article) });
})

function total(){
    let total = 0; 
    articles.forEach(function(article){
        total = total + article.price*article.counter;
    })
    document.getElementById('total').innerHTML = total +' €';  
}

function more(article){
    article.counter++;
        if(article.counter==1){
        article.html.innerHTML=article.counter+' article';
        }
        else{
            article.html.innerHTML=article.counter+' articles';  
        }
        total();
}


function less(){
    article.counter--;
    if(article.counter<=0){
        article.counter=0 ;
        article.html.innerHTML=article.counter+' article';
    }
    else if(counterValueApple== 1){
        article.html.innerHTML=article.counter+' article';
    }
    else{
        article.html.innerHTML=article.counter+' articles';
    }
    total();
}




