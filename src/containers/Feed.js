import React, {useState, useEffect} from 'react'
import Politics from '../components/Politics'
import Sports from '../components/Sports'
import Tech from '../components/Tech'
import News from '../components/News'

function Feed() {

    const [fiveThirtyEightSportsArticles, setFiveThirtyEightSports] = useState([])
    const [espnNflArticles, setEspnNfl] = useState([])
    const [fiveThirtyEightPoliticsArticles, setFiveThirtyEightPolitics] = useState([])

    useEffect(() => {
        fetchFiveThirtyEightSports();
        fetchEspnNfl();
        fetchFiveThirtyEightPolitics();
    }, [])

    //Sports
    function fetchFiveThirtyEightSports() {
        fetch('https://fivethirtyeight.com/sports/feed/')
        .then(resp => resp.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => parseFiveThirtyEightSports(data))
    }

    function fetchEspnNfl() {
        fetch('https://www.espn.com/espn/rss/nfl/news')
        .then(resp => resp.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => parseEspnNfl(data))
    }

    function parseFiveThirtyEightSports(data) {
        let articleArray = Array.from(data.querySelectorAll("item"))
        setFiveThirtyEightSports(articleArray)
    }

    function parseEspnNfl(data) {
        let articleArray = Array.from(data.querySelectorAll("item"))
        setEspnNfl(articleArray)
    }

    //Politics
    function fetchFiveThirtyEightPolitics() {
        fetch('https://fivethirtyeight.com/politics/feed/')
        .then(resp => resp.text())
        .then(str => new window.DOMParser().parseFromString(str,"text/xml"))
        .then(data => parseFiveThirtyEightPolitics(data))
    }

    function parseFiveThirtyEightPolitics(data) {
        let articleArray = Array.from(data.querySelectorAll("item"))
        setFiveThirtyEightPolitics(articleArray)
    }

    return(    
        <div>
            <h4>Sports</h4>
                <Sports 
                    fiveThirtyEight={fiveThirtyEightSportsArticles}
                    espnNfl={espnNflArticles} />
            <h4>Politics</h4>
                <Politics 
                    fiveThirtyEight={fiveThirtyEightPoliticsArticles} />
            <h4>Tech</h4>
                <Tech />
            <h4>News</h4>
                <News />
        </div>     
    )
}

export default Feed