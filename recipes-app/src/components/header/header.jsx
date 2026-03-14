import "./header.css"
import Logo from "./Logo.jpg"



export default function Header () {
  return (
<header className="navDesign">
    <img className="logo"  src={Logo} alt="logo empgie for smile chef " /> 
      <h1 className="logoTitle">Chef Claude</h1>
</header>



  )
}