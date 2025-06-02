export interface MetricData {
  metric: string
  current: string
  ideal: string
  trend: string
  category: string
}

export interface DashboardStats {
  dailyActiveUsers: {
    value: number
    change: string
    trend: "up" | "down"
  }
  campaignReplyRate: {
    value: string
    change: string
    trend: "up" | "down"
  }
  icpSearches: {
    value: number
    change: string
    trend: "up" | "down"
  }
  monthlyRevenue: {
    value: string
    change: string
    trend: "up" | "down"
  }
}

export interface ChartData {
  dailyActiveUsers: number[]
  postActivity: {
    label: string
    value: number
    color: string
  }[]
}

// Top Dashboard Metrics
export const dashboardStats: DashboardStats = {
  dailyActiveUsers: {
    value: 2847,
    change: "+12.5% vs last month",
    trend: "up",
  },
  campaignReplyRate: {
    value: "18.3%",
    change: "+2.1% average across campaigns",
    trend: "up",
  },
  icpSearches: {
    value: 1234,
    change: "-5.2% this month",
    trend: "down",
  },
  monthlyRevenue: {
    value: "$45,231",
    change: "+8.7% recurring revenue",
    trend: "up",
  },
}

// Chart Data
export const chartData: ChartData = {
  dailyActiveUsers: [2400, 2600, 2700, 2800, 3000, 2700, 2400],
  postActivity: [
    { label: "Created", value: 1250, color: "bg-purple-400" },
    { label: "Scheduled", value: 890, color: "bg-green-400" },
    { label: "Published", value: 1100, color: "bg-yellow-400" },
    { label: "Deleted", value: 45, color: "bg-red-400" },
  ],
}

// Comprehensive Metrics Data
export const allMetricsData: Record<string, MetricData[]> = {
  Sales: [
    {
      metric: "DMs sent via linkedin - Using 13 Linkedin Accounts",
      current: "387",
      ideal: "400",
      trend: "96.8%",
      category: "Sales",
    },
    {
      metric: "DM Reply Received",
      current: "184",
      ideal: "200",
      trend: "92.0%",
      category: "Sales",
    },
    {
      metric: "Meeting bookings",
      current: "89",
      ideal: "100",
      trend: "89.0%",
      category: "Sales",
    },
    {
      metric: "Opted for free trial",
      current: "76",
      ideal: "80",
      trend: "95.0%",
      category: "Sales",
    },
    {
      metric: "Trial to paid customers",
      current: "28",
      ideal: "30",
      trend: "93.3%",
      category: "Sales",
    },
  ],
  Engagement: [
    {
      metric: "Daily Active users",
      current: "2,847",
      ideal: "3,000",
      trend: "94.9%",
      category: "Engagement",
    },
    {
      metric: "Time to First Action (Post/DM/ICP Search)",
      current: "3.2 min",
      ideal: "2.5 min",
      trend: "78.1%",
      category: "Engagement",
    },
    {
      metric: "Number of posts created via content inspiration module",
      current: "1,234",
      ideal: "1,500",
      trend: "82.3%",
      category: "Engagement",
    },
    {
      metric: "Number of posts created via post generator module per user",
      current: "4.7",
      ideal: "6.0",
      trend: "78.3%",
      category: "Engagement",
    },
    {
      metric: "Number of carousels created via carousel generator per user",
      current: "2.1",
      ideal: "3.0",
      trend: "70.0%",
      category: "Engagement",
    },
    {
      metric: "Number of ideas created via ideas generator module per user",
      current: "8.3",
      ideal: "10.0",
      trend: "83.0%",
      category: "Engagement",
    },
    {
      metric: "Number of posts scheduled per user",
      current: "12.4",
      ideal: "15.0",
      trend: "82.7%",
      category: "Engagement",
    },
    {
      metric: "Number of workspaces created per user",
      current: "1.8",
      ideal: "2.5",
      trend: "72.0%",
      category: "Engagement",
    },
    {
      metric: "Number of posts created via content inspiration module per user",
      current: "5.6",
      ideal: "7.0",
      trend: "80.0%",
      category: "Engagement",
    },
  ],
  Outreach: [
    {
      metric: "Number of linkedin accounts in the outreach campaign per user",
      current: "8.7",
      ideal: "10.0",
      trend: "87.0%",
      category: "Outreach",
    },
    {
      metric: "Number of campaigns created per user",
      current: "3.4",
      ideal: "5.0",
      trend: "68.0%",
      category: "Outreach",
    },
    {
      metric: "Number of campaigns created using template per user",
      current: "2.1",
      ideal: "3.0",
      trend: "70.0%",
      category: "Outreach",
    },
    {
      metric: "Number of campaign created using manually per user",
      current: "1.3",
      ideal: "2.0",
      trend: "65.0%",
      category: "Outreach",
    },
    {
      metric: "Number of DMs sent per user",
      current: "156",
      ideal: "200",
      trend: "78.0%",
      category: "Outreach",
    },
    {
      metric: "Number of replies received via each account per user",
      current: "23",
      ideal: "30",
      trend: "76.7%",
      category: "Outreach",
    },
    {
      metric: "DM Reply Rate per Campaign",
      current: "18.3%",
      ideal: "25.0%",
      trend: "73.2%",
      category: "Outreach",
    },
    {
      metric: "Campaigns with <5% Reply Rate",
      current: "12%",
      ideal: "<8%",
      trend: "67.0%",
      category: "Outreach",
    },
    {
      metric: "% Campaigns Booking Meetings",
      current: "34%",
      ideal: "45%",
      trend: "75.6%",
      category: "Outreach",
    },
    {
      metric: "Avg. Time to First Reply",
      current: "4.2 hrs",
      ideal: "3.0 hrs",
      trend: "71.4%",
      category: "Outreach",
    },
    {
      metric: "Scraper Failures / Proxy Errors",
      current: "3.2%",
      ideal: "<2%",
      trend: "62.5%",
      category: "Outreach",
    },
    {
      metric: "Account Block / Blacklist Rate",
      current: "1.8%",
      ideal: "<1%",
      trend: "55.6%",
      category: "Outreach",
    },
  ],
  "ICP Finder": [
    {
      metric: "Number of ICP Searches per user",
      current: "12.7",
      ideal: "15.0",
      trend: "84.7%",
      category: "ICP Finder",
    },
    {
      metric: "Number of ICP Searches to lead list per user",
      current: "8.9",
      ideal: "12.0",
      trend: "74.2%",
      category: "ICP Finder",
    },
    {
      metric: "Number of ICP Searches to regenerate ICPs per user",
      current: "2.3",
      ideal: "3.0",
      trend: "76.7%",
      category: "ICP Finder",
    },
    {
      metric: "Number of ICP Searches to get more look a like per user",
      current: "4.1",
      ideal: "5.0",
      trend: "82.0%",
      category: "ICP Finder",
    },
    {
      metric: "Number of ICP Searches to export the lead list",
      current: "6.8",
      ideal: "8.0",
      trend: "85.0%",
      category: "ICP Finder",
    },
    {
      metric: "Avg. Time to Complete ICP Discovery",
      current: "8.4 min",
      ideal: "6.0 min",
      trend: "71.4%",
      category: "ICP Finder",
    },
    {
      metric: "ICP Searches → Campaigns Conversion Rate",
      current: "67%",
      ideal: "80%",
      trend: "83.8%",
      category: "ICP Finder",
    },
    {
      metric: "Thumbs Up / Down Ratio on ICP Results",
      current: "4.2:1",
      ideal: "5:1",
      trend: "84.0%",
      category: "ICP Finder",
    },
    {
      metric: "Repeat Usage of Saved Segments",
      current: "43%",
      ideal: "60%",
      trend: "71.7%",
      category: "ICP Finder",
    },
    {
      metric: "Avg. Leads per ICP Search",
      current: "247",
      ideal: "300",
      trend: "82.3%",
      category: "ICP Finder",
    },
  ],
  Onboarding: [
    {
      metric: "Signup to free trial ratio",
      current: "23.4%",
      ideal: "30.0%",
      trend: "78.0%",
      category: "Onboarding",
    },
    {
      metric: "Free Trial to basic",
      current: "12.8%",
      ideal: "18.0%",
      trend: "71.1%",
      category: "Onboarding",
    },
    {
      metric: "Free Trial to growth",
      current: "8.7%",
      ideal: "12.0%",
      trend: "72.5%",
      category: "Onboarding",
    },
    {
      metric: "Free Trial to premium",
      current: "4.2%",
      ideal: "6.0%",
      trend: "70.0%",
      category: "Onboarding",
    },
    {
      metric: "Free Trial to drop off",
      current: "74.3%",
      ideal: "<65%",
      trend: "87.5%",
      category: "Onboarding",
    },
    {
      metric: "Free Trial_D1_Active Users",
      current: "89%",
      ideal: "95%",
      trend: "93.7%",
      category: "Onboarding",
    },
    {
      metric: "Free Trial_D2_Active Users",
      current: "76%",
      ideal: "85%",
      trend: "89.4%",
      category: "Onboarding",
    },
    {
      metric: "Free Trial_D3_Active Users",
      current: "68%",
      ideal: "78%",
      trend: "87.2%",
      category: "Onboarding",
    },
    {
      metric: "Free Trial_D4_Active Users",
      current: "61%",
      ideal: "72%",
      trend: "84.7%",
      category: "Onboarding",
    },
    {
      metric: "Free Trial_D5_Active Users",
      current: "54%",
      ideal: "65%",
      trend: "83.1%",
      category: "Onboarding",
    },
    {
      metric: "Free Trial_D6_Active Users",
      current: "48%",
      ideal: "58%",
      trend: "82.8%",
      category: "Onboarding",
    },
    {
      metric: "Free Trial_D7_Active Users",
      current: "43%",
      ideal: "52%",
      trend: "82.7%",
      category: "Onboarding",
    },
    {
      metric: "Session Duration per User",
      current: "24.7 min",
      ideal: "30.0 min",
      trend: "82.3%",
      category: "Onboarding",
    },
    {
      metric: "% Workspaces with Scheduled Campaigns",
      current: "67%",
      ideal: "80%",
      trend: "83.8%",
      category: "Onboarding",
    },
    {
      metric: "Feature Adoption Rate (Post, DM, ICP etc.)",
      current: "71%",
      ideal: "85%",
      trend: "83.5%",
      category: "Onboarding",
    },
  ],
  Monetization: [
    {
      metric: "Trial-to-Paid Conversion Rate",
      current: "25.7%",
      ideal: "35.0%",
      trend: "73.4%",
      category: "Monetization",
    },
    {
      metric: "Revenue per User / Workspace",
      current: "$127",
      ideal: "$180",
      trend: "70.6%",
      category: "Monetization",
    },
    {
      metric: "Churn Rate by Plan",
      current: "4.8%",
      ideal: "<3.0%",
      trend: "62.5%",
      category: "Monetization",
    },
    {
      metric: "LTV by ICP Segment (Founder, PMM, Agency)",
      current: "$2,340",
      ideal: "$3,200",
      trend: "73.1%",
      category: "Monetization",
    },
    {
      metric: "Top Features Used by Paying Users",
      current: "Post Gen: 89%, DM: 76%, ICP: 68%",
      ideal: "All >80%",
      trend: "77.7%",
      category: "Monetization",
    },
    {
      metric: "Trial Conversion Rate by Module Path",
      current: "Post: 28%, DM: 31%, ICP: 19%",
      ideal: "All >25%",
      trend: "78.7%",
      category: "Monetization",
    },
  ],
  "North Star Metrics": [
    {
      metric: "No of Campaigns Sent from AI-Generated ICPs",
      current: "1,847",
      ideal: "2,500",
      trend: "73.9%",
      category: "North Star Metrics",
    },
    {
      metric: "Qualified Replies per User per Week",
      current: "8.4",
      ideal: "12.0",
      trend: "70.0%",
      category: "North Star Metrics",
    },
  ],
}

// Historical data for trends (last 30 days)
export const historicalData = {
  dailyActiveUsers: Array.from({ length: 30 }, (_, i) => ({
    date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
    value: Math.floor(2500 + Math.random() * 600 + Math.sin(i / 7) * 200),
  })),

  campaignReplyRate: Array.from({ length: 30 }, (_, i) => ({
    date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
    value: Math.round((15 + Math.random() * 8 + Math.sin(i / 5) * 3) * 10) / 10,
  })),

  monthlyRevenue: Array.from({ length: 12 }, (_, i) => ({
    month: new Date(Date.now() - (11 - i) * 30 * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", { month: "short" }),
    value: Math.floor(35000 + Math.random() * 15000 + i * 1000),
  })),
}

// Performance indicators
export const getPerformanceColor = (trend: string): string => {
  const percentage = Number.parseFloat(trend)
  if (percentage >= 80) return "bg-green-100 text-green-800"
  if (percentage >= 70) return "bg-yellow-100 text-yellow-800"
  return "bg-red-100 text-red-800"
}

export const getPerformanceStatus = (trend: string): "excellent" | "good" | "needs-improvement" => {
  const percentage = Number.parseFloat(trend)
  if (percentage >= 80) return "excellent"
  if (percentage >= 70) return "good"
  return "needs-improvement"
}
