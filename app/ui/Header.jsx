
import Logo from "./Logo";
import Nav from "./Nav";

function Header() {
    return (
      <>
            <div className="flex items-end justify-between" >
          <Logo  />
          <Nav />
               
        </div>
      </>
    );
}

export default Header
