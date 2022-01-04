import * as React from 'react';
import { TextareaAutosize } from "@mui/material";

function LagTextbox(props) {

    const [value, setValue] = React.useState("");

    const onChange = (event) => {
      setValue(event.target.value);
    };

    return(
        <div>
            <TextareaAutosize style={{ width: 800 }} minRows={10} onChange={onChange}>
            </TextareaAutosize>
        </div>
    );
}


export default LagTextbox;