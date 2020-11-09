import React from 'react'

function Sports(props) {
    
    function displayFiveThirtyEight(article) {
        let title = article.querySelector('title').innerHTML
        let artUrl = article.querySelector('link').innerHTML
        return(
            <div>
                <a href={artUrl}><p>{title}</p></a>
            </div>
        )
    }

    function displayEspn(article) {
        let title = article.querySelector('title').textContent
        let artUrl = article.querySelector('link').textContent
        return(
            <div>
                <a href={artUrl}><p>{title}</p></a>
            </div>
        )
    }
    
    return(
        <div>
            <h5>FiveThirtyEight : Sports</h5>
            {props.fiveThirtyEight
            ? props.fiveThirtyEight.slice(0,5).map(article => displayFiveThirtyEight(article))
            : null}
            <h5>ESPN - NFL</h5>
            {props.espnNfl
            ? props.espnNfl.slice(0,5).map(article => displayEspn(article))
            : null}
        </div>
    )
}

export default Sports