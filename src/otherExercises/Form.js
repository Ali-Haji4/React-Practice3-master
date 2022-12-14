import React from "react";

export default function Form(){
    const [formData, setFormData] = React.useState(
        {firstName: "",
         lastName: "",
         email: "",
         comments: "",
         isFriendly: true,
         employment: ""});

    console.log(formData);
    function handleChange(event) {
        setFormData(prevForm => {
            const {name, value, type, checked} = event.target;
            return {
                  ...prevForm,
                 [name]: type === "checkbox" ? checked :value
                  }
                })
    }

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
                />
             <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
                />
             <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
                />
                <textarea 
                value={formData.comments} 
                placeholder="Comments" 
                name="comments" 
                onChange={handleChange}/>
             <input
                type="checkbox"
                id="isFriendly"
                onChange={handleChange}
                name="isFriendly"
                checked={formData.isFriendly}
                />
            <label htmlFor="isFriendly">Are you friendly?</label>

            <fieldset>
                <legend>Current employment status</legend>

                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    onChange={handleChange}
                />
                <label htmlFor="employment">Unemployed</label>
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    onChange={handleChange}
                />
                <label htmlFor="employment">Part-time</label>
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>

            </fieldset>

           
        </form>
    )
}