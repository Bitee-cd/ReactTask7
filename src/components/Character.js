import React,{useState} from 'react'
import { Card, CloseButton } from 'react-bootstrap'
import AddForm from './AddForm'
import { allCharacters } from './sources'
import './styledComponents/Character.css'
import Sidebar from './Sidebar'
import { PlusSquareFill } from 'react-bootstrap-icons'

function Character() {
    const [isOpen, setisOpen] = useState(false)
    return (
        <div className="fullBox position-relative d-flex flex-wrap">
              <div className={!isOpen ? 'fullSize d-flex flex-wrap position-relative' : 'halfSize d-flex flex-wrap position-relative'}>
             {
                allCharacters.map(each=>( 
                    <Card  className="m-3 pb-2" style={{width:'15rem'}} onClick={()=>setisOpen(true)}>
                         <div className="text-center charImg"><img src={`../characters/${each.image}`} /></div>
                            <p className="px-2">{each.title}</p>
                            <h6 className="px-2">Friends: {each.friend}</h6>
                    </Card>
                  
                ))
                }
                    <div className="posi">
                    <AddForm name="CHARACTER"/>
                    </div>
                </div>
                {
                    isOpen?<div className="sidebar p-2">
                         <CloseButton onClick={()=>setisOpen(false)} className="ms-auto" />
                    <Sidebar />
                    </div>:""
                }

        </div>
    )
}

export default Character
