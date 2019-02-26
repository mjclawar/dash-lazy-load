"""
StratoDem Analytics : __init__
Principal Author(s) : Michael Clawar
Secondary Author(s) :
Description :

Notes :

March 28, 2018
"""

import os as _os
import dash as _dash
import sys as _sys
from .version import __version__

_current_path = _os.path.dirname(_os.path.abspath(__file__))

_components = _dash.development.component_loader.load_components(
    _os.path.join(_current_path, 'metadata.json'),
    'dash_lazy_load'
)

_this_module = _sys.modules[__name__]


_js_dist = [
    {
        'external_url': 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.5/lodash.min.js',
        'relative_package_path': 'lodash.min.js',
        'namespace': 'dash_lazy_load'
    },
    {
        "relative_package_path": "bundle.js",
        "external_url": (
            "https://unpkg.com/dash-lazy-load@{}"
            "/dash_lazy_load/bundle.js"
        ).format(__version__),
        "namespace": "dash_lazy_load"
    }
]

_css_dist = []


for _component in _components:
    setattr(_this_module, _component.__name__, _component)
    setattr(_component, '_js_dist', _js_dist)
setattr(_component, '_css_dist', _css_dist)
