import React from 'react';

// import styles
import './App.component.css';

// import app related components
import TableWithFilter from "../../components/table-with-filter/TableWithFilter.component";

function App() {
  return (
    <div className="App">
      <h2>
        Experiment: ANTD-ReactJS Table component
      </h2>
      <TableWithFilter />
    </div>
  );
}

export default App;
