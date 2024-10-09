import { useState } from "react";
import "./Quotesgenerator.css";


const Quotesgenerator = () => {

    let quotes = [];

    async function loadQuotes () {
        const respones = await fetch("/data.json");
        quotes = await respones.json();
    }

    loadQuotes();
    const [quote , setQuote] = useState(
        {
            "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
            "author": "Thomas Edison, type.fit"
          }
    );

    const clickToChange = () => {
        const select = quotes[Math.floor(Math.random() * 10)];
        setQuote(select);
    }

  return (
    <div className="container">
        <div className="heading">
            <h1>Quotes Generator:</h1>
        </div>
        <div className="quotes">
            <h2> {quote.text} </h2>
        </div>
        <div className="line"></div>
        <div className="bottom">
            <div className="author">
                <p> -{quote.author.split(",")[0]} </p>
            </div>
            <button onClick={clickToChange} >Next</button>
            <a href="https://www.instagram.com/immucoder/">Developer</a>
        </div>
    </div>
  )
}

export default Quotesgenerator