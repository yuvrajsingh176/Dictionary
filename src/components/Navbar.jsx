import {BiSolidBookAlt,BiSolidDownArrowCircle} from "react-icons/bi"
import "./Navbar.css"
import DarkMode from "./DarkMode/DarkMode";
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="dictionary-icon">
            <BiSolidBookAlt style={{color:"green",fontSize:"4rem"}}/>
            </div>
            <div style={{display:"flex",alignItems:"center"}}>
            <div className="fonts-type" >
                <strong>Serif</strong>
                    <BiSolidDownArrowCircle  />
            </div>
            <div className="toggler">
    <DarkMode/>
            </div>
            </div>

            </div>
    )
}
export default Navbar;