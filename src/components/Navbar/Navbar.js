import React,{Component,useState} from 'react'
import {MenuItems} from './MenuItems'
import {Button} from '../Button'
import {Link} from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)

    const handleClick = ()=>{
        setClick(!click)
    }
    return (
        <nav className = 'NavbarItems'>
            <h1 className = 'navbar-logo' >Smart Digital Hub 
                <i className = 'fa fa-react'></i>
            </h1>
            <div className = 'menu-icon' onClick ={handleClick} >
            <i className = {click ? 'fas fa-times':'fas fa-bars'} style ={{position:'relative', right:'20%'}}></i>
                
            </div>
            
         <ul  className = {click ? 'nav-menu active':'nav-menu'}>
             {MenuItems.map((item, index)=>{
                 return (
                    <li key = {index}>
                     <a className= {item.cName} href = {item.url}>
                         {item.title}
                     </a>
                    </li>
                 )
             })}
            
         </ul>
         <Link to ='/'>
         <Button>Signout</Button>
         </Link>
        </nav>
    )
}

export default Navbar
