import React from 'react'

function News(props) {
    
    function displayNyt(article) {
        let title = article.querySelector('title').innerHTML
        let artUrl = article.querySelector('link').innerHTML
        return(
            <div>
                <a href={artUrl}><p>{title}</p></a>
            </div>
        )
    }

    return(
        <div>
            <h5>New York Times</h5>
            {props.nyt
            ? props.nyt.slice(0,5).map(article => displayNyt(article))
            : null}
        </div>
    )
}

export default News