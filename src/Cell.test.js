import React from "react";
import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import Cell from "./Cell";

it("renders a cell", function(){
    render(<Cell />)
})

it("matches snapshot", function(){
    const {asFragment} = render(<Cell />);
    expect(asFragment()).toMatchSnapshot();
})