import { useState, useEffect } from "react";
import "./App.css";
import ButtonHigherLower from "./ButtonHigherLower.js";
import City from "./City.js";
import citiesData from "./readData.js";

function App() {
    const [score, setScore] = useState(0);

    const [city1, setCity1] = useState(getCity());
    const [city2, setCity2] = useState(getCity(city1));
    useEffect(() => {
        setCity2(getCity(city1));
    }, [city1]);

    const isHigher = city1.priceIndex > city2.priceIndex;

    function handleCallback(points) {
        if (points) {
            setScore((score) => (score += 1));
        } else {
            gameover();
        }
        setCity1(() => getCity());
    }

    function gameover() {
        alert(`Game over! You got ${score} in a row.`);
        setScore((score) => (score = 0));
    }

    function getCity(city = { name: "no name" }) {
        let selectedCity;
        // do loop for when chosing city2, so it is diff from city1
        do {
            let cityIndex = Math.floor(Math.random() * citiesData.length);
            selectedCity = citiesData[cityIndex];
        } while (city.name === selectedCity.name);
        return selectedCity;
    }
    return (
        <>
            <div className="titles">
                <h1>Higher or Lower</h1>
                <h2>Cities Cost of Living Edition!</h2>
            </div>
            <div>
                <p id="score">Score: {score}</p>
            </div>

            <p>Is the cost of living in...</p>
            <div className="row">
                <div class="column">
                    <City cityName={city1.name} />
                </div>
                <div className="column">
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
                </div>
                <div className="column">
                    <City cityName={city2.name} />
                </div>
            </div>
        </>
    );
}

export default App;
