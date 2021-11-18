import React from 'react'
import { sidebarCharacters } from './sources'
import './styledComponents/SidebarList.css'

function SidebarList() {
    return (
        <div className="sidebarList">
            {
                sidebarCharacters.map(each=>(
                    <div className="d-flex m-1">
                        <div className="imgBox">
                            <img src={`../characters/${each.image}`} alt="" />
                        </div>
                        <div className='px-2'>
                            <h6>{each.title}</h6>
                            <p>{each.friend} friends</p>
                        </div>
                            
                    </div>
                ))
            }
           
        </div>
    )
}

export default SidebarList
