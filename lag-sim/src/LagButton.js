import { Button } from "@mui/material";

function LagButton (props) {

    function handleClick() {
        console.log(props.text)
    }

    return(
        <div>
            <Button onClick={handleClick}>
                <p>{props.text}</p>
            </Button>
        </div>
    );
}

export default LagButton;