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
    return <button onClick={handleClick}>{props.cityName}</button>;
}

export default City;
