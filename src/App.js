import React from "react";
import NavBar from "./NavBar";
import Main from "./Main";
import boxes from "./otherExercises/boxes";
import Box from "./otherExercises/Box";
import Joke from "./otherExercises/Joke"
import jokesData from "./otherExercises/jokesData"
import Form from "./otherExercises/Form";
import WindowTracker from "./otherExercises/WindowTracker";

export default function App() {
    return (
        <div className="container">
        <NavBar />
        <Main />
        </div>
    )
}

//This is for the Form exercise---------------------------------------------------------------------------------------

// export default function App() {
    
//     const [formData, setFormData] = React.useState({
//         email: "",
//         password: "",
//         confirmedPassword: "",
//         isJoined: false
//      })

//      function handleChange(event) {
//         const {name, value, type, checked} = event.target;

//         setFormData(prevFormData => {return {
//             ...formData,
//             [name] : type === "checkbox" ? checked: value
//         }})


//      }

//     function handleSubmit(event) {
//         console.log(formData)
//         if (formData.password === formData.confirmedPassword) {
//             console.log("Succesfully signed up")
//             if (formData.isJoined == true) {
//                 console.log("Thanks for singing up for our newsletter!")
//             }
//         }
//         else {console.log("Passwords do not match")}

//         event.preventDefault()
//     }
    
//     return (
//         <div className="form-container">
//             <form className="form" onSubmit={handleSubmit}>
//                 <input 
//                     type="email" 
//                     placeholder="Email address"
//                     className="form--input"
//                     name="email"
//                     onChange={handleChange}
//                     value={formData.email}
//                 />
//                 <input 
//                     type="password" 
//                     placeholder="Password"
//                     className="form--input"
//                     name="password"
//                     onChange={handleChange}
//                     value={formData.password}
//                 />
//                 <input 
//                     type="password" 
//                     placeholder="Confirm password"
//                     className="form--input"
//                     name="confirmedPassword"
//                     onChange={handleChange}
//                     value={formData.confirmedPassword}
//                 />
                
//                 <div className="form--marketing">
//                     <input
//                         id="okayToEmail"
//                         type="checkbox"
//                         name="isJoined"
//                         onChange={handleChange}
//                         value={formData.isJoined}
//                     />
//                     <label htmlFor="okayToEmail">I want to join the newsletter</label>
//                 </div>
//                 <button 
//                     className="form--submit"
//                 >
//                     Sign up
//                 </button>
//             </form>
//         </div>
//     )
// }

//This is for the jokes exercise---------------------------------------------------------------------------------------

// export default function App() {

//     return (
//         <div>
//             <h1>Hello</h1>
//             <Form />
//         </div>
//     )
// }

// export default function App() {
//     const jokeElements = jokesData.map(joke => {
//         return (
//             <Joke 
//                 key={joke.id}
//                 setup={joke.setup} 
//                 punchline={joke.punchline} 
//             />
//         )
//     })
//     return (
//         <div>
//             {jokeElements}
//         </div>
        
//     )
// }

//This is for the boxes exercise----------------------------------------------------------------------------------------

// export default function App(props) {

//     function Toggle(id) {
//         console.log("cumming" + id)
//        useSquares(prevSquares => {
//         return prevSquares.map((square) => {
//             return square.id === id ? {...square, on: !square.on} : square;
//             })
//        })
//     }
//     const [squares, useSquares] = React.useState(boxes); //create a react state
//     const showBoxes = squares.map(squares => ( //create a box component while passing on keys/switchState/function/id
//         <Box 
//         key={squares.id} 
//         on={squares.on} 
//         toggle={Toggle} 
//         id={squares.id}
//         /> ));

//     return ( //Return statement
//         <div className="containerBoxes">
//             <h1>test</h1>
//             {showBoxes}
//         </div>
//     )
// }


//This is for the Window Tracker exercise----------------------------------------------------------------------------------

// export default function App() {

//     const [show, setShow] = React.useState(true);

//     function toggle() {
//         setShow(prevState => !prevState)
//         console.log(show);
//     }
//     return (
//         <div className="container">
//             <button onClick={toggle}>
//                 Toggle WindowTracker
//             </button>
//             {show && <WindowTracker />}
//         </div>
//     )
// }