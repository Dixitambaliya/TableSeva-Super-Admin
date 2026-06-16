import { LogOut, LayoutDashboard, Store, ShoppingCart, CreditCard, QrCode, ChevronRight, ChevronDown, List, CheckCircle, Package, DollarSign } from "lucide-react";

const sbWrap = "w-64 bg-muted border-r border-border p-4 text-menu-foreground relative";
const sbSection = "mb-2";
const sbSubGroup = "mt-2 ml-3 space-y-1";
const sbLink = "w-full text-left py-3 px-3 flex items-center gap-3 transition hover:bg-accent hover:text-[var(--surface-white)]";
const sbToggle = "w-full flex justify-between items-center py-3 px-3 transition hover:bg-accent hover:text-[var(--surface-white)]";
const sbSubItem = "group py-2 px-3 hover:bg-accent hover:text-[var(--surface-white)] cursor-pointer transition flex items-center gap-2";
const sbIcon = "text-gray-700 group-hover:text-[var(--surface-white)]";

export default function Sidebar({ isOpen, handleNav, vendorOpen, setVendorOpen, orderOpen, setOrderOpen, paymentOpen, setPaymentOpen, handleLogout }) {
  return (
    <div className={`${sbWrap} fixed inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 h-full overflow-y-auto`}>
      <div className="mb-4 border-b border-border pb-4 -m-4 pt-4 text-center">
        <img src="/tableseva-logo.png" alt="TablesevaSuperAdmin" className="h-10 mx-auto" />
      </div>

      <div className={sbSection}>
        <button onClick={() => handleNav("/")} className={sbLink}><LayoutDashboard size={18} /> Dashboard</button>
      </div>

      <div className="mb-2">
        <button onClick={() => setVendorOpen(!vendorOpen)} className={sbToggle}>
          <span className="flex items-center gap-3"><Store size={18} /> Vendor</span>
          {vendorOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </button>
        {vendorOpen && (
          <div className={sbSubGroup}>
            <div onClick={() => handleNav("/vendor-list")} className={sbSubItem}><List size={16} /> Vendor List</div>
            <div onClick={() => handleNav("/approve-reject")} className={sbSubItem}><CheckCircle size={16} /> Approve / Reject</div>
          </div>
        )}
      </div>

      <div className="mb-2">
        <button onClick={() => setOrderOpen(!orderOpen)} className={sbToggle}>
          <span className="flex items-center gap-3"><ShoppingCart size={18} /> Order</span>
          {orderOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </button>
        {orderOpen && <div className="mt-2 ml-3"><div onClick={() => handleNav("/complete-order")} className={sbSubItem}><Package size={16} /> Complete Order</div></div>}
      </div>

      <div className="mb-2">
        <button onClick={() => setPaymentOpen(!paymentOpen)} className={sbToggle}>
          <span className="flex items-center gap-3"><CreditCard size={18} /> Payment</span>
          {paymentOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </button>
        {paymentOpen && <div className="mt-2 ml-3"><div onClick={() => handleNav("/earning")} className={sbSubItem}><DollarSign size={16} /> Earning</div></div>}
      </div>

      <div className={sbSection}>
        <button onClick={() => handleNav("/qr-manage")} className={sbLink}><QrCode size={18} /> QR Manage</button>
      </div>

      <div className="absolute bottom-4 left-0 w-full px-4">
        <button onClick={handleLogout} className={sbLink}><LogOut size={18} /> Logout</button>
      </div>
    </div>
  );
}