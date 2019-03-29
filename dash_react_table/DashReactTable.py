# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashReactTable(Component):
    """A DashReactTable component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks
- data (list; optional): An array of dictionaries with each dictionary corresponding 
to a row. The keys will refere to columns while the values refer
to the data that will be placed in that row's cell.
- columns (list; optional): An aray of dictionaries containing properties to each column. 
At the very least, every column must have a "Header" and "accessor" 
property. The "Header" will be the title of the column and the "accessor"
will link that column to the data array of dictionaries.
- showPagination (boolean; optional): Turn on pagination. Seting this to true will improve performance
on larger tables.
- showPaginationTop (boolean; optional): Show pagination controls on top of table (default: false)
- showPaginationBottom (boolean; optional): Show pagination controls on bottom of table (default: true)
- showPageSizeOptions (boolean; optional): Show options dropdown to edit results per page when pagination is enabled.
- pageSizeOptions (boolean; optional): Options for show page size when pageination is enabled. (default: [5, 10, 20, 25, 50, 100])
- defaultPageSize (number; optional): Default page size. (default: 20)
- minRows (number; optional): controls the minimum number of rows to display - default will be "pageSize"
NOTE: if you set minRows to 0 then you get rid of empty padding rows BUT your table formatting will also 
look strange when there are ZERO rows in the table.
- sortable (boolean; optional): Table level sorting (default: true). This can be overided for specific columns.
- resizable (boolean; optional): Table level resizing (default: true). This can be overided for specific columns.
- filterable (boolean; optional): Table level filtering (default: true). This can be overided for specific columns.
- className (string; optional): Add classname "-striped" and/or "-highlight" to enable these features.
- style (dict; optional): Inline table styles
- conditionalFormatting (optional): Custom conditional color formatting. Currently only supports d3.scaleThreshold(). 

For more info See: https://github.com/d3/d3-scale/blob/master/README.md#threshold-scales. conditionalFormatting has the following type: dict containing keys 'domain', 'range', 'ignore'.
Those keys have the following types:
  - domain (list; optional): The discrete values to create conditional buckets. For N values N+1 buckets are created.
  - range (list; optional): An array of styles that will map to the domain. If N domain values are given, then the 
range must have N+1 values. Note: this must be a dictionary with camelCase css values.
  - ignore (list; optional): Columns that do not get this style must be provided in an optional array."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, data=Component.UNDEFINED, columns=Component.UNDEFINED, showPagination=Component.UNDEFINED, showPaginationTop=Component.UNDEFINED, showPaginationBottom=Component.UNDEFINED, showPageSizeOptions=Component.UNDEFINED, pageSizeOptions=Component.UNDEFINED, defaultPageSize=Component.UNDEFINED, minRows=Component.UNDEFINED, sortable=Component.UNDEFINED, resizable=Component.UNDEFINED, filterable=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, conditionalFormatting=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'data', 'columns', 'showPagination', 'showPaginationTop', 'showPaginationBottom', 'showPageSizeOptions', 'pageSizeOptions', 'defaultPageSize', 'minRows', 'sortable', 'resizable', 'filterable', 'className', 'style', 'conditionalFormatting']
        self._type = 'DashReactTable'
        self._namespace = 'dash_react_table'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'data', 'columns', 'showPagination', 'showPaginationTop', 'showPaginationBottom', 'showPageSizeOptions', 'pageSizeOptions', 'defaultPageSize', 'minRows', 'sortable', 'resizable', 'filterable', 'className', 'style', 'conditionalFormatting']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DashReactTable, self).__init__(**args)
