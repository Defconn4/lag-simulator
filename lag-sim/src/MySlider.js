import * as React from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import img from './High_latency_warning_BF4.jpg'

const marks = [
    {
        value: 0,
        label: '0 ms'
    },
    {
        value: 100,
        label: '100 ms'
    },
    {
        value: 250,
        label: '250 ms'
    },
    {
        value: 500,
        label: '500 ms'
    },
    {
        value: 1000,
        label: '1000 ms'
    }
];

function MySlider(props) {

    // value is the state's current value
    // setValue is the function used to change the state's current value
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Box sx = {{display: 'flex', justifyContent: 'center'}}>
                <Slider
                    style={{ maxWidth: 900 }}
                    size="medium"
                    min={0}
                    max={1000}
                    defaultValue={20}
                    onChange={handleChange}
                    value={props.value}
                    marks={marks}
                />
            </Box>
            <p style={{         // Setting inline JS styles
                fontSize: '22px',
                fontweight: 'bold',
                fontFamily: 'arial',
                color: '#DFFF00',
                textAlign: 'center'}}>
            Current Lag: {value} ms
            </p>
        </div>
    );
}

// Make function usable in other files.
export default MySlider;