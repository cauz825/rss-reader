import React from 'react'

function Politics(props) {
    function displayFiveThirtyEight(article) {
        let title = article.querySelector('title').innerHTML
        let artUrl = article.querySelector('link').innerHTML
        return(
            <div>
                <a href={artUrl}><p>{title}</p></a>
            </div>
        )
    }

    function displayPolitico(article) {
        let title = article.querySelector('title').innerHTML
        let artUrl = article.querySelector('link').innerHTML
        return(
            <div>
                <a href={artUrl}><p>{title}</p></a>
            </div>
        )
    }

    return (
        <div>
            <h5>FiveThirtyEight - Politics</h5>
                {props.fiveThirtyEight
                ? props.fiveThirtyEight.slice(0,5).map(article => displayFiveThirtyEight(article))
                : null}
            <h5>Politico</h5>
                {props.politico
                ? props.politico.slice(0,5).map(article => displayPolitico(article))
                : null}
        </div>
    )
}

export default Politics