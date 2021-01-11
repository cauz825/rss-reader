import React, {useState, useEffect} from 'react'
import Politics from '../components/Politics'
import Sports from '../components/Sports'
import Tech from '../components/Tech'
import News from '../components/News'

function Feed() {

    const [fiveThirtyEightSportsArticles, setFiveThirtyEightSports] = useState([])
    const [espnNflArticles, setEspnNfl] = useState([])
    const [fiveThirtyEightPoliticsArticles, setFiveThirtyEightPolitics] = useState([])
    const [vergeArticles, setVerge] = useState([])
    const [nytArticles, setNyt] = useState([])
    const [politicoArticles, setPolitico] = useState([])

    useEffect(() => {
        fetchSports();
        fetchTech();
        fetchNews();
    }, [])

    function fetchSports() {
        fetchFiveThirtyEightSports();
        fetchEspnNfl();
    }

    function fetchTech() {
        fetchVerge();
    }

    function fetchNews() {
        fetchNyt();
    }

    function parseData(data) {
        let articleArray = Array.from(data.querySelectorAll("item"))
        let siteChannel = data.querySelector("channel")
        let siteTitle = siteChannel.querySelector("title").innerHTML
        if(siteTitle === "Sports – FiveThirtyEight")
            setFiveThirtyEightSports(articleArray)
        if(siteTitle === "<![CDATA[www.espn.com - NFL]]>")
            setEspnNfl(articleArray)
        if(siteTitle === "NYT &gt; Top Stories")
            setNyt(articleArray)
    }

    //Sports
    function fetchFiveThirtyEightSports() {
        fetch('https://fivethirtyeight.com/sports/feed/')
        .then(resp => resp.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => parseData(data))
    }

    function fetchEspnNfl() {
        fetch('https://www.espn.com/espn/rss/nfl/news')
        .then(resp => resp.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => parseData(data))
    }

    //Tech
    function fetchVerge() {
        fetch('https://www.theverge.com/tech/rss/index.xml')
        .then(resp => resp.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => parseVerge(data))
    }

    function parseVerge(data) {
        let articleArray = Array.from(data.querySelectorAll("entry"))
        setVerge(articleArray)
    }

    //News
    function fetchNyt() {
        fetch('https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml')
        .then(resp => resp.text())
        .then(str => new window.DOMParser().parseFromString(str,'text/xml'))
        .then(data => parseData(data))
    }

    return(    
        <div>
            <h4>Sports</h4>
                <Sports 
                    fiveThirtyEight={fiveThirtyEightSportsArticles}
                    espnNfl={espnNflArticles} />
            <h4>Politics</h4>
                <Politics 
                    fiveThirtyEight={fiveThirtyEightPoliticsArticles}
                    politico={politicoArticles} />
            <h4>Tech</h4>
                <Tech 
                    verge={vergeArticles} />
            <h4>News</h4>
                <News nyt={nytArticles} />
        </div>     
    )
}

export default Feed;