# dash-lazy-load

Large dash apps taking forever to initially render on page load? `dash-lazy-load` wraps Dash components with lazy loading that only render in the page when scrolled or resized into view!

This package creates a Dash wrapper around the excellent [`react-lazyload`](https://github.com/jasonslylvia/react-lazyload) package.

### Get started
`$ pip install dash-lazy-load`

To get simple lazy loading set up, the only change necessary is to wrap a Dash components with `dash_lazy_load.LazyLoad`. 

```python

import dash_lazy_load
import dash
import dash_html_components as html

app = dash.Dash('')

app.scripts.config.serve_locally = True


app.layout = html.Div([
    html.Div('Testing', style=dict(height=1200)),
    dash_lazy_load.LazyLoad(
        html.Div('I loaded in lazily!!', style=dict(border='5px solid blue')),
        height=500,
        debounce=1000)
])


if __name__ == '__main__':
app.run_server(debug=True)
```

![Lazy Load Example](https://github.com/mjclawar/dash-lazy-load/blob/master/LazyLoadExample.gif)
The blue border component loads in after a debounce period on scroll(!)

### Dash

Go to this link to learn about [Dash][].

## Dash help

See the [dash-components-archetype][] repo for more information.

## Contributing
To set up the development environment:

```shell
$ npm install
# Run webpack to create the Dash React bundle
$ npm run build-dist
# Set up a virtualenv
$ virtualenv venv -p python3
$ source venv/bin/activate
# Install the local Py
$ npm run install-local
```

### Running a local server
Run `usage.py` in the virtual environment
```
$ source venv/bin/activate
$ python usage.py
```

[Dash]: https://github.com/plotly/dash
[dash-components-archetype]: https://github.com/plotly/dash-components-archetype

### Contributors
[@mjclawar](https://github.com/mjclawar)
[@wchaering](https://github.com/wchaering)
