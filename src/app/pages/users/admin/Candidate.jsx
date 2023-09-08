import React from 'react'
import Sidebar from "../admin/common/Sidebar"
import SearchBar from './common/Searchbar'
import Menu from "./common/menu";
import Table from"./common/table";
import Axios from '../../../utils/axios';
import Loader from '../../users/admin/common/Loader';
import { useState, useEffect } from 'react';
const Candidate = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]); // State to store the fetched data

  const fetchGetAllCandidate = async () => {
    setLoading(true);
    try {
      const response = await Axios.get('/getalljobseeker');   // GIVING ALL CANDIDATES ACTIVE + INACTIVE
      setData(response.data.data); // Update the state with fetched data
      console.log(response.data.data)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGetAllCandidate  ();
  }, []);

  return (
    <div>
      <Sidebar/>
      <SearchBar/>
      <Menu/>
      {/* <Table label1={"User ID"} label2={"Name"} label3={"Applied on"} label4={"Contact"} field5={"Date/Time"}/> */}
      {loading ? <h1><Loader/></h1> : <Table data={data} />}
    </div>
  )
}

export default Candidate
