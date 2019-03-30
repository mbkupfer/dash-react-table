import io
import json
import os
from setuptools import setup


with open(os.path.join('dash_react_table', 'package.json')) as f:
    package = json.load(f)

package_name = package["name"].replace(" ", "_").replace("-", "_")

description='Dash component for React-Table'

# Import the README and use it as the long-description.
try:
    with io.open('README.md', encoding='utf-8') as f:
        long_description = '\n' + f.read()
except FileNotFoundError:
    long_description = description

setup(
    name=package_name,
    version=package["version"],
    author='Maxim Kupfer',
    author_email='mbkupfer@gmail.com',
    packages=[package_name],
    include_package_data=True,
    license=package['license'],
    description=description,
    long_description=long_description,
    long_description_content_type='text/markdown',
    install_requires=["dash>=0.38.0"],
    url='https://github.com/mbkupfer/dash-react-table.git'
)
