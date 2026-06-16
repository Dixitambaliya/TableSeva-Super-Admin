import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Sidebar from "./pages/Sidebar";
import Dashboard from "./pages/Dashboard";
import VendorList from "./pages/VendorList";
import ApproveReject from "./pages/ApproveReject";
import CompleteOrder from "./pages/CompleteOrder";
import Earning from "./pages/Earning";
import QRManage from "./pages/QRManage";

export default function App() {
  const navigate = useNavigate();
  const [vendorOpen, setVendorOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleNav = (path) => {
    navigate(path);
    setIsMobileOpen(false);
  };

  const handleLogout = () => {
    console.log("Logged out");
    navigate("/login");
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground">
      <button className="md:hidden p-4 fixed top-0 left-0 z-50" onClick={() => setIsMobileOpen(!isMobileOpen)}>
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <Sidebar 
        isOpen={isMobileOpen} 
        handleNav={handleNav}
        vendorOpen={vendorOpen} setVendorOpen={setVendorOpen}
        orderOpen={orderOpen} setOrderOpen={setOrderOpen}
        paymentOpen={paymentOpen} setPaymentOpen={setPaymentOpen}
        handleLogout={handleLogout}
      />

      <main className="flex-1 h-screen overflow-hidden pt-16 md:pt-0">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/vendor-list" element={<VendorList />} />
          <Route path="/approve-reject" element={<ApproveReject />} />
          <Route path="/complete-order" element={<CompleteOrder />} />
          <Route path="/earning" element={<Earning />} />
          <Route path="/qr-manage" element={<QRManage />} />
        </Routes>
      </main>
    </div>
  );
}