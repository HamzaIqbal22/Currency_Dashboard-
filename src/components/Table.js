import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Table = () => {
    const [rowData, setRowData] = useState([]);
    const [columnState, setColumnState] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/exchange_rates/')
            .then(response => response.json())
            .then(data => {
                setRowData(data);
            });

        const savedState = localStorage.getItem('columnState');
        if (savedState) {
            setColumnState(JSON.parse(savedState));
        }
    }, []);

    const columnDefs = [
        { headerName: 'ID', field: 'id', filter: true },
        { headerName: 'Date', field: 'date', filter: true },
        { headerName: 'Base Currency', field: 'base_currency', filter: true },
        { headerName: 'Target Currency', field: 'target_currency', filter: true },
        { headerName: 'Rate', field: 'rate', filter: true },
    ];

    const onGridReady = params => {
        if (columnState) {
            params.columnApi.applyColumnState({ state: columnState, applyOrder: true });
        }
    };

    const onColumnMoved = params => {
        const currentState = params.columnApi.getColumnState();
        localStorage.setItem('columnState', JSON.stringify(currentState));
    };

    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={{ filter: true }}
                onGridReady={onGridReady}
                onColumnMoved={onColumnMoved}
            />
        </div>
    );
};

export default Table;
