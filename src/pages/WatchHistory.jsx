import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { deleteWatchHistory, getHistory } from '../services/allApi';

function WatchHistory() {

  const [history, setHistory] = useState([]);
  const getAllHistory = async () =>{
    const resp = await getHistory();
    const {data} = resp;
    setHistory(data)
  }
  useEffect(()=>{
    getAllHistory()
  },[])

    const deleteHistory = async (id) => {
      await deleteWatchHistory(id)
      getAllHistory()
  }

  return (
    <>
      <div className='container mt-5 d-flex justify-content-between'>
        <h3 className='textStyle'>Watch History</h3>
        <Link to={'/home'} style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}>
          <i class="fa-solid fa-arrow-left me-1"></i>Back to Home
        </Link>
      </div>
      <table className='textStyle table mt-5 mb-5 container' data-bs-theme='dark'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>TIME</th>
            <th>ACTION</th>
          </tr>

        </thead>
        <tbody>
          {
          history.length>0?
          history.map((item)=>(
          <tr>
            <td>{item.id}</td>
            <td>{item.caption}</td>
            <td>{item.embededLink}</td>
            <td>{item.timeStamp}</td>
            <td><Button onClick={()=>deleteHistory(item.id)} variant="danger"><i class="fa-solid fa-trash"></i></Button></td>
          </tr>
          )):
        <p>No History Found</p>
        }
        </tbody>
      </table>
    </>
  )
}

export default WatchHistory