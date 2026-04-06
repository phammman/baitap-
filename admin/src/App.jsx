import './App.css'
import Topbar from './components/AdminLayout'
// import Sidebar from './components/Sidebar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from './components/AdminLayout';
import Report from './pages/Report';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products/Products';
import Promotion from './pages/Promotion';
import Account from './pages/Account';
import Staff from './pages/Staff/Staff';
import AddProduct from './pages/Products/AddProducts';
// import AddStaff from './pages/Staff/AddStaff';
import AddStaff from './pages/staff/AddStaff';
import MoreAccount from './pages/Account';
import Pos from './pages/pos/Pos';
import AddPromotion from './pages/AddPromotion';
import Setting from './pages/pos/Setting';
import PosLayout from './components/PosLayout';
import OrderSearch from './pages/pos/OrderSearch';
import CashBook from './pages/pos/Cashbook';


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AdminLayout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/promotion" element={<Promotion/>}/>
        <Route path="/dashboard" element={<Report/>}/>
        <Route path="/staff" element={<Staff/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/addProducts" element={<AddProduct/>}/>
        <Route path="/addStaff" element={<AddStaff/>}/>
        <Route path="/moreAccount" element={<MoreAccount/>}/>
        <Route path="/addPromotion" element={<AddPromotion/>}/>
      </Route>


        {/* <Route path="/pos" element={<Pos/>}/>
        <Route path="/pos/setting" element={
            <PosLayout tabs={[]}> 
              <Setting />
            </PosLayout>
          }/> */}

        <Route path="/pos" element={<PosLayout />}>
          <Route index element={<Pos />} />
          <Route path="setting" element={<Setting />} />
          <Route path="orderSearch" element={<OrderSearch />} />
          <Route path="cashBook" element={<CashBook />} />
        </Route>
    </Routes>
      {/* <Topbar/> */}
    </BrowserRouter>

    </>
  )
}

export default App
