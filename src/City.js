import "./City.css";

function City(props) {
    const handleClick = () => {
        console.log("clicked");
        if (props.answer) {
            props.addPoints(true);
        } else {
            props.addPoints(false);
        }
    };
    return (
        <button className="city" onClick={handleClick}>
            {props.cityName} <br /> {props.cityCountry}
        </button>
    );
}

export default City;
