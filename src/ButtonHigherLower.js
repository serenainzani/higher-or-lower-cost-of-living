function ButtonHigherLower(props) {
    const handleClick = () => {
        console.log("clicked");
        if (props.answer) {
            props.addPoints(true);
        } else {
            props.addPoints(false);
        }
    };
    return <button onClick={handleClick}>{props.text}</button>;
}

export default ButtonHigherLower;
