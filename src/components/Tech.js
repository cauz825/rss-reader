import React from 'react'

function Tech(props) {
    
    function displayVerge(article) {
        let title = article.querySelector('title').innerHTML
        let artUrl = article.querySelector('id').innerHTML
        return(
            <div>
                <a href={artUrl}><p>{title}</p></a>
            </div>
        )
    }
    
    return(
        <div>
            <h5>The Verge</h5>
            {props.verge
            ? props.verge.slice(0,5).map(article => displayVerge(article))
            : null}
        </div>
    )
}

export default Tech