import React, {useEffect, useState } from 'react'
import { useParams} from 'react-router';
import { Divider } from '@mui/material';
import Spinner from '../newdisplay/Spinner';
import './newsdetail.css'
import { NavLink } from 'react-router-dom'




const Newsdetail = (props) => {
    
    const { id } = useParams("");
    console.log(id);

    const [inddata, setIndedata] = useState("");

    // console.log([inddata]);

    const getinddata = async () => {
        const host='https://quilted-ludicrous-rotate.glitch.me'
        const res = await fetch(`${host}/news/getnews/${id}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
        });

        const data = await res.json();
        console.log(data);

        if (res.status !== 200) {
            alert("no data available")
        } else {
            // console.log("ind mila hain");
            setIndedata(data);
        }
    };

    useEffect(() => {
        setTimeout( getinddata,1000)
        // eslint-disable-next-line
    }, [id]);



    return (

        <div className="cart_section" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1 style={{textAlign:'center'}}>Detailed News</h1>
            {inddata && Object.keys(inddata).length &&
                <div className="cart_container" >
                    <div className="left_cart">
                        <img src={inddata.image} alt="article" />
                    </div>
                    <div className="right_cart" style={{backgroundColor:'rgb(131 186 180)'}}>
                        <h3>{inddata.title}</h3>
                        <Divider/>
                        <p className="description"> <span style={{ color: "#565959", fontSize: "14px", fontWeight: "500", letterSpacing: "0.4px" }}>{inddata.description}</span></p>
                        <p>in {inddata.place} Published at {inddata.time}</p>

                        <NavLink to={inddata.url} target='_blank' className="btn btn-sm btn-dark my-3 mx-5">
                        Read Article
                    </NavLink>
                    </div>
                </div>
            }

            {!inddata ? <div className="circle my-7">
                <Spinner/>
                <h2 style={{textAlign:'center'}}> Loading....</h2>
            </div> : ""}
        </div>
    )
}

export default Newsdetail
