import React from "react"

export default function WindowTracker() {

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    //The below method is fine but it will cause memory leak when the window tracker is not toggled because it will still work in the background
    React.useEffect(() => {
        window.addEventListener("resize", function() {
            setWindowWidth(window.innerWidth)
        })
    }, [])

    //This way we can avoid the memory leak
    React.useEffect(() => {

        function watchWidth() {
            console.log("Setting up....")
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener("resize", watchWidth)

        return function() {   //cleaning up is not always needed but in our scenario it is needed
            console.log("Cleaning up....")
            window.removeEventListener("resize", watchWidth)
        }
    }, [])
    return (
        <h1>Window width: {windowWidth}</h1>
    )
}
