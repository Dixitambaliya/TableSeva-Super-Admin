import { LogOut, LayoutDashboard, Store, ShoppingCart, CreditCard, QrCode, ChevronRight, ChevronDown, List, CheckCircle, Package, DollarSign } from "lucide-react";

const sbWrap = "w-64 bg-muted border-r border-border p-4 text-menu-foreground flex flex-col h-full";
const sbSection = "mb-2";
const sbSubGroup = "mt-2 ml-3 space-y-1";
const sbLink = "w-full text-left py-3 px-3 flex items-center gap-3 transition hover:bg-accent/80 hover:text-white";
const activeLink = "bg-accent text-white";
const sbToggle = "w-full flex justify-between items-center py-3 px-3 transition hover:bg-accent/80 hover:text-white";
const sbSubItem = "group py-2 px-3 hover:bg-accent/80 hover:text-white cursor-pointer transition flex items-center gap-2";

export default function Sidebar({ isOpen, handleNav, vendorOpen, setVendorOpen, orderOpen, setOrderOpen, paymentOpen, setPaymentOpen, handleLogout, activePath }) {
  const isVendorActive = activePath === "/vendor-list" || activePath === "/approve-reject";
  const isOrderActive = activePath === "/complete-order";
  const isPaymentActive = activePath === "/earning";

  return (
    <div className={`${sbWrap} fixed inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 overflow-hidden`}>
      <div className="mb-4 border-b border-border pb-4 -m-4 pt-4 text-center">
        <img src="/tableseva-logo.png" alt="TablesevaSuperAdmin" className="h-10 mx-auto" />
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className={sbSection}>
          <button onClick={() => handleNav("/")} className={`${sbLink} ${activePath === "/" ? activeLink : ""}`}>
            <LayoutDashboard size={18} /> Dashboard
          </button>
        </div>

        <div className="mb-2">
          <button onClick={() => setVendorOpen(!vendorOpen)} className={`${sbToggle} ${isVendorActive ? "bg-accent/20 text-accent" : ""}`}>
            <span className="flex items-center gap-3"><Store size={18} /> Vendor</span>
            {vendorOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          </button>
          {vendorOpen && (
            <div className={sbSubGroup}>
              <div onClick={() => handleNav("/vendor-list")} className={`${sbSubItem} ${activePath === "/vendor-list" ? activeLink : ""}`}><List size={16} /> Vendor List</div>
              <div onClick={() => handleNav("/approve-reject")} className={`${sbSubItem} ${activePath === "/approve-reject" ? activeLink : ""}`}><CheckCircle size={16} /> Approve / Reject</div>
            </div>
          )}
        </div>

        <div className="mb-2">
          <button onClick={() => setOrderOpen(!orderOpen)} className={`${sbToggle} ${isOrderActive ? "bg-accent/20 text-accent" : ""}`}>
            <span className="flex items-center gap-3"><ShoppingCart size={18} /> Order</span>
            {orderOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          </button>
          {orderOpen && <div className="mt-2 ml-3"><div onClick={() => handleNav("/complete-order")} className={`${sbSubItem} ${activePath === "/complete-order" ? activeLink : ""}`}><Package size={16} /> Complete Order</div></div>}
        </div>

        <div className="mb-2">
          <button onClick={() => setPaymentOpen(!paymentOpen)} className={`${sbToggle} ${isPaymentActive ? "bg-accent/20 text-accent" : ""}`}>
            <span className="flex items-center gap-3"><CreditCard size={18} /> Payment</span>
            {paymentOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          </button>
          {paymentOpen && <div className="mt-2 ml-3"><div onClick={() => handleNav("/earning")} className={`${sbSubItem} ${activePath === "/earning" ? activeLink : ""}`}><DollarSign size={16} /> Earning</div></div>}
        </div>

        <div className={sbSection}>
          <button onClick={() => handleNav("/qr-manage")} className={`${sbLink} ${activePath === "/qr-manage" ? activeLink : ""}`}>
            <QrCode size={18} /> QR Manage
          </button>
        </div>
      </div>

      <div className="border-t border-border pt-4 mt-auto">
        <button
          onClick={handleLogout}
          className="w-full text-left py-3 px-3 flex items-center gap-3 bg-primary text-primary-foreground font-bold transition hover:bg-accent">
          <LogOut size={18} /> Logout
        </button>
      </div>
    </div>
  );
}