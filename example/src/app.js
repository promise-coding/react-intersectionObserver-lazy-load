import React, { useState } from 'react'
import { render } from 'react-dom'
import LazyLoadComponent from '../../src/index'
import TestComponent from './TestCompoent';

const App = () => {
    const [ logList, setLogList ] = useState([]);

    function handleChange(entry, ref) {
        // console.log('component in view: ', entry, ref);
    }

    function showLogs(log) {
        setLogList([...logList, log]);
    }

    return (
        <div style={{ position: 'relative', left:'350px' }}>
            <div>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((value) => {
                    return <LazyLoadComponent key={value} onchange={handleChange}>
                        <TestComponent logCallBack={showLogs} id={value} />
                    </LazyLoadComponent>
                })}
            </div>
            <div style={{ position: 'fixed', width: '400px', height: '500px', left: '700px',top: '15px', padding: '20px', backgroundColor: 'rgb(185, 239, 255)', }}>
                {
                    logList.map((log, index) => {
                        return <div style={{marginBottom: '5px'}} key={`log-${index}`}>{log}</div>
                    })
                }
            </div>
        </div>

    );

};

render(<App />, document.getElementById('root'));
