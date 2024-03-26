import { useState } from "react";
import "./App.css";
import ButtonHigherLower from "./ButtonHigherLower.js";
import City from "./City.js";
import citiesData from "./readData.js";

function App() {
    const [score, setScore] = useState(0);

    const handleCallback = (points) => {
        if (points) {
            setScore((score) => (score += 1));
        } else {
            gameover();
        }
    };

    const gameover = () => {
        alert(`Game over! You got ${score} in a row.`);
        setScore((score) => (score = 0));
    };

    const city1Index = Math.floor(Math.random() * citiesData.length);
    let city2Index;

    do {
        city2Index = Math.floor(Math.random() * citiesData.length);
    } while (city1Index === city2Index);

    const city1 = citiesData[city1Index];
    const city2 = citiesData[city2Index];

    const isHigher = parseInt(city1[2]) > parseInt(city2[2]);

    return (
        <>
            <h1>Higher of Lower</h1>
            <h2>Cities Cost of Living Edition!</h2>
            <p id="score">Score: {score}</p>
            <p>Is</p>
            <City cityName={city1[1]} />
            <ButtonHigherLower
                text="higher"
                answer={isHigher}
                addPoints={handleCallback}
            />
            <span> or </span>
            <ButtonHigherLower
                text="lower"
                answer={!isHigher}
                addPoints={handleCallback}
            />
            <p>than</p>
            <City cityName={city2[1]} />
        </>
    );
}

export default App;
