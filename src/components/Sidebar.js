import React from 'react'
import { Container } from 'react-bootstrap'
import './styledComponents/Sidebar.css'
import SidebarList from './SidebarList'

function Sidebar() {
    return (
        <div>
            <Container>
                <SidebarList/>
            </Container>
        </div>
    )
}

export default Sidebar
