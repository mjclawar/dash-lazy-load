import dash_lazy_load
import dash
import dash_html_components as html

app = dash.Dash('')

app.scripts.config.serve_locally = True


app.layout = html.Div([
    html.Div('Testing', style=dict(height=1200)),
    dash_lazy_load.LazyLoad(
        html.Div('I loaded in lazily!!'),
        height=500,
        debounce=1000)
])


if __name__ == '__main__':
    app.run_server(debug=True)
