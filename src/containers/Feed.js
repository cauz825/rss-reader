import React, {useState} from 'react'

function Feed() {

    const [articles, setArticles] = useState([])

    function handleClick() {
        fetch538()
    }

    function fetch538() {
        fetch('https://fivethirtyeight.com/sports/feed/')
        .then(resp => resp.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => parseData(data))
    }

    function parseData(data) {
        let articleArray = Array.from(data.querySelectorAll("item"))
        setArticles(articleArray)
    }

    function displayArticles(article) {
        let title = article.querySelector("title").innerHTML
        let artUrl = article.querySelector("link").innerHTML
        let pubDate = article.querySelector('pubDate').innerHTML
        return(
            <div>
                <a href={artUrl}><h4>{title}</h4></a>
                <p>{pubDate}</p>
            </div>
        )
    }
    
    return(    
        <div>
            <button onClick={handleClick}>Pull Feed (538)</button>
            <br></br>
            {articles 
            // ? console.log(articles[0])
            ? articles.map(article => displayArticles(article))
            : null}

            
        </div>     
    )
}

export default Feed