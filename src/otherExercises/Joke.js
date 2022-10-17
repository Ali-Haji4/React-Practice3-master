import React from "react"

export default function Joke(props) {
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */
 
    let [isShown = false, setIsShown] = React.useState(false);

    function toggle() {
        setIsShown (prevState => !prevState);
        console.log(isShown)
    }

    let buttonTxt = isShown ? "hide":"Show Punchline";
    
    return (
        <div>
          
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button type="button" onClick={toggle}>{buttonTxt}</button>
            <hr />
        </div>
    )
}