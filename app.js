// function prom(a,b){
//     return new Promise(function(resolve,reject){
//         console.log("Please wait");
//         var c = a / b;
//         setTimeout(() => {
//             if(a,b)
//             {
//                 resolve('Your answer is: ${c}');
//             }
//             else
//             {
//                 reject("your answer is failed")
//             }
            
//         }, 3000);
//     })
// }
// prom(10,3).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// });




// Initialize the news api parameters
let source = 'bbc-news ';
let apiKey='242cd0b1b8d54a7b8f3b90b1795b7196'

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/everything?q=tesla&from=2022-08-22&s${source}&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index+1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()


