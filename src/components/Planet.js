import React, { useState } from 'react'
import { Card, CloseButton} from 'react-bootstrap'
import AddForm from './AddForm'
import { allPlanets } from './sources'
import Sidebar from './Sidebar'
import './styledComponents/Planet.css'
import { PlusSquareFill } from 'react-bootstrap-icons'



function Planet() {
    const [isOpen, setisOpen] = useState(false)
    return (
            <div className=" Character fullBox position-relative d-flex flex wrap">
                <div className={!isOpen ? 'fullSize d-flex flex-wrap position-relative' : 'halfSize d-flex flex-wrap position-relative'}>
                {
                allPlanets.map(each=>( 
                    <Card  className="m-1"onClick={()=>setisOpen(true)}>
                        <div className="cardImg">
                        <Card.Img variant="top" src={`../planets/${each.image}`}/>
                        </div>
                    <div className="cardText">
                    <p>{each.title}</p>
                    <h6 >pop: 235</h6>
                    </div>
                    </Card>
                  
                ))
                }
                 <div className="posi">
                <AddForm name="PLANET"/>
                </div>
                </div >
                {
                    isOpen?<div className="sidebar p-2">
                         <CloseButton onClick={()=>setisOpen(false)} className="ms-auto m-2" />
                          <h2>Planet Alpha</h2>
                    <p>PLanet Alpha is the place to be if 
                    you like everything related to planets.
                    I know it is a bit meta,but come see by yourself
                    </p>
                    <h6>Population</h6>
                    <p>234</p>
                    <div className="d-flex">
                    <h4>CHARCTERS</h4>
                    <div ClassName="plus"><PlusSquareFill /></div>
                    </div>
                    <Sidebar/>
                    </div>:""
                }
            </div>
            
    )
}

export default Planet
