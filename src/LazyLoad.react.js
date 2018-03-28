// @flow

import React from 'react';

import ReactLazyLoad from 'react-lazyload';


type Props = {
  /** Children to render in the LazyLoad component ONLY ONE ALLOWED */
  children?: Node,
  /** id for the LazyLoad component */
  id?: string,
  /**
   * In the first round of render, LazyLoad will render a placeholder for your component if no
   * placeholder is provided and measure if this component is visible. Set height properly will
   * make LazyLoad calculate more precisely. The value can be number or string like '100%'. You
   * can also use css to set the height of the placeholder instead of using height.
   */
  height?: number | string,
  /**
   * Once the lazy loaded component is loaded, do not detect scroll/resize event anymore. Useful
   * for images or simple components.
   */
  once?: boolean,
  /**
   * Say if you want to preload a component even if it's 100px below the viewport (user have to
   * scroll 100px more to see this component), you can set offset props to 100. On the other hand,
   * if you want to delay loading a component even if it's top edge has already appeared at
   * viewport, set offset to negative number.
   *
   * If you provide this props with array like [200, 200], it will set top edge offset and bottom
   * edge offset respectively.
   */
  offset?: number | Array<number>,
  /** Listen and react to scroll event */
  scroll?: boolean,
  /** Response to `resizze` event, set it to `true` if you do need LazyLoad listen resize event */
  resize?: boolean,
  /** If lazy loading components inside a overflow container, set this to true. Also make sure a
   * position property other than static has been set to your overflow container.
   */
  overflow?: boolean,
  /** Placeholder for the lazy-loaded component */
  placeholder?: any,
  /**
   * The lazy loaded component is unmounted and replaced by the placeholder when it is no longer
   * visible in the viewport.
   */
  unmountIfInvisible?: boolean,
  /**
   * Lazyload will try to use passive event by default to improve scroll/resize event handler's
   * performance. If you prefer control this behaviour by yourself, you can set debounce or
   * throttle to enable built in delay feature.
   *
   * If you provide a number, that will be how many ms to wait; if you provide true, the wait time
   * defaults to 300ms.
   *
   * NOTICE Set debounce / throttle to all lazy loaded components unanimously, if you don't,
   * the first occurrence is respected.
   */
  debounce?: number | boolean,
  /**
   * Lazyload will try to use passive event by default to improve scroll/resize event handler's
   * performance. If you prefer control this behaviour by yourself, you can set debounce or
   * throttle to enable built in delay feature.
   *
   * If you provide a number, that will be how many ms to wait; if you provide true, the wait time
   * defaults to 300ms.
   *
   * NOTICE Set debounce / throttle to all lazy loaded components unanimously, if you don't,
   * the first occurrence is respected.
   */
  throttle?: number | boolean,
};


export default class LazyLoad extends React.Component<Props> {
  props: Props;
  static defaultProps = {
    children: null,
    id: undefined,
    height: undefined,
    once: false,
    offset: 0,
    scroll: true,
    resize: false,
    overflow: false,
    placeholder: undefined,
    unmountIfInvisible: false,
    debounce: undefined,
    throttle: undefined,
  };

  render() {
    const { children, ...otherProps } = this.props;
    return <ReactLazyLoad {...otherProps}>{children}</ReactLazyLoad>
  }
}
