import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'

export class Navigation extends Component{
    render(){
        return (
            <Navbar bg='light' expand='lg'>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav>
                        {/* bg-dark */}
                        <NavLink className='d-inline p-2 text-black' to='/'>
                            Home
                        </NavLink>
                        <NavLink className='d-inline p-2 text-black' to='/Department'>
                            Department
                        </NavLink>
                        <NavLink className='d-inline p-2 text-black' to='/Employee'>
                            Employee
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}