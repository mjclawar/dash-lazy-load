// @flow

import React from 'react';

type Props = {
  inputVals?: Object,
  debounce?: number,
  debouncedVals?: Object,
  id?: string,
  /** Dash callback to update props on the server. */
  setProps?: (props?: Object) => void,
};


export default class Debouncer extends React.Component<Props> {
  props: Props;
  static defaultProps = {
    inputVals: {},
    debouncedVals: {},
    debounce: 0,
    setProps: () => {},
  };

  constructor(props: Props) {
    super(props);

    this.updateDebouncedVals = window._.debounce(this._updateDebouncedVals, this.props.debounce);
  }

  _updateDebouncedVals = () => {
    if (typeof this.props.setProps === 'function')
      this.props.setProps({debouncedVals: this.props.inputVals});
  };

  componentDidUpdate(prevProps: Props) {
    if (typeof this.props.setProps === 'function'
      && !window._.isEqual(this.props.inputVals, prevProps.inputVals)) {
      this.updateDebouncedVals();
    }
  }

  render() {
    return null;
  }
}
