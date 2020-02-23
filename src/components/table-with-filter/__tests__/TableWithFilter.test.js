import React from "react";

import TableWithFilter from "../TableWithFilter.component";
import { shallow } from "enzyme";

describe(("TableWithFilter Component"), ()=> {
	const TABLEWITHFILTER = <TableWithFilter />;
	it("Render component", ()=>{
		shallow(TABLEWITHFILTER);
	})

	it("Method: handleSearch", ()=>{
		const tableWithFilterWrapper = shallow(TABLEWITHFILTER);
		const tableWithFilterInstance = tableWithFilterWrapper.instance(); 
		tableWithFilterInstance.handleSearch();
	})

	it("Method: handleReset", ()=>{
		const tableWithFilterWrapper = shallow(TABLEWITHFILTER);
		const tableWithFilterInstance = tableWithFilterWrapper.instance(); 
		tableWithFilterInstance.handleReset(()=>{});
	})

	it("Method: getColumnSearchProps", ()=>{
		const tableWithFilterWrapper = shallow(TABLEWITHFILTER.find('Table'));
		const tableWithFilterInstance = tableWithFilterWrapper.instance(); 
		tableWithFilterInstance.getColumnSearchProps();
	})
})
