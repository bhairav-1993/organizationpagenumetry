import React from 'react'
import "./homepage.css"

const Homepage = () => {
  return (
    <>
    <div className='main-container'>
 
   <div className='first-container'>
    <div className='button-drpdown-container'>
      <div className='aa'>
      <h5>Acadamic Year</h5>
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle bt" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    2023-2024
  </button>
  <ul class="dropdown-menu">
    <li><a className="dropdown-item" href="#6">2023-2024</a></li>
    <li><a className="dropdown-item" href="#5">2022-2023</a></li>
    <li><a className="dropdown-item" href="#4">2021-2022</a></li>
  </ul>
</div>
</div>
<div className='aa'>
<h5>Branch</h5>
<div class="dropdown">
  <button className="btn btn-secondary dropdown-toggle bt" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Ethiken Education Society
  </button>
  <ul class="dropdown-menu">
    <li><a className="dropdown-item" href="#3">Action</a></li>
    <li><a className="dropdown-item" href="#2">Another action</a></li>
    <li><a className="dropdown-item" href="#1">Something else here</a></li>
  </ul>
</div>
</div>
<button className='btn btn-primary primary-button'>GET</button>
    </div>
   <div className='login-details-container'>
<div>
<p> <span>Login Url</span> : corp46.myclassboard.com</p>
<p> <span>Default student username</span> : EntrollmentCode </p>
<p> <span>Default student Alias username</span> : Admission No</p>
<p> <span>Default Password for student/parent </span> : Mobile No </p>
</div>
<div>
<p> <span>Default parent username</span> : p_EntrollmentCode  </p>
<p> <span>Default parent Alias username</span> : pAdmission No</p>

</div>
   </div>
   </div>

   <div className='acadamic-year-container'>
    <h4>Acadamic Year: 2023-2024, Branch Name : Ethiken Education Society</h4>
   </div>
   
<div className='branch-setting-container'>
   <div className='branch-setting-container-first-part'>
    <p className='branch-setting-container-p'>Branch Basic Settings </p>
    <p> Currrent Acadamic Year : <span className='span-data'>2023-2024</span></p>
    <p> PreAdmission Acadamic Year : <span className='span-data'>2023-2024</span></p>
    <p> State Name : <span className='span-data'>Telangana</span></p>
    <p>City Name : <span className='span-data'>Hydrabad</span></p>
    <p> Acadamic Year Month : <span className='span-data'><a href='#a'>Yes</a></span></p>
   </div>

   <hr/>

   <div className='table-container'>
    <table>
      <tr>
        <th className='th'>Branch type</th>
        <th>Organisation SMS SenderId</th>
        <th>EntrollmentCode Perfix</th>
        <th>Branch SMS SenderId</th>
        <th>Branch ShortCode</th>
        <th>Biometric Device</th>
        <th>VTS Device</th>
        <th>Receipt type</th>
        <th>Online Reciept</th>
        <th>Manual Reciept</th>
      </tr>

      <tr>
        <td className='td'>Junior collage</td>
        <td>-</td>
        <td>EES</td>
        <td>-</td>
        <td>EES</td>
        <td>NO</td>
        <td>NO</td>
        <td>Automatic</td>
        <td>Auto Generated Reciept</td>
        <td>Auto Generated Reciept</td>
      </tr>
    </table>
   </div>
</div>  

















    <div className='info-container'>
      <div className='details-outside-container'>

      <div className='detaile-info-container'>
      <h5>Principle Details</h5>
      <table className='table-info'>
        <tr>
          <th className='th'>Priniciple Name</th>
          <th>User Name</th>
          <th>Mobile No</th>
          <th>Email Id</th>
        </tr>
        <tr>
          <td className='td'>dfghg</td>
          <td>sdhgf</td>
          <td>ghgfdfghgf</td>
          <td>xyz@ghj</td>
        </tr>
      </table>
      </div>

      <div className='detaile-info-container ss'>
      <h5>Class Teacher Details</h5>
      <table className='table-info'>
        <tr >
          <th className='th1 th'>Course Name</th>
          <th className='th1'>Section</th>
          <th className='th1'>Class Teacher Name</th>
          <th className='th1'>User Name</th>
          <th className='th1'>Mobile No</th>
          <th className='th1'>Email Id</th>
        </tr>
        <tr>
          <td className='td'>dfghg</td>
          <td>sdhgf</td>
          <td>ghgfdfghgf</td>
          <td>xyz@ghj</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className='td'>dfghg</td>
          <td>sdhgf</td>
          <td>ghgfdfghgf</td>
          <td>xyz@ghj</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className='td'>dfghg</td>
          <td>sdhgf</td>
          <td>ghgfdfghgf</td>
          <td>xyz@ghj</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className='td'>dfghg</td>
          <td>sdhgf</td>
          <td>ghgfdfghgf</td>
          <td>xyz@ghj</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className='td'>dfghg</td>
          <td>sdhgf</td>
          <td>ghgfdfghgf</td>
          <td>xyz@ghj</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className='td'>dfghg</td>
          <td>sdhgf</td>
          <td>ghgfdfghgf</td>
          <td>xyz@ghj</td>
          <td></td>
          <td></td>
        </tr>
      </table>
      </div>
    </div>






 
   
    <div className='details-outside-container1'>

      <div className='detaile-info-container'>
      <h5>Account Details</h5>
      <table className='table-info'>
        <tr>
          <th className='th'>Account Name</th>
          <th>User Name</th>
          <th>Mobile No</th>
          <th>Email Id</th>
        </tr>
        <tr>
          <td className='td'></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
      </div>

      <div className='detaile-info-container'>
      <h5>Fee Plan Details</h5>
      <table className='table-info'>
        <tr>
          <th className='th'>Course Name</th>
          <th>New Students</th>
          <th>Existing Students</th>
         
        </tr>
        <tr>
          <td className='td'>dfghg</td>
          <td>sdhgf</td>
          <td>ghgfdfghgf</td>
       
        </tr>
        
        <tr>
          <td className='td'>dfghg</td>
          <td>sdhgf</td>
          <td>ghgfdfghgf</td>
       
        </tr>
      </table>
      </div>
    </div>
  </div>







    </div>
    </>
  )
}

export default Homepage