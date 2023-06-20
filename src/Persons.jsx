import './App.css'
import { useState } from 'react'

function Person(prop) {
    const [age, setAge] = useState(prop.age);
    const [toggle, setToggle] = useState(true)

    const increment = () => {
        setAge(age + 1)
    }

    const toggleBtn = () => {
        setToggle(!toggle)
    }

    const person = {
        // username: 'Efosa',
        // age: 45,
        image: "https://i.imgur.com/MK3eW3As.jpg"
    }
    // const doSomething = () => {
    //     console.log('do anything')
    // }
    
    return (
        <div className="person-object">
            <h3>{prop.username}</h3>
            <img src={person.image} alt="person image" />
            <p>{age}</p>

            <h3 style={{color: 'blue'}}>About</h3>
            <p style={toggle === false ? {display: 'none'} : {display: 'block'}}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam minima exercitationem maiores animi perferendis!
            </p>

            <button onClick={increment}>Increase Age</button>
            <button onClick={toggleBtn}>description</button>
        </div>
    )
}

export default Person


// const {colour, brand, model, startEngine } = {
//     colour: 'blue',
//     brand: 'Benz', 
//     model:'s600',
//     startEngine: () => {
//         console.log('Engine Started')
//     }
// }    

// console.log(brand);
// console.log(model);
// console.log(colour);
// console.log(startEngine());