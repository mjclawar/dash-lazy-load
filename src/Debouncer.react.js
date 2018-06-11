// @flow

import React from 'react';

type Props = {
  inputVals?: Object,
  debounce?: number,
  debouncedVals?: Object | number,
  id?: string,
  sendTrueValue?: boolean,
  /** Dash callback to update props on the server. */
  setProps?: (props?: Object) => void,
};


export default class Debouncer extends React.Component<Props> {
  props: Props;
  updateDebouncedVals: () => void;

  static defaultProps = {
    inputVals: {},
    debouncedVals: 0,
    debounce: 0,
    setProps: () => {},
    sendTrueValue: true,
  };

  constructor(props: Props) {
    super(props);

    this.updateDebouncedVals = window._.debounce(this._updateDebouncedVals, this.props.debounce);
  }

  _updateDebouncedVals = () => {
    if (typeof this.props.setProps === 'function')
      this.props.setProps({
        debouncedVals: (this.props.sendTrueValue || typeof this.props.debouncedVals !== 'number')
          ? this.props.inputVals
          : this.props.debouncedVals + 1});
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
