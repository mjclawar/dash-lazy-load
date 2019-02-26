# Change Log for dash-lazy-load
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## 1.1.2 - 2019-02-27
### Fixes
- In `dash_lazy_load.__init__`, the `namespace` for `lodash` was
  previously `dash_core_components`, which caused breaks upon updating
  to a newer `dash` requirement (new resources logic when served
  locally). This release fixes the namespace to `dash_lazy_load`
  instead.

### Changes
- Updates JavaScript dependencies
  - React to v16
  - `flow-bin` to `v0.93.0`
  - Webpack and testing packages (jest, enzyme) updated
- Updates `.babelrc` to new `babel` version

## 1.1.0 - 2018-06-11
### Adds
- Adds `Debouncer` component

## 1.0.0 - 2017-03-28
- Initial release
