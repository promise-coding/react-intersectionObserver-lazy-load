import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styles from './style.scss';

export default class LazyLoadComponent extends Component {

    constructor(props) {
        super();
        this.isVisible = false;

        this.options = {
            root: props.options ? (props.options.root instanceof Element ? props.options.root : null) : null,
            rootMargin: props.options ? props.options.rootMargin : '0px 0px 0px 0px',
            threshold: props.options ? props.options.threshold : [0]
        };

        const { width, height } = props.defaultPlaceholderStyle || {};

        this.placeholderStyle = {
          width : width ? `${width}px` : '300px',
          height : height ? `${height}px` : '300px',
        };
    }

    componentDidMount() {
        const thisCompo = ReactDOM.findDOMNode(this);
        const that = this;

        this.observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                // intersectionRatio 表示相交区域和目标元素的比例值
                // 也可以用isIntersecting 目标元素当前是否可见 Boolean值 可见为true
                if (entry.isIntersecting) {
                    // 组件已出现在viewport
                    that.isVisible = true;

                    // 强制调用render()重新渲染
                    that.forceUpdate();

                    // 组件已加载， 解除观察
                    that.observer.unobserve(entry.target)
                }
            })
        }, this.options);

        this.observer.observe(thisCompo);
    }

    shouldComponentUpdate() {
        return this.isVisible;
    }

    componentWillUnmount() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }

    render() {
        const { placeholder } = this.props;

        if(this.isVisible) {
            return this.props.children || null;
        } else {
            return placeholder ? placeholder : <div className={styles.defaultPlaceholder} style={this.placeholderStyle}>
                <div className={styles.loading}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        }
    }
}
