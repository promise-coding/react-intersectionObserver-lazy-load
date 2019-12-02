import React, {Component} from 'react';

export default class TestComponent extends Component {

    componentDidMount() {
        const { id } = this.props;

        console.log(`TestComponent #${id} was mounted!, please enjoy it!`);
    }

    render() {
        const { id } = this.props;

        return (
            <div style={{width: '300', height: '300', 
            backgroundColor: '#bfbfbf', textAlign: 'center', fontSize: '30px', margin:'15px'}}>
                {id}
            </div>
        );
    }
}