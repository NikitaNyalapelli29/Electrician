import './style.css';
import {Link} from "react-router-dom";
export default function Navigation(props){
    const navItems = props.navApp;


    return(
        <div className="header">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className='mt-2 mb-2'>
                    <img src="../public/Images/Illustration/logo.png" width="40px" height="40px" className='ms-3'/>
                    <Link to="#" className="text-decoration-none fs-2 fw-semibold logo1">Electrochip</Link>
                    </div>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#Navibar">
                        <span>{<i className="fa-solid fa-bars fs-3 text-black"></i>}</span>
                    </button>
                    <div className="collapse navbar-collapse" id="Navibar">
                        <ul className="navbar-nav mt-4 mx-auto me-lg-5 fs-6 text-uppercase mt-3 mt-lg-0">
                            <li className="nav-item text-center"><Link to="/" className="nav-link nav-i text-uppercase">{navItems[0]}</Link></li>
                            <li className="nav-item text-center"><Link to="./Service" className="nav-link text-uppercase">{navItems[2]}</Link></li>
                            <li className="nav-item text-center"><Link to="./About" className="nav-link text-uppercase">{navItems[1]}</Link></li>
                            <li className="nav-item text-center"><Link to="./Blog" className="nav-link text-uppercase">{navItems[3]}</Link></li>
                            <li className="nav-item text-center"><Link to="./Contact" className="nav-link text-uppercase">{navItems[4]}</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}