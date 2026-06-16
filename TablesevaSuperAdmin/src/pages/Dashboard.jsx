import { useEffect, useRef } from "react";
import { Search, Download, BarChart3, ArrowDownRight, Users, DollarSign } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Lenis from "lenis";

const data = [
    { name: "Week 01", gross: 4000, net: 2400 },
    { name: "Week 02", gross: 3000, net: 1398 },
    { name: "Week 03", gross: 2000, net: 9800 },
    { name: "Week 04", gross: 2780, net: 3908 },
];

const vendorData = [
    { name: "Skyline Bistro", tier: "Premium", order: "482", amt: "$42,500.00", pct: "+8%", img: "/skyline.jpg" },
    { name: "The Leaf House", tier: "Enterprise", order: "312", amt: "$38,120.50", pct: "+12%", img: "/leaf.jpg" },
    { name: "Ocean Grill", tier: "Premium", order: "294", amt: "$29,400.00", pct: "-2%", img: "/ocean.jpg" },
    { name: "Thai Pavilion", tier: "Standard", order: "215", amt: "$22,800.25", pct: "+4%", img: "/thai.jpg" }
];

const StatCard = ({ title, value, subtext, icon: Icon, subtextColor }) => (
    <div className="bg-surface-white p-4 border border-border shadow-sm flex flex-col gap-2 transition-all duration-300 hover:shadow-lg hover:border-accent cursor-pointer">
        <div className="flex items-center justify-between">
            <p className="text-xs font-bold text-gray-foreground uppercase">{title}</p>
            <div className="p-2 bg-background border border-border rounded-none">
                <Icon className="h-4 w-4 text-accent" />
            </div>
        </div>
        <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-bold text-dark-brown">{value}</h3>
            <p className={`text-sm font-bold ${subtextColor}`}>{subtext}</p>
        </div>
    </div>
);

export default function Dashboard() {
    const scrollRef = useRef(null);

    useEffect(() => {
        const lenis = new Lenis({
            wrapper: scrollRef.current,
            content: scrollRef.current,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    function IconButton({ children, label }) {
        return <Button variant="ghost" size="icon" aria-label={label}>{children}</Button>;
    }

    return (
        <div className="h-screen flex flex-col bg-background">
            <header className="flex-none py-5 bg-surface-white border-b border-border flex items-center px-7 justify-between w-full">
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

            <main ref={scrollRef} className="flex-1 w-full overflow-y-auto p-7">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-dark-brown">Revenue Analytics</h1>
                        <p className="text-gray-foreground mt-1">Comprehensive overview of your platform performance and sales.</p>
                    </div>
                    <Button className="bg-accent hover:bg-primary text-surface-white px-6 py-5 font-semibold transition-all rounded-none">
                        <Download className="mr-2 h-4 w-4" /> Export Report
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <StatCard title="TOTAL REVENUE" value="$1,284,500.00" subtext="↗ 12.5%" subtextColor="text-success" icon={DollarSign} />
                    <StatCard title="COMMISSION EARNED" value="$192,675.20" subtext="↗ 8.2%" subtextColor="text-success" icon={BarChart3} />
                    <StatCard title="ACTIVE VENDORS" value="1,482" subtext="Stable" subtextColor="text-gray-foreground" icon={Users} />
                    <StatCard title="AVG. ORDER VALUE" value="$86.40" subtext="↘ 2.1%" subtextColor="text-error" icon={ArrowDownRight} />
                </div>

                <div className="bg-surface-white p-6 border border-border shadow-sm mb-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-bold text-dark-brown">Revenue Trend</h2>
                        <div className="flex items-center gap-4 text-xs font-bold text-gray-foreground">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-primary"></span> Gross Revenue
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-chart-1"></span> Net Commission
                            </div>
                        </div>
                    </div>

                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-soft-gray)" />
                                <XAxis dataKey="name" tick={{ fontSize: 12, fill: 'var(--color-gray-foreground)' }} />
                                <YAxis tick={{ fontSize: 12, fill: 'var(--color-gray-foreground)' }} />
                                <Tooltip />
                                <Area type="monotone" dataKey="gross" stroke="var(--color-primary)" fill="var(--color-orange-pale)" strokeWidth={3} />
                                <Area type="monotone" dataKey="net" stroke="var(--color-chart-1)" fill="var(--color-peach-light)" strokeWidth={3} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <div className="bg-surface-white p-6 border border-border shadow-sm flex flex-col h-[410px]">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-bold text-dark-brown">Monthly Growth</h2>
                            <span className="text-[10px] font-bold text-success bg-success-pale px-2 py-1 rounded">+14% YoY</span>
                        </div>
                        <div className="flex-1 w-full flex items-end justify-between gap-4 px-2">
                            {[
                                { m: 'JAN', h: '40%' }, { m: 'FEB', h: '55%' }, { m: 'MAR', h: '45%' },
                                { m: 'APR', h: '70%' }, { m: 'MAY', h: '90%' }, { m: 'JUN', h: '60%' }
                            ].map((item) => (
                                <div key={item.m} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                                    <div style={{ height: item.h }} className={`w-full rounded-t-sm transition-all duration-500 ${item.m === 'MAY' ? 'bg-primary' : 'bg-orange-pale'}`}></div>
                                    <span className="text-[10px] font-bold text-gray-foreground">{item.m}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2 bg-surface-white p-6 border border-border shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-bold text-dark-brown">Top Performing Vendors</h2>
                            <a href="#" className="text-xs font-bold text-primary">View All</a>
                        </div>
                        <Table>
                            <TableHeader>
                                <TableRow className="border-border hover:bg-transparent">
                                    <TableHead className="text-gray-foreground font-bold text-xs w-full">VENDOR</TableHead>
                                    <TableHead className="text-gray-foreground font-bold text-xs text-right">REVENUE</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {vendorData.map((v, i) => (
                                    <TableRow key={i} className="border-border">
                                        <TableCell className="py-4">
                                            <div className="flex items-center gap-3">
                                                <img src={v.img} alt={v.name} className="h-8 w-8 border border-border object-cover" />
                                                <div className="flex flex-col">
                                                    <p className="font-bold text-dark-brown text-sm">{v.name}</p>
                                                    <p className="text-[10px] text-gray-foreground">{v.tier} Tier • {v.order} Orders</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <p className="font-bold text-dark-brown text-sm">{v.amt}</p>
                                            <p className={`text-[10px] font-bold ${v.pct.startsWith('+') ? 'text-success' : 'text-error'}`}>{v.pct}</p>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </main>
        </div>
    );
}