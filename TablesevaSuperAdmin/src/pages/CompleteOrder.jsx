import { Search, Bell, HelpCircle, Settings, Download, ChevronLeft, ChevronRight, CalendarDays, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const orderData = [
  { id: "#ORD-9901", customer: "John Doe", email: "john.d@gmail.com", img: "/abc.jpg", vendor: "Spice Garden", service: "Dinner Buffet (4 Pax)", amount: "$120.00", status: "Confirmed", date: "Oct 24, 2023" },
  { id: "#ORD-9902", customer: "Sarah Miller", email: "sarah@outlook.com", img: "/def.jpg", vendor: "The Bistro", service: "Wine Tasting", amount: "$45.00", status: "Pending", date: "Oct 24, 2023" },
  { id: "#ORD-9899", customer: "Robert King", email: "rking@tech.io", img: "/mno.jpg", vendor: "Ocean Grill", service: "Anniversary Table", amount: "$210.00", status: "Completed", date: "Oct 23, 2023" },
  { id: "#ORD-9895", customer: "Alice Lowe", email: "alowe@web.com", img: "/xyz.jpg", vendor: "Spice Garden", service: "Express Lunch", amount: "$32.50", status: "Cancelled", date: "Oct 23, 2023" },
];

export default function CompleteOrder() {
  const getStatusStyle = (status) => {
    switch (status) {
      case "Confirmed": return "bg-success-bg text-success border border-success-border";
      case "Completed": return "bg-accent/10 text-accent";
      case "Pending": return "bg-light-gray text-dark-brown";
      case "Cancelled": return "bg-soft-gray text-dark-brown";
      default: return "bg-light-gray text-dark-brown";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="py-5 bg-surface-white border-b border-border flex items-center px-7 justify-between w-full">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-subtle-foreground" />
          <Input type="text" placeholder="Search vendors, orders, or support..." className="pl-10 bg-background border-border text-dark-brown rounded-none" />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon"><Bell className="h-5 w-5 text-gray-foreground" /></Button>
          <Button variant="ghost" size="icon"><HelpCircle className="h-5 w-5 text-gray-foreground" /></Button>
          <Button variant="ghost" size="icon"><Settings className="h-5 w-5 text-gray-foreground" /></Button>
          <div className="pl-4 border-l border-light-gray ml-2 flex items-center gap-2">
            <span className="font-medium text-sm text-dark-brown">Alice</span>
            <img src="/alice.jpg" alt="Alice Martin" className="h-8 w-8 rounded-none border border-border object-cover" />
          </div>
        </div>
      </header>

      <main className="p-7">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-dark-brown">Orders Management</h1>
            <p className="text-gray-foreground mt-1">View and process table bookings and service orders across all vendors.</p>
          </div>
          <Button className="bg-accent hover:bg-primary text-surface-white px-6 py-5 font-semibold transition-all rounded-none">
            <Download className="mr-2 h-4 w-4" /> Export CSV
          </Button>
        </div>

        <div className="bg-surface-white p-4 border border-border mb-8 grid grid-cols-4 gap-4 items-end">
          <div className="space-y-1">
            <label className="text-xs font-bold text-dark-orange uppercase">Status</label>
            <Select>
              <SelectTrigger className="w-full rounded-none border-border">
                <SelectValue placeholder="All Statuses" />
              </SelectTrigger>
            </Select>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-dark-orange uppercase">Date Range</label>
            <div className="relative flex items-center w-full h-8 border border-border bg-surface-white">
              <div className="pl-3 text-gray-foreground">
                <CalendarDays className="h-5 w-5" />
              </div>
              <Input
                type="text"
                className="w-full h-full border-none shadow-none rounded-none focus-visible:ring-0 text-dark-brown placeholder:text-gray-foreground"
                placeholder="Last 30 Days"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-dark-orange uppercase">Vendor</label>
            <Select>
              <SelectTrigger className="w-full rounded-none border-border">
                <SelectValue placeholder="All Vendors" />
              </SelectTrigger>
            </Select>
          </div>

          <Button className="w-full h-8 bg-peach-bg text-deep-orange font-bold hover:bg-peach-light rounded-none border border-peach-border">
            Reset Filters
          </Button>
        </div>

        <div className="bg-surface-white border border-border">
          <Table>
            <TableHeader className="bg-background">
              <TableRow className="border-b border-border hover:bg-transparent">
                {["ORDER ID", "CUSTOMER", "VENDOR", "SERVICE", "AMOUNT", "STATUS", "DATE"].map(h => (
                  <TableHead key={h} className="text-dark-orange font-bold px-6 py-4 text-left">{h}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {orderData.map((o) => (
                <TableRow key={o.id} className="border-b border-soft-gray">
                  <TableCell className="font-bold text-deep-orange py-4 px-6 text-left">{o.id}</TableCell>
                  <TableCell className="py-4 px-6 flex items-center gap-3 text-left">
                    <img src={o.img} alt={o.customer} className="h-8 w-8 border border-border object-cover" />
                    <div>
                      <p className="font-semibold text-dark-brown text-sm">{o.customer}</p>
                      <p className="text-[11px] text-gray-foreground">{o.email}</p>
                    </div>
                  </TableCell>
                  <TableCell className="text-dark-brown text-sm py-4 px-6 text-left">{o.vendor}</TableCell>
                  <TableCell className="text-dark-brown text-sm py-4 px-6 text-left">{o.service}</TableCell>
                  <TableCell className="font-bold text-dark-brown text-sm py-4 px-6 text-left">{o.amount}</TableCell>
                  <TableCell className="py-4 px-6 text-left">
                    <Badge className={`${getStatusStyle(o.status)} rounded-none font-bold border-none text-xs py-1 px-3 capitalize flex justify-center`}>
                      {o.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-foreground text-sm py-4 px-6 text-left">{o.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="p-4 flex items-center justify-between border-t border-border bg-background">
            <span className="text-sm text-gray-foreground">Showing 1 to 4 of 1,248 orders</span>
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