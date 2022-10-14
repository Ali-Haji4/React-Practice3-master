import React from "react";
import memesData from "./memes.Data";

export default function Main() {

    // let [url, newUrl] = React.useState("");


    let [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImg: ""
        });

    let [allMemeImages, setAllMemeImages] = React.useState(memesData);  

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({...prevMeme, randomImg:url}))
        console.log(meme)
    }
  
    //ternerary practice

    const isGoingOut = true;
    
    // let answer = isGoingOut ? "yes" : "no";

    let [state, useState] = React.useState(false);

    function ToggleBool() {
        useState(state => !state)
    }
  
   //make the state
   //make the function that houses the change state
   //make it map to display it

   let [thingsArray, setThingsArray] = React.useState(["things1","things2"]);

   function addThings() {
    setThingsArray(prevThingsArray => [...prevThingsArray, `things ${prevThingsArray.length + 1}`])
   }

   let addedThings = thingsArray.map(things => <h1>{[things]}</h1>)

    return (<div className="MainContainer">

        <div className="input"> 
            <input className="textBox" type="text"></input>
            <input className="textBox" type="text"></input>
        </div>

        <div className="displayMeme">
            <button onClick={getMemeImage} className="memeButton">Get a New Meme Image </button>
        </div>

        <div className="memeContainer">
            <img className="memePicture" src={meme.randomImg}></img>
        </div>

        <div className="displayMeme">
            <button onClick={ToggleBool} className="memeButton">Test </button>
            <h1>hi {state ? "yes":"no"}</h1>
        </div>

        <div className="thingsDisplay">
            <button onClick={addThings} className="memeButton">Create new thing</button>
            {addedThings}
        </div>

    </div>)
}
