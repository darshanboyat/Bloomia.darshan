import { Switch } from 'antd';
import React from 'react';
const App = ({setToggleSwitch}) => {
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
        setToggleSwitch(checked)
    };
    return (<Switch size="small" onChange={onChange} />)
}
export default App;