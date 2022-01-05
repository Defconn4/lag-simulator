import * as React from 'react';
import { TextareaAutosize } from "@mui/material";

function LagTextbox(props) {

    return(
        <div>
            <TextareaAutosize style={{ width: 800 }} minRows={10} >
            </TextareaAutosize>
        </div>
    );
}


export default LagTextbox;