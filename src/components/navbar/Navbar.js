import React from 'react'

const Navbar = () => {
  return (
    <div className="mainee">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <a className="navbar-brand" href="#">
      <img src="/icons8-nike-50.png" alt="" width="30" height="24" className="d-inline-block align-text-top mainee"/>

    </a>
  <div className="container-fluid mainee">
 
    <a className="navbar-brand active" href="#">New & Featured</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Men</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Women</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Kids</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Accessories</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Sale</a>
        </li>
        
      </ul>
      <form className="d-flex parents" role="search">
     
        <input className="form-control me-2 containers" type="  search"   placeholder="&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Search" aria-label="Search"/>
        <img src="/icons8-search.gif" className="searchs" alt="My Image" />
        
       
      </form>
      <div className='cartset'>
      <img src="/icons8-favorite-48.png" className="cartitem" alt="My Image" />
        <img src="/icons8-shopping-bag-50.png" className="cartitem" alt="My Image" />
        </div>
    </div>
  </div>
</nav>
<style>
        {`


          .mainee{
            background-color: white;
          }
          .containers {
            border-radius: 50px;
           
            
          }
          .parents {
           
            border-radius: 10px;
           
            
          }
          .searchs {
       
            border-radius: 10px;
            height: 20px;
            margin-left: -113px;
            margin-top: 11px;
          
            
          }
          .cartitem {
       
            
            height: 20px;
            margin-left: 20px;
          
            
            
          }
          .container-fluid{
            
            
            margin-left: 150px;
            
            
          }
          .active{
       
            font-size: 15px;
            
            
          }
        `}
      </style>
    </div>
  )
}

export default Navbar




