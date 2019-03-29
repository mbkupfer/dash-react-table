/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { DashReactTable } from '../lib';


const data = require('./Titanic.json');



class App extends Component {

    constructor() {
        super();
        this.state = {
            value: ''
        };
        this.setProps = this.setProps.bind(this);
  
    }

    setProps(newProps) {
        this.setState(newProps);
    }


    render() {
        return (
            
            <div>
                <DashReactTable
                    data={data}
                    columns={[
                        {
                            Header: 'Class',
                            accessor: 'Class',
                            minWidth: 90,

                        },
                        {
                            Header: 'Sex',
                            accessor: 'Sex',
                            minWidth: 90,
                        },
                        {
                            Header: 'Age',
                            accessor: 'Age',
                            minWidth: 90,
                        },
                        {
                            Header: 'Survived',
                            accessor: 'Survived',
                            minWidth: 90,
                        },
                        {
                            Header: 'Freq',
                            accessor: 'Freq',
                            minWidth: 90,
                        },

                    ]}
                    conditionalFormatting={
                        { 
                            domain: [20, 50], 
                            range: [
                                {'backgroundColor': 'red', 'color': 'white'}, 
                                {'backgroundColor': 'green'}, 
                                {'backgroundColor': 'blue' },
                            ],
                            ignore: ['Class', 'Age', 'Survived', 'Sex']
                        }
                    }
                    style={{height: '300px'}}
                    className='-striped -highlight'
                    filterable={true}
                >

                </DashReactTable>
            </div>
            
        )
    }
}

export default App;
