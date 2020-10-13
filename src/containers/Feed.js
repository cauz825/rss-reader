import React, {useState} from 'react'

function Feed() {

    const [articles, setArticles] = useState([])

    
    function handleClick() {
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
        return(<h4>{title}</h4>)
    }
    
    return(    
        <div>
            <button onClick={handleClick}>Pull Feed (ESPN)</button>
            <br></br>
            {articles 
            ? articles.map(article => displayArticles(article))
            : null}

            
        </div>     
    )
}

export default Feed