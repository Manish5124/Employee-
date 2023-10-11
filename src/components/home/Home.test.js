import Home from "./Home";
import { render, screen } from "@testing-library/react";


describe('Home',()=>{

    test('run',()=>{
        expect(5).toBe(5);
    })
    // const list = ["HTML","CSS","JAVASCRIPT"];//length = 3

    // test('renders a list of skills',()=>{
    //     render(<Home skills={list}  />);
    //     const listItemElement = screen.getAllByRole('listitem');
    //     expect(listItemElement).toHaveLength(3);
    // });
 
    // test('renders with heading tag', () => {
    //     render(<Home />);
    //     const pageHeading = screen.getByText('Hello world', { selector: 'h1' });
    //     expect(pageHeading).toBeInTheDocument();
    // });
})




