import { Search, ChevronLeft, ChevronRight, CalendarDays, LayoutDashboard, Wallet, Users, CheckCircle2, DollarSign } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const stats = [
  { title: "PLATFORM EARNINGS", value: "$482,900", sub: "+12.5%", color: "text-success", icon: Wallet },
  { title: "TODAY'S EARNINGS", value: "$12,450", sub: "", color: "text-dark-brown", icon: DollarSign },
  { title: "THIS MONTH", value: "$156,020", sub: "", color: "text-dark-brown", icon: CalendarDays },
  { title: "TOTAL VENDORS", value: "1,248", sub: "", color: "text-dark-brown", icon: Users },
  { title: "COMPLETED", value: "8,412", sub: "", color: "text-success", icon: CheckCircle2 },
];

const vendorData = [
  { id: "BB", name: "Burger Bistro", email: "j.doe@example.com", phone: "+1234 567 890", tables: 10, orders: 142, sales: "$14,250.00", earning: "$10,582.50", status: "Active", img: "/burger.jpg" },
  { id: "SH", name: "Sushi House", email: "info@sushihouse.com", phone: "+1987 654 321", tables: 20, orders: 89, sales: "$9,120.00", earning: "$6,902.00", status: "Active", img: "/sushi.jpg" },
  { id: "PF", name: "Pasta Factory", email: "sales@pastafactory.net", phone: "+1444 333 222", tables: 30, orders: 210, sales: "$21,450.00", earning: "$16,065.00", status: "Inactive", img: "/pasta.jpg" },
];

export default function EarningPage() {
  const headerTitles = ["VENDOR / RESTAURANT NAME", "CONTACT INFO", "TOTAL TABLES", "TOTAL ORDERS", "TOTAL SALES", "VENDOR EARNING"];

  return (
    <div className="min-h-screen bg-background">
      <header className="py-5 bg-surface-white border-b border-border flex items-center px-7 justify-between w-full">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-subtle-foreground" />
          <Input type="text" placeholder="Search vendors, orders, or support..." className="pl-10 bg-background border-border text-dark-brown rounded-none" />
        </div>
        <div className="flex items-center gap-2">
          <div className="pl-4 border-l border-light-gray ml-2 flex items-center gap-2">
            <span className="font-medium text-sm text-dark-brown">Alice</span>
            <img src="/alice.jpg" alt="Alice Martin" className="h-8 w-8 rounded-none border border-border object-cover" />
          </div>
        </div>
      </header>

      <main className="p-7">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-dark-brown">Payment Earnings</h1>
            <p className="text-gray-foreground mt-1">Oversee all platform financial flows and vendor settlements.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="bg-surface-white p-4 border border-border shadow-sm flex flex-col gap-2 transition-all duration-300 hover:shadow-lg hover:border-accent cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <p className="text-[12px] font-bold text-gray-foreground uppercase">
                    {s.title}
                  </p>
                  <div className="p-2 bg-background border border-border">
                    <Icon className="h-4 w-4 text-accent" />
                  </div>
                </div>

                <div className="flex items-baseline justify-between mt-1">
                  <h3 className="text-xl font-bold text-dark-brown">{s.value}</h3>
                  {s.sub && (
                    <span className={`text-[10px] font-bold ${s.color}`}>
                      {s.sub}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-surface-white p-4 border border-border mb-8 grid grid-cols-5 gap-4 items-end">
          <div className="space-y-1 col-span-1 relative">
            <label className="text-xs font-bold text-dark-orange uppercase">Search Vendor</label>
            <div className="relative">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-subtle-foreground" />
              <Input
                placeholder="Name, Email, Phone..."
                className="pl-8 rounded-none border-border h-8"
              />
            </div>
          </div>

          <div className="space-y-1 col-span-1">
            <label className="text-xs font-bold text-dark-orange uppercase">Date Range</label>
            <div className="relative flex items-center w-full h-8 border border-border bg-surface-white">
              <div className="pl-3 text-gray-foreground">
                <CalendarDays className="h-5 w-5" />
              </div>
              <Input type="date" className="w-full h-full border-none shadow-none rounded-none focus-visible:ring-0 text-dark-brown" />
            </div>
          </div>

          <div className="space-y-1 col-span-1">
            <label className="text-xs font-bold text-dark-orange uppercase">Payment Status</label>
            <Select>
              <SelectTrigger className="w-full rounded-none border-border ">
                <SelectValue placeholder="All Payments" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Payments</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1 col-span-1">
            <label className="text-xs font-bold text-dark-orange uppercase">Vendor Status</label>
            <Select>
              <SelectTrigger className="w-full rounded-none border-border">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-end">
            <Button className="w-full h-8 bg-peach-bg text-deep-orange font-bold hover:bg-peach-light rounded-none border border-peach-border">
              Clear Filters
            </Button>
          </div>
        </div>

        <div className="bg-surface-white border border-border">
          <Table>
            <TableHeader className="bg-background">
              <TableRow className="border-b border-border hover:bg-transparent">
                {headerTitles.map((t) => (
                  <TableHead key={t} className="font-bold text-dark-orange px-6 py-4">{t}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {vendorData.map((v) => (
                <TableRow key={v.id} className="border-b border-soft-gray ">
                  <TableCell className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={v.img}
                        alt={v.name}
                        className="w-8 h-8 object-cover border border-border"
                      />
                      <div>
                        <p className="font-bold text-dark-brown text-sm">{v.name}</p>
                        <Badge className={`${v.status === "Active" ? "bg-success-bg text-success" : "bg-soft-gray text-gray-foreground"} text-[10px] rounded-none border-none py-0.5 px-2`}>{v.status}</Badge>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <p className="text-sm font-bold text-dark-brown">{v.email}</p>
                    <p className="text-xs text-gray-foreground">{v.phone}</p>
                  </TableCell>
                  <TableCell className="font-bold text-dark-brown text-sm px-6 py-4">{v.tables}</TableCell>
                  <TableCell className="font-bold text-dark-brown text-sm px-6 py-4">{v.orders}</TableCell>
                  <TableCell className="font-bold text-dark-brown text-sm px-6 py-4">{v.sales}</TableCell>
                  <TableCell className="font-bold text-primary text-sm px-6 py-4">{v.earning}</TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="p-4 flex items-center justify-between border-t border-border bg-background">
            <span className="text-sm text-gray-foreground">Showing 1 to 10 of 1,248 vendors</span>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="border-light-gray rounded-none px-2 text-gray-foreground"><ChevronLeft className="h-4 w-4" /></Button>
              <Button className="bg-accent text-surface-white rounded-none w-8 h-8 p-0 hover:bg-primary">1</Button>
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