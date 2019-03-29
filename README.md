# dash-react-table
Dash component for react-table

dash-react-table provides a lightweight table component built on top of [react-table](https://github.com/tannerlinsley/react-table/tree/v6).

*Note: This above link will take you to version 6 which is the one I used for this component (v6.8.6 to be exact)*

## Installation

*dash-react-table* is hosted on PyPI, and can be installed by
running

```
pip install dash-react-table
```

## Usage

```python
import dash
import dash_html_components as html
import pandas as pd

from dash_react_table import DashReactTable

df = pd.read_csv(
    'https://raw.githubusercontent.com/plotly/datasets/master/solar.csv')


data = df.to_json(orient='records')

columns = [{'Header': i, 'accessor': i} for i in df.columns]

app.layout = html.Div([
    DashReactTable(
        id='table',
        data=data,
        columns=columns
    )
])

if __name__ == '__main__':
    app.run_server(debug=True)
    
```

## DashReactTable Properties

| Attribute | Description | Type | Default value |
| --------- | ----------- | ---- | ------------- |
| id |  Optional identifier used to reference component in callbacks | string |  |
| data | An array of data | list of dict where each dict corresponds to a row of data| |
| columns | An array of column attributes | list of dict which can contain the followings keys: Header(string), accessor(string), sortable(boolean), filterable(boolean), show(boolean), width(int), minWidth(int), maxWidth(int), className(string), style(string), headerClassName(string), headerStyle(string)
| showPagination | Turn on pagination | boolean | false | 
| showPaginationTop | Put pagination on top | boolean | false | 
| showPaginationBottom | Put pagination on top | boolean | true |
| showPageSizeOptions | Provide options for pagination | boolean | true | 
| pageSizeOptions | Define the size options for pagination | list of int | [5, 10, 20, 25, 50, 100] |
| defaultPageSize | Default page size | int | 20 |
| minRows | Controls the minimum number of rows to display | int | 
| sortable | Allow columns to be sorted | boolean | true |
| resizable | Allow columns to be resizable | boolean | true |
| filterable | Allow columns to be filterable. The component has a custom filter which performs a case/order insensitive filter. | boolean | false 
| className | Add classname to react-table. The main use case for this is to add "-striped" and/or "-highlight" | string | |
| style | inline table styles | dict | |
| conditionalFormatting | Custom conditional color formatting. Currently only supports [d3.scaleThreshold](https://github.com/d3/d3-scale/blob/master/README.md#threshold-scales). | dict with contains the following keys: domain(list of int), range(list of dict styles), ignore(list of string) |


## Additonal notes:
- All column properties can override table level properties

- To use conditional formatting you must have N + 1 range values for N domain values. Range values must be camelcased styles. 

- To make a scrolling table with fixed headers, be sure to add a fixed height to the table's style property. 
