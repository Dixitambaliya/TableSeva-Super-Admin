import { Search, Bell, HelpCircle, Plus, Filter, ArrowUpDown, ChevronLeft, ChevronRight, Settings, TrendingUp, Zap, Ban, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const vendorData = [
  { id: "TS-9210", name: "Le Petit Bistro", rest: "Fine Dining", city: "Paris", date: "Oct 12, 2023", status: "Active", img: "/abc.jpg" },
  { id: "TS-8832", name: "The Urban Deck", rest: "Lounge / Bar", city: "New York", date: "Nov 05, 2023", status: "Active", img: "/def.jpg" },
  { id: "TS-7129", name: "Heritage Grains", rest: "Bakery", city: "London", date: "Dec 18, 2023", status: "Suspended", img: "/mno.jpg" },
  { id: "TS-4410", name: "Sakura Zenith", rest: "Authentic Japanese", city: "Tokyo", date: "Jan 02, 2024", status: "Active", img: "/xyz.jpg" },
];

const pendingData = [
  { id: "TS-1294", name: "Willow & Co.", rest: "Bistro", city: "Berlin", date: "Feb 10, 2024", status: "Pending", img: "/def.jpg" },
  { id: "TS-5555", name: "Marina Table", rest: "Seafood", city: "Sydney", date: "Feb 12, 2024", status: "Pending", img: "/mno.jpg" },
  { id: "TS-7731", name: "Rosewood Kitchen", rest: "Brasserie", city: "Barcelona", date: "Feb 15, 2024", status: "Pending", img: "/xyz.jpg" },
];

const StatCard = ({ title, value, subtext, icon: Icon, subtextColor }) => (
  <div className="bg-surface-white p-4 border border-border/50 shadow-sm flex flex-col gap-2 transition-all duration-300 hover:shadow-lg hover:border-accent/50 hover:-translate-y-1 cursor-pointer">
    <div className="flex items-center justify-between">
      <p className="text-sm font-medium text-gray-foreground">{title}</p>
      <Icon className="h-5 w-5 text-accent" />
    </div>
    <h3 className="text-2xl font-bold text-dark-brown">{value}</h3>
    <p className={`text-sm font-medium ${subtextColor}`}>{subtext}</p>
  </div>
);

export default function VendorPage() {
  const headerTitles = ["VENDOR NAME", "RESTAURANTS NAME", "CITY", "JOIN DATE", "STATUS", "ACTION"];

  function IconButton({ children, label }) {
    return <Button variant="ghost" size="icon" aria-label={label}>{children}</Button>;
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="py-5 bg-surface-white border-b border-border flex items-center px-7 justify-between w-full">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-subtle-foreground" />
          <Input type="text" placeholder="Search vendors, orders, or support..." className="pl-10 bg-background border-border text-dark-brown rounded-none" />
        </div>
        <div className="flex items-center gap-2">
          <IconButton label="Notifications"><Bell className="h-5 w-5 text-gray-foreground" /></IconButton>
          <IconButton label="Help"><HelpCircle className="h-5 w-5 text-gray-foreground" /></IconButton>
          <IconButton label="Settings"><Settings className="h-5 w-5 text-gray-foreground" /></IconButton>
          <div className="pl-4 border-l border-light-gray ml-2 flex items-center gap-2">
            <span className="font-medium text-sm text-dark-brown">Alice</span>
            <img src="/alice.jpg" alt="Alice Martin" className="h-8 w-8 rounded-none border border-border object-cover" />
          </div>
        </div>
      </header>

      <main className="p-7">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-dark-brown">Vendor Management</h1>
            <p className="text-gray-foreground mt-1">Review and manage your global network of restaurant partners.</p>
          </div>
          <Button className="bg-accent hover:bg-primary text-surface-white px-6 py-5 font-semibold transition-all rounded-none">
            <Plus className="mr-2 h-4 w-4" /> Register New Vendor
          </Button>
        </div>

        <div className="flex mb-8 border-b border-light-gray">
          <button className="px-4 py-2 bg-accent text-surface-white font-bold text-sm">All Vendors</button>
          <button className="px-4 py-2 bg-background text-dark-brown font-medium text-sm border-r border-t border-light-gray hover:bg-border/20 transition-colors">
            Pending Approvals (12)
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="TOTAL VENDORS" value="1,284" subtext="↗ +12.5% vs last month" subtextColor="text-success" icon={TrendingUp} />
          <StatCard title="ACTIVE NOW" value="842" subtext="⚡ 65% Engagement Rate" subtextColor="text-accent" icon={Zap} />
          <StatCard title="SUSPENDED" value="14" subtext="∅ 1.2% Risk Level" subtextColor="text-dark-orange" icon={Ban} />
          <StatCard title="AVG. RATING" value="4.8" subtext="★ Industry Leader" subtextColor="text-secondary" icon={Star} />
        </div>

        <div className="bg-surface-white border border-border shadow-sm">
          <div className="p-4 border-b border-border flex justify-between items-center">
            <h2 className="text-lg font-bold text-dark-brown">Active Partners</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-border text-primary rounded-none hover:bg-input">
                <Filter className="w-4 h-4 mr-2" /> Filter
              </Button>
              <Button variant="outline" size="sm" className="border-border text-primary rounded-none hover:bg-input">
                <ArrowUpDown className="w-4 h-4 mr-2" /> Sort
              </Button>
            </div>
          </div>
          <Table>
            <TableHeader className="bg-background">
              <TableRow className="border-b border-border hover:bg-transparent">
                {headerTitles.map((t) => (
                  <TableHead key={t} className="text-dark-orange font-bold py-3 px-4">{t}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {vendorData.map((v) => (
                <TableRow key={v.id} className="border-b border-soft-gray">
                  <TableCell className="py-4 px-4 flex items-center gap-2">
                    <img src={v.img} alt={v.name} className="h-8 w-8 border border-border object-cover" />
                    <div>
                      <p className="font-semibold text-dark-brown text-sm">{v.name}</p>
                      <p className="text-[11px] text-gray-foreground">ID: {v.id}</p>
                    </div>
                  </TableCell>
                  <TableCell className="py-3 px-4 text-sm text-dark-brown">{v.rest}</TableCell>
                  <TableCell className="py-3 px-4 text-sm text-dark-brown">{v.city}</TableCell>
                  <TableCell className="py-3 px-4 text-sm text-dark-brown">{v.date}</TableCell>
                  <TableCell className="py-3 px-4">
                    <Badge className={`${v.status === "Active" ? "bg-success-bg text-success" : "bg-light-gray text-dark-brown"} rounded-none font-bold border-none text-xs py-1 px-2`}>
                      {v.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="py-3 px-4 text-sm">
                    <button type="button" className="font-bold text-primary hover:text-dark-orange cursor-pointer bg-transparent border-none p-0">View Details</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="p-4 flex items-center justify-between border-t border-border bg-background">
            <span className="text-sm text-gray-foreground">Showing 1 to 4 of 1,284 entries</span>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="border-light-gray rounded-none px-2 text-gray-foreground"><ChevronLeft className="h-4 w-4" /></Button>
              <Button variant="default" size="sm" className="bg-accent text-surface-white rounded-none w-8 h-8 p-0 hover:bg-primary">1</Button>
              <Button variant="outline" size="sm" className="border-light-gray text-dark-brown bg-surface-white rounded-none w-8 h-8 p-0">2</Button>
              <Button variant="outline" size="sm" className="border-light-gray text-dark-brown bg-surface-white rounded-none w-8 h-8 p-0">3</Button>
              <Button variant="outline" size="sm" className="border-light-gray rounded-none px-2 text-gray-foreground"><ChevronRight className="h-4 w-4" /></Button>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
