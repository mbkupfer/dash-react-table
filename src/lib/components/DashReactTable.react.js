import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ReactTable from 'react-table';
import "react-table/react-table.css";
import './rt-fixes.css';
import { includes } from 'ramda';

import { thresholdScaleCalc } from '../util/scales';



/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class DashReactTable extends Component {

    render() {
        const {
            id, 
            data, 
            columns,
            showPagination,
            showPaginationTop,
            showPaginationBottom,
            showPageSizeOptions,
            pageSizeOptions,
            defaultPageSize,
            minRows,
            sortable,
            resizable,
            filterable,
            className, 
            style,
            conditionalFormatting,
        
        } = this.props;


        let format = thresholdScaleCalc(conditionalFormatting.domain, conditionalFormatting.range)
        
        const conditionalFormat = (state, rowInfo, column) => {
            let ignore = conditionalFormatting.ignore ? conditionalFormatting.ignore : {} 
            let accessor = column.id
            if (rowInfo && rowInfo.row && !includes(accessor, ignore)) {
                let tdValue = rowInfo.row[accessor]
                return {
                    style: format(tdValue)
                };
            } else {
                return {};
            }
        };

        
        
        let conditional_columns = []
        
        for(let column of columns){
            let c = column;
            c['getProps'] = conditionalFormat;
            conditional_columns.push(c);
        }
        

        return (
            <div id={id}>
                <ReactTable
                    data={data}
                    columns={conditional_columns}
                    showPagination={showPagination}
                    showPaginationTop={showPaginationTop}
                    showPaginationBottom={showPaginationBottom}
                    showPageSizeOptions={showPageSizeOptions}
                    pageSizeOptions={pageSizeOptions}
                    defaultPageSize={defaultPageSize}
                    minRows={minRows}
                    sortable={sortable}
                    resizable={resizable}
                    filterable={filterable}
                    className={className}
                    style={style}

                    defaultFilterMethod={filterAny}
                    
                >
                    
                </ReactTable>    
            </div>
        );
    }


}

/**
 * Create custom filter that ignores character case, mixed types, and order
 */
const filterAny = (filter, row) => {
    const _filter_value = convert(filter.value)
    return row[filter.id] !== undefined ?
        includes(_filter_value, convert(row[filter.id])) : true   
}

/**
 * Convert value to a comparable string regardless of dtype and case
 */
const convert = (str) => {
    return str.toLocaleString().toLowerCase() 
}

DashReactTable.defaultProps = {
    showPagination: false,
    sortable: true,
    resizable: true,
    filterable: false,
};

DashReactTable.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks
     */
    id: PropTypes.string,

    /**
     * 
     * An array of dictionaries with each dictionary corresponding 
     * to a row. The keys will refere to columns while the values refer
     * to the data that will be placed in that row's cell.  
     * 
     */
    data: PropTypes.arrayOf(PropTypes.object),

    /**
     * An aray of dictionaries containing properties to each column. 
     * At the very least, every column must have a "Header" and "accessor" 
     * property. The "Header" will be the title of the column and the "accessor"
     * will link that column to the data array of dictionaries. 
     * 
     */
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            
            /**
             * The column's label
             */
            Header: PropTypes.string,

            /**
             * The corresponding key that links 
             * the column to the data array. 
             */
            accessor: PropTypes.string,

            /**
             * Overrides the table option
             */
            sortable: PropTypes.bool,

            /**
             * Overides the table option
             */
            resizable: PropTypes.bool,

            /**
             * Overides the table option
             */
            filterable: PropTypes.bool,

            /**
             * Used to hide a column
             */
            show: PropTypes.bool,

            /**
             * A hardcoded width for the column. This overides both min and max width options
             */
            width: PropTypes.number,

            /**
             * A minimum width for the column (default: 100)
             */
            minWidth: PropTypes.number,

            /**
             * A maximum width for the column
             */
            maxWidth: PropTypes.number,

            /**
             * Class name for the cells of this column.
             */
            className: PropTypes.string,

            /**
             * Inline style for the cells of this column.
             */
            style: PropTypes.object,

            /**
             * Class name for the header of this column.
             */
            headerClassName: PropTypes.string,

            /**
             * Inline style for the header of this column.
             */
            headerStyle: PropTypes.object,
        })
    ),

    /**
     * Turn on pagination. Seting this to true will improve performance
     * on larger tables. 
     */
    showPagination: PropTypes.bool,

    /**
     * Show pagination controls on top of table (default: false)
     */
    showPaginationTop: PropTypes.bool,

    /**
     * Show pagination controls on bottom of table (default: true)
     */
    showPaginationBottom: PropTypes.bool,

    /**
     * Show options dropdown to edit results per page when pagination is enabled.
     */
    showPageSizeOptions: PropTypes.bool,

    /**
     * Options for show page size when pageination is enabled. (default: [5, 10, 20, 25, 50, 100])
     */
    pageSizeOptions: PropTypes.arrayOf(PropTypes.number),

    /**
     * Default page size. (default: 20)
     */
    defaultPageSize: PropTypes.number,

    /**
     * controls the minimum number of rows to display - default will be "pageSize"
     * NOTE: if you set minRows to 0 then you get rid of empty padding rows BUT your table formatting will also 
     * look strange when there are ZERO rows in the table.
     */
    minRows: PropTypes.number,

    /**
     * Table level sorting (default: true). This can be overided for specific columns.
     */
    sortable: PropTypes.bool,

    /**
     * Table level resizing (default: true). This can be overided for specific columns.
     */
    resizable: PropTypes.bool,

    /**
     * Table level filtering (default: false). This can be overided for specific columns.
     */
    filterable: PropTypes.bool,

    /**
     * Add classname "-striped" and/or "-highlight" to enable these features.
     */
    className: PropTypes.string,

    /**
     * Inline table styles
     */
    style: PropTypes.object,

    /**
     * Custom conditional color formatting. Currently only supports d3.scaleThreshold(). 
     * 
     * For more info See: https://github.com/d3/d3-scale/blob/master/README.md#threshold-scales
     */
    conditionalFormatting: PropTypes.shape({

        /**
         * The discrete values to create conditional buckets. For N values N+1 buckets are created. 
         */
        domain: PropTypes.array,

        /**
         * An array of styles that will map to the domain. If N domain values are given, then the 
         * range must have N+1 values. Note: this must be a dictionary with camelCase css values. 
         */
        range: PropTypes.arrayOf(PropTypes.object),

        /**
         * Columns that do not get this style must be provided in an optional array. 
         */
        ignore: PropTypes.arrayOf(PropTypes.string),
    }),
    
    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func
};


