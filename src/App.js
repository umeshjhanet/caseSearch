import React, { useEffect, useState } from 'react';
import './App.css'; // Import the CSS file
import { IoSearch } from "react-icons/io5";
import axios from 'axios';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCaseType, setSelectedCaseType] = useState('');
  const [selectedCaseYear, setSelectedCaseYear] = useState('');
  const [tableData, setTableData] = useState([]);
  const[caseData,setCaseData]=useState([]);

  useEffect(()=>{
    const fetchCaseData = async() => {
      try {
        const response = await axios.get("http://103.62.239.162:8081/caseSearch/allCases");
        setCaseData(response.data);
        console.log('Response Data:', response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchCaseData();
  },[]);
  

  const handleSearch = () => {
    const dummyData = [
      { id: 1, name: 'e-filling no.', value: '1323' },
      { id: 2, name: 'e-Filing  Type', value: 'civil' },
      { id: 3, name: 'e-Filing Date', value: '01-03-23' },
      { id: 4, name: 'CNR Number', value: '1323' },
      { id: 5, name: 'Case Status', value: 'pending' },
      { id: 6, name: 'Act / Section', value: '133A' },
      { id: 7, name: 'Petitioner Name', value: 'Anuj' },
      { id: 8, name: 'Petitioner Advocate Name', value: 'Ajay' },
      { id: 9, name: 'Respondent Name', value: '1323' },
      { id: 10, name: 'Respondent Advocate Name', value: '1323' },
      { id: 11, name: 'Previous Hearing date', value: '1323' },
      { id: 12, name: 'Previous Hearing Description', value: '1323' },
      { id: 13, name: 'Next hearing date', value: '1323' },
      { id: 14, name: 'Judgement date', value: '1323' },
      { id: 15, name: 'Judge Name', value: '1323' },
      { id: 16, name: 'FIR Year', value: '1323' },
      { id: 17, name: 'Chargesheet No.', value: '1323' },
      { id: 18, name: 'Police Station Name', value: '1323' },
    ];
    setTableData(dummyData);
  };
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = 1960; i <= currentYear; i++) {
    years.push(i);
  }

  return (
    <>
      <div className='container main-container' >
        {/* <img src='/background.jpg' style={{width:"1024px",height:"1024px"}}/> */}
        <nav class="navbar" style={{ backgroundColor: "#B8621B", borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }}>
  <div class="container-fluid d-flex justify-content-center">
    <a class="navbar-brand text-white" href="#">
      Case Search
    </a>
  </div>
</nav>

        <div className="container-fluid">
          <div className='row'>
            <div className='card' style={{ backgroundColor: '#F6BA6F', padding: '25px',borderRadius:'0px 0px 30px 30px' }} >
              <div className='row'>
                <div className='col-3'>
                  <select
                    value={selectedCaseType}
                    onChange={(e) => setSelectedCaseType(e.target.value)}
                  >
                    <option value="" style={{ color: 'gray' }}>Select Case Type</option>
                    <option value="option1">Civil Case</option>
                    <option value="option2">Criminal Case</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                <div className='col-3'>
                  <select
                    value={selectedCaseYear}
                    onChange={(e) => setSelectedCaseYear(e.target.value)}
                  >
                    <option value="">Select Case Year</option>
                    {years.map((year) => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
                <div className='col-3'>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Case Number"
                  />
                </div>
                <div className='col-3'>
                  <button onClick={handleSearch}><IoSearch style={{ fontSize: '16px' }} /> Search</button>
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-2 ms-5 me-5'>
            <div className='' style={{ padding: '10px', border: 'none' }}>
              <div className='row'>
                <div className='col-6 card-1'>
                  <div className='entity-card'>
                    <h5 className=''>e-Filing No:</h5>
                    <h5  className='mt-3'>e-Filing  Type:</h5>
                    <h5  className='mt-3'>e-Filing Date:</h5>
                    <h5  className='mt-3'>CNR Number:</h5>
                    <h5  className='mt-3'>Case Status:</h5>
                    <h5  className='mt-3'>Act / Section:</h5>
                    <h5  className='mt-3'>Petitioner Name:</h5>
                    <h5  className='mt-3'>Petitioner Advocate Name:</h5>
                    <h5  className='mt-3'>Respondent Name:</h5>
                  </div>
                </div>
                <div className='col-6 card-2'>
                  <div className='entity-card'>
                    <h5  className=''>Respondent Advocate Name:</h5>
                    <h5  className='mt-3'>Previous Hearing date:</h5>
                    <h5  className='mt-3'>Previous Hearing Description:</h5>
                    <h5  className='mt-3'>Next hearing date:</h5>
                    <h5  className='mt-3'>Judgement date:</h5>
                    <h5  className='mt-3'>Judge Name:</h5>
                    <h5  className='mt-3'>FIR Year:</h5>
                    <h5  className='mt-3'>Chargesheet No.:</h5>
                    <h5  className='mt-3'>Police Station Name:</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default App;

