
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/ThemeToggle"
import { LockButton } from "@/components/LockButton"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { useLocation } from "react-router-dom"

export const Header = () => {
  const location = useLocation()
  
  const getPageTitle = (pathname: string) => {
    const routes: Record<string, string> = {
      '/': 'Dashboard',
      '/products': 'Products',
      '/sales': 'Sales (POS)',
      '/customers': 'Customers',
      '/inventory': 'Inventory',
      '/suppliers': 'Suppliers',
      '/purchase-orders': 'Purchase Orders',
      '/sales-receipts': 'Sales Receipts',
      '/quotations': 'Quotations',
      '/expense-tracking': 'Expense Tracking',
      '/sales-analytics': 'Sales Analytics',
      '/customer-insights': 'Customer Insights',
      '/notifications': 'Notifications',
      '/settings': 'Settings',
      '/backup': 'Backup & Sync',
      '/calendar': 'Calendar',
      '/accounts-receivable': 'Accounts Receivable',
      '/finance': 'Finance Overview',
      '/reports': 'Reports',
    }
    return routes[pathname] || 'Page Not Found'
  }

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="/">
              Usman Hardware
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>{getPageTitle(location.pathname)}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="ml-auto flex items-center gap-2">
        <LockButton />
        <ThemeToggle />
      </div>
    </header>
  )
}
