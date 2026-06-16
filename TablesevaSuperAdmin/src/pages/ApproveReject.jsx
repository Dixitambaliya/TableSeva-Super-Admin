import { Search, Bell, HelpCircle, Plus, Settings, AlertCircle, } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table";
import { Alert, AlertDescription } from "@/components/ui/alert";

const pendingData = [
  {
    name: "Oceanic Blue Dining",
    contact: "Marcus Webb",
    city: "Marseille, France",
    submitted: "2 hours ago",
  },
  {
    name: "The Spice Root",
    contact: "Priya Sharma",
    city: "Mumbai, India",
    submitted: "5 hours ago",
  },
  {
    name: "Alpine Retreat",
    contact: "Hans Müller",
    city: "Zurich, Switzerland",
    submitted: "Yesterday",
  },
];

const IconButton = ({ children, label }) => (
  <Button variant="ghost" size="icon" aria-label={label}>
    {children}
  </Button>
);

export default function ApproveReject() {
  return (
    <div className="min-h-screen bg-background">
      <header className="py-5 bg-surface-white border-b border-border flex items-center px-7 justify-between w-full">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-subtle-foreground" />

          <Input
            type="text"
            placeholder="Search vendors, orders, or support..."
            className="pl-10 bg-background border-border text-dark-brown rounded-none"
          />
        </div>

        <div className="flex items-center gap-2">
          <IconButton label="Notifications">
            <Bell className="h-5 w-5 text-gray-foreground" />
          </IconButton>

          <IconButton label="Help">
            <HelpCircle className="h-5 w-5 text-gray-foreground" />
          </IconButton>

          <IconButton label="Settings">
            <Settings className="h-5 w-5 text-gray-foreground" />
          </IconButton>

          <div className="pl-4 border-l border-light-gray ml-2 flex items-center gap-2">
            <span className="font-medium text-sm text-dark-brown">
              Alice
            </span>

            <img
              src="/alice.jpg"
              alt="Alice Martin"
              className="h-8 w-8 rounded-none border border-border object-cover"
            />
          </div>
        </div>
      </header>

      <main className="p-7">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Vendor Management
            </h1>

            <p className="text-gray-foreground mt-1">
              Review and manage your global network of restaurant partners.
            </p>
          </div>

          <Button className="bg-accent hover:bg-primary text-surface-white px-6 py-5 font-semibold rounded-none">
            <Plus className="mr-2 h-4 w-4" />
            Register New Vendor
          </Button>
        </div>

        <div className="flex mb-8 border-b border-light-gray">
          <button className="px-4 py-2 bg-background text-foreground font-medium text-sm border-l border-r border-t border-light-gray hover:bg-border/20 transition-colors">
            All Vendors
          </button>

          <button className="px-4 py-2 bg-accent
           text-surface-white font-bold text-sm">
            Pending Approvals (12)
          </button>
        </div>

        <Alert className="mb-8 border-border bg-surface-white p-4 rounded-none">
          <AlertCircle className="h-5 w-5 text-accent" />
          <AlertDescription className="text-foreground text-sm">
            There are <strong>12 new vendors</strong> awaiting background
            verification and dashboard approval.
          </AlertDescription>
        </Alert>

        <div className="bg-surface-white border border-border shadow-sm">
          <Table>
            <TableHeader className="bg-background">
              <TableRow className="border-b border-border hover:bg-transparent">
                <TableHead className="text-dark-orange font-bold py-3 px-4">
                  NEW REGISTRANT
                </TableHead>

                <TableHead className="text-dark-orange font-bold py-3 px-4">
                  CITY
                </TableHead>

                <TableHead className="text-dark-orange font-bold py-3 px-4">
                  SUBMITTED
                </TableHead>

                <TableHead className="text-dark-orange font-bold py-3 px-4 text-center w-[220px]">
                  DECISION
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {pendingData.map((vendor) => (
                <TableRow
                  key={vendor.name}
                  className="border-b border-soft-gray"
                >
                  <TableCell className="py-4 px-4">
                    <div>
                      <p className="font-semibold text-dark-brown text-sm">
                        {vendor.name}
                      </p>

                      <p className="text-[11px] text-gray-foreground">
                        Contact: {vendor.contact}
                      </p>
                    </div>
                  </TableCell>

                  <TableCell className="py-3 px-4 text-sm text-dark-brown">
                    {vendor.city}
                  </TableCell>

                  <TableCell className="py-3 px-4 text-sm text-dark-brown">
                    {vendor.submitted}
                  </TableCell>

                  <TableCell className="py-3 px-4">
                    <div className="flex justify-center items-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-deep-orange text-deep-orange hover:bg-peach-bg rounded-none">
                        Reject
                      </Button>

                      <Button
                        size="sm"
                        className="bg-success hover:bg-success-dark text-surface-white rounded-none">
                        Approve
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
}
