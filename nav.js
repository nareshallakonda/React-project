import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <div>
            {/* to means home page */}
            <Link to="/home1">Home1</Link>&emsp;
            <Link to="/about1">About1</Link>&emsp;
            {/* <Link to="/">Qualification</Link>&emsp;
            <Link to="/form4">form</Link> */}
            {/* <Link to="./table">table</Link>   */}
        </div>
    )
}
export default Navbar;

