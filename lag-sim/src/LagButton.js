import { Box, Button } from "@mui/material";
import * as React from 'react';

function LagButton (props) {

    function handleClick() {
        console.log(props.text)
    }

    return(
        <div>
            <Box sx = {{
                p: 0.5
            }}>
                <Button variant="outlined">
                    <p>{props.text}</p>
                </Button>
            </Box>
        </div>
    );
}

export default LagButton;