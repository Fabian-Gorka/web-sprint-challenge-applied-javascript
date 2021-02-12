
import axios from 'axios';

const Card = (article) => {
 console.log(article.headline);
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const cardDiv = document.createElement('div')
  const headLineTxt = document.createElement('div')
  const authorDiv = document.createElement('div')
  const imgContainerDiv = document.createElement('div')
  const image = document.createElement('img')
  const span = document.createElement('span')
  const head1 = document.createElement('h1') 

  cardDiv.classList.add('card')
  headLineTxt.classList.add('headline')
  authorDiv.classList.add('author')
  imgContainerDiv.classList.add('img-container')

 
  cardDiv.appendChild(headLineTxt);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgContainerDiv);
  imgContainerDiv.appendChild(image);
  authorDiv.appendChild(span);
  headLineTxt.appendChild(head1)

  head1.innerHTML = article.headline;
  image.setAttribute("src", article.authorPhoto);
  span.innerHTML = `By ${article.authorName}`;


  cardDiv.addEventListener('click', () => {
    console.log(headLineTxt)
  });

  return cardDiv;

}



const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
 
  let artGen = document.querySelector(selector);
  
  axios
    .get(`https://lambda-times-api.herokuapp.com/articles`)
    .then((res) => {
      console.log(res.data.articles);
      const keys = Object.keys(res.data.articles) 
      keys.forEach(key => {
        //console.log(article);
        //console.log(Card(article));
        res.data.articles[key].forEach(article =>{ 
          artGen.appendChild(Card(article));
        })
        
       })
      })

    // .catch((err) => {
    //   console.log(err)
    // })
    console.log(artGen);
    return artGen;
}



export { Card, cardAppender } 