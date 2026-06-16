import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Menu, X, LayoutDashboard, Store, ShoppingCart, CreditCard, QrCode, ChevronRight, ChevronDown, List, CheckCircle, Package, DollarSign, BarChart3 } from "lucide-react";
import Dashboard from "./pages/Dashboard";
import VendorList from "./pages/VendorList";
import ApproveReject from "./pages/ApproveReject";
import CompleteOrder from "./pages/CompleteOrder";
import Earning from "./pages/Earning";
import QRManage from "./pages/QRManage";
import ReportAnalytics from "./pages/ReportAnalytics";

const sbWrap = "w-64 bg-muted border-r border-border p-4 text-menu-foreground";
const sbLogo = "mb-4 text-center";
const sbDivider = "mb-6 -mx-4 border-b border-border";
const sbSection = "mb-2";
const sbSub = "mt-2 ml-3";
const sbSubGroup = "mt-2 ml-3 space-y-1";
const sbLink = "w-full text-left py-3 px-3 flex items-center gap-3 transition hover:bg-accent hover:text-[var(--surface-white)]";
const sbToggle = "w-full flex justify-between items-center py-3 px-3 transition hover:bg-accent hover:text-[var(--surface-white)]";
const sbSubItem = "group py-2 px-3 hover:bg-accent hover:text-[var(--surface-white)] cursor-pointer transition flex items-center gap-2";
const sbIcon = "text-primary group-hover:text-[var(--surface-white)]";

function SidebarLink({ icon: Icon, label, onClick }) {
  return (
    <button onClick={onClick} className={sbLink}>
      <Icon size={18} />
      {label}
    </button>
  );
}

function SidebarToggle({ icon: Icon, label, open, onToggle, children }) {
  return (
    <div className="mb-2">
      <button onClick={onToggle} className={sbToggle}>
        <span className="flex items-center gap-3">
          <Icon size={18} />
          {label}
        </span>
        {open ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
      </button>
      {open && children}
    </div>
  );
}

function SidebarSubItem({ icon: Icon, label, onClick }) {
  return (
    <div onClick={onClick} className={sbSubItem}>
      <Icon size={16} className={sbIcon} />
      {label}
    </div>
  );
}

function SidebarLogo() {
  return (
    <div className="mb-4 border-b border-border pb-4 -m-4 pt-4">
      <div className="text-center">
        <img src="/tableseva-logo.png" alt="TablesevaSuperAdmin" className="h-10 mx-auto" />
      </div>
    </div>
  );
}

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

  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground">
      <button
        className="md:hidden p-4 fixed top-0 left-0 z-50 text-foreground"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`${sbWrap} fixed inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 h-full overflow-y-auto`}>
        <SidebarLogo />

        <div className="">
          <div className={sbSection}>
            <SidebarLink icon={LayoutDashboard} label="Dashboard" onClick={() => handleNav("/")} />
          </div>

          <SidebarToggle
            icon={Store}
            label="Vendor"
            open={vendorOpen}
            onToggle={() => setVendorOpen(!vendorOpen)}
          >
            <div className={sbSubGroup}>
              <SidebarSubItem icon={List} label="Vendor List" onClick={() => handleNav("/vendor-list")} />
              <SidebarSubItem icon={CheckCircle} label="Approve / Reject" onClick={() => handleNav("/approve-reject")} />
            </div>
          </SidebarToggle>

          <SidebarToggle
            icon={ShoppingCart}
            label="Order"
            open={orderOpen}
            onToggle={() => setOrderOpen(!orderOpen)}
          >
            <div className={sbSub}>
              <SidebarSubItem icon={Package} label="Complete Order" onClick={() => handleNav("/complete-order")} />
            </div>
          </SidebarToggle>

          <SidebarToggle
            icon={CreditCard}
            label="Payment"
            open={paymentOpen}
            onToggle={() => setPaymentOpen(!paymentOpen)}
          >
            <div className={sbSub}>
              <SidebarSubItem icon={DollarSign} label="Earning" onClick={() => handleNav("/earning")} />
            </div>
          </SidebarToggle>

          <div className={sbSection}>
            <SidebarLink icon={QrCode} label="QR Manage" onClick={() => handleNav("/qr-manage")} />
          </div>

          <div className={sbSection}>
            <SidebarLink icon={BarChart3} label="Report & Analytics" onClick={() => handleNav("/report-analytics")} />
          </div>
        </div>
      </div>

      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <main className="flex-1 h-full overflow-y-auto pt-16 md:pt-0">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/vendor-list" element={<VendorList />} />
          <Route path="/approve-reject" element={<ApproveReject />} />
          <Route path="/complete-order" element={<CompleteOrder />} />
          <Route path="/earning" element={<Earning />} />
          <Route path="/qr-manage" element={<QRManage />} />
          <Route path="/report-analytics" element={<ReportAnalytics />} />
        </Routes>
      </main>
    </div>
  );
}