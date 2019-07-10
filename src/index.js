import React from 'react';
import styles from './style.scss';

export default class ReactDemo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.title}>
                我的第一个NPM组件！
            </div>
        );
    }
}
