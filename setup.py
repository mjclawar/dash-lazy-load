from setuptools import setup

exec (open('dash_lazy_load/version.py').read())

setup(
    name='dash_lazy_load',
    version=__version__,
    author='StratoDem',
    packages=['dash_lazy_load'],
    include_package_data=True,
    license='MIT',
    description='Dash implementation of react-lazyload',
    install_requires=[]
)
