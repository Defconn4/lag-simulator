import './App.css';
import MySlider from './MySlider';    // TODO: Remember to import new components ya dingus!
import LagButton from './LagButton';
import LagTextbox from './LagTextbox'
import { Box } from '@mui/system';

// Component = returns something to be rendered in the browser, typically JSX. 
function App() {
  return (
    <div style={{backgroundColor: "#B58A98"}}>
      <div className="App">
        <h1>Input Latency Simulator</h1>
        <p>Use the slider below to adjust for your desired latency:</p>
      </div>
      <div>
        <MySlider></MySlider>
      </div>
      <div>
        <Box sx = {{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexWrap: 'nowrap',
                  flexDirection: 'row'}}>
            <LagButton text = "Set to 0 ms"/>
            <LagButton text = "Set to 100 ms"/>
            <LagButton text = "Set to 250 ms"/>
            <LagButton text = "Set to 500 ms"/>
            <LagButton text = "Set to 1000 ms"/>
        </Box>
      </div>
      <Box sx = {{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexWrap: 'nowrap',
                  flexDirection: 'column'}}>
        <h4>Insert text in box below see the effects of lag set above:</h4>
        <LagTextbox></LagTextbox>
      </Box>
    </div>
  );
}

export default App;
