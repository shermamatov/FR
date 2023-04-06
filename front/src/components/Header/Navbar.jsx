// block start
import NavbarFirsts from "./NavbarFirsts/NavbarFirsts";
import NavbarOnce from "./NavbarOnce/NavbarOnce";
// block end
// строго использовать css.module
const Navbar = () => {
    return (
        <div>
            <NavbarFirsts />
            <NavbarOnce />
        </div>
    );
};

export default Navbar;
