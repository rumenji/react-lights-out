import React from "react";
import '@testing-library/jest-dom'
import { fireEvent, render } from "@testing-library/react";;
import Board from "./Board";

it("renders a board", function(){
    render(<Board />);
})

it("matches a board snapshot", function(){
    const {asFragment} = render(<Board nrows={5} ncols={5} chanceLightStartsOn={1} />);
    expect(asFragment()).toMatchSnapshot();
})

it("lights up the correct cells", function(){
    const { getAllByRole } = render(<Board nrows={3} ncols={3} chanceLightStartsOn={0} />);
    const cells = getAllByRole('cell');
    cells.forEach(cell => {
        console.log(cell.className)
        expect(cell).toHaveClass("Cell");
    })
    fireEvent.click(cells[0]);
    
    cells.forEach((cell, idx) => {
       if([0,1,3].includes(idx)){
        expect(cell).toHaveClass("Cell Cell-lit");
       } else {
        expect(cell).not.toHaveClass("Cell Cell-lit");
       }
    })
    
})

it("shows won if all cells are lit", function(){
    const { container } = render(<Board nrows={3} ncols={3} chanceLightStartsOn={1} />);
    expect(container.querySelector(".won")).toBeInTheDocument();
})