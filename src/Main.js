import React from "react";

export default function Main() {

    let [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg"
        });

    let [allMemeImages, setAllMemeImages] = React.useState([]);  

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length);
        const url = allMemeImages[randomNumber].url
        setMeme(prevMeme => ({...prevMeme, randomImg:url}))
        console.log(meme)
    }
  
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes ))
        }, []) //since the second argument is empty, it will only run once
  
    // Adding things to an array using state and displaying it on screen----------
   //make the state
   //make the function that houses the change state
   //make it map to display it

   //let [thingsArray, setThingsArray] = React.useState(["things1","things2"]);

   //function addThings() {
   //setThingsArray(prevThingsArray => [...prevThingsArray, `things ${prevThingsArray.length + 1}`])
   //}

   //let addedThings = thingsArray.map(things => <h1>{[things]}</h1>)

   function handleChange(event) {
        const {name, value} = event.target;
        setMeme(prevMeme => {return {...prevMeme, [name]: value}})
   }
   
    return (<div className="MainContainer">
     
            <div className="input"> 
                <input className="textBox" type="text" value={meme.topText} onChange={handleChange} name="topText"/>
                <input className="textBox" type="text" value={meme.bottomText} onChange={handleChange} name="bottomText"/>
            </div>

            <div className="displayMeme">
                <button onClick={getMemeImage} className="memeButton">Get a New Meme Image </button>
            </div>
      

        <div className="memeContainer">
            <img className="memePicture" src={meme.randomImg}></img>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>

        {/* <div className="thingsDisplay">
            <button onClick={addThings} className="memeButton">Create new thing</button>
            {addedThings}
        </div> */}

    </div>)
}
