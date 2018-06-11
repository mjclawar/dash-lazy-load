import json

import dash_lazy_load
import dash.dependencies
import dash_html_components as html

app = dash.Dash('')
app.scripts.config.serve_locally = True


app.layout = html.Div([
    html.Div('Testing', style=dict(height=1200)),
    dash_lazy_load.LazyLoad(
        html.Div('I loaded in lazily!!', style=dict(border='5px solid blue')),
        height=500,
        debounce=1000),

    dash_lazy_load.Debouncer(id='debouncer', debounce=2000, sendTrueValue=False),
    html.Button('A button!', id='my-button'),
    html.Div('', id='my-output'),
])


@app.callback(
    output=dash.dependencies.Output('my-output', 'children'),
    inputs=[
        dash.dependencies.Input('debouncer', 'debouncedVals'),
    ])
def update_debounced(debouncedVals):
    return json.dumps(debouncedVals)


@app.callback(
    output=dash.dependencies.Output('debouncer', 'inputVals'),
    inputs=[
        dash.dependencies.Input('my-button', 'n_clicks'),
    ])
def button_debounced(n_clicks):
    return {'button_clicks': n_clicks}


if __name__ == '__main__':
    app.run_server(debug=True)
