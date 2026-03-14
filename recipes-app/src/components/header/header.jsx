import "./header.css"
import Logo from "./Logo.jpg"



export default function Header () {
  return (
<header>
  <nav className="navDesign">
    <img className="logo"  src={Logo} alt="logo empgie for smile chef " /> 
      <p className="logoTitle">Chef Claude</p>
     </nav>
</header>



  )
}