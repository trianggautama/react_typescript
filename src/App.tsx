import React from 'react';
import './App.css';
// import FormLogin from './component/formLogin';
import UserList from './component/UserList';
// import Counter from './component/Counter';
// import Greeting from './component/Greeting';
// import Customer from './component/Customer';
// import CustomerClass from './component/CustomerClass';
// import Employe from './component/Employe';
// import EmployeClass from './component/EmployeClass';

function App() {
  return (
   <React.Fragment>
      <div className="container mt-4">
          <div className="grid">
             <div className="row">
               <div className="col"><h4 className='text-success fw-bold'>React Typescript example</h4></div>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta at dicta culpa doloribus rem animi inventore quod itaque numquam, temporibus nobis asperiores molestiae expedita provident, praesentium nam sit cupiditate excepturi?</p>
               <button className='btn btn-sm btn-success'><i className='fas fa-home'></i> Go To ...</button>
             </div>
             {/* <div className="row">
               <div className="col">
                 <Customer name={'tri angga'} age={24} adress={'Banjarbaru'}></Customer>
               </div>
             </div>
             <div className="row">
               <div className="col">
                 <CustomerClass name={'tegar utama'} age={25} adress={'Banjarmasin'}></CustomerClass>
               </div>
             </div>
             <div className="row mt-4">
               <div className="col">
                 <Employe ></Employe>
               </div>
             </div>
             <div className="row mt-4">
               <div className="col">
                 <EmployeClass ></EmployeClass>
               </div>
             </div> */}
              {/* <div className="row mt-4">
               <div className="col">
                 <Counter ></Counter>
               </div>
             </div>
             <div className="row mt-4">
               <div className="col">
                 <Greeting ></Greeting>
               </div>
             </div> */}
              {/* <div className="row mt-4">
               <div className="col">
                 <FormLogin ></FormLogin>
               </div>
             </div> */}
              <div className="row mt-4">
               <div className="col">
                 <UserList ></UserList>
               </div>
             </div>
           </div>
      </div>
   </React.Fragment>
  );
}

export default App;
