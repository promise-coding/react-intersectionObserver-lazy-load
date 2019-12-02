import React from 'react'
import { render } from 'react-dom'
import LazyLoadComponent from '../../src/index'
import TestComponent from './TestCompoent';

const App = () => {
    return (
        <div style={{position: 'relative',left: '40%'}}>
            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((value) => {
            return <LazyLoadComponent key={value}>
                <TestComponent id={value}/>
            </LazyLoadComponent>
        })}
        </div>
    );

};

render(<App />, document.getElementById('root'));
