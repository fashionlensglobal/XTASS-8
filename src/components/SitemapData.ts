export interface SitemapItem {
  num: string;
  to: string;
  title: string;
  description: string;
}

export interface SitemapSection {
  title: string;
  items: SitemapItem[];
}

export const sitemapData: SitemapSection[] = [
  {
    "title": "Main Pages",
    "items": [
      {
        "num": "1.",
        "to": "/",
        "title": "Home",
        "description": "XTASS homepage with booking form and service overview"
      },
      {
        "num": "2.",
        "to": "/sitemap",
        "title": "Sitemap",
        "description": "Full directory of every page on the XTASS platform"
      },
      {
        "num": "3.",
        "to": "/start-reservation",
        "title": "Start a Reservation",
        "description": "The main booking entry page with the full reservation form"
      },
      {
        "num": "4.",
        "to": "/manage-reservation",
        "title": "Manage Reservation",
        "description": "Look up and modify or cancel an existing booking"
      },
      {
        "num": "5.",
        "to": "/service-areas",
        "title": "Service Areas",
        "description": "View the regions, cities, and airports where XTASS operates"
      },
      {
        "num": "6.",
        "to": "/pricing",
        "title": "Pricing Information",
        "description": "Learn about our fixed, all-inclusive pricing structure"
      },
      {
        "num": "7.",
        "to": "/safety-guidelines",
        "title": "Safety Guidelines",
        "description": "Review our driver vetting and vehicular inspection standards"
      },
      {
        "num": "8.",
        "to": "/careers",
        "title": "Careers",
        "description": "Join the XTASS team as a driver or corporate professional"
      },
      {
        "num": "9.",
        "to": "/press",
        "title": "Press & Media",
        "description": "Official announcements and brand assets for journalists"
      },
      {
        "num": "10.",
        "to": "/emergency",
        "title": "Emergency Hotline",
        "description": "Immediate 24/7 assistance for urgent trip and security matters"
      },
      {
        "num": "11.",
        "to": "/rental-faqs",
        "title": "Rental FAQs",
        "description": "Frequently asked questions about car rental rates and policies"
      },
      {
        "num": "12.",
        "to": "/report-issue",
        "title": "Report an Issue",
        "description": "Report a problem with a trip, vehicle, or booking"
      },
      {
        "num": "13.",
        "to": "/lost-found",
        "title": "Lost & Found",
        "description": "Report and track items left behind in a vehicle"
      },
      {
        "num": "14.",
        "to": "/terms-conditions",
        "title": "Terms & Conditions",
        "description": "Full legal terms governing the use of the XTASS platform"
      },
      {
        "num": "15.",
        "to": "/privacy-policy",
        "title": "Privacy Policy",
        "description": "How we collect, use, and protect your personal data"
      },
      {
        "num": "16.",
        "to": "/cookie-policy",
        "title": "Cookie Policy",
        "description": "How XTASS uses cookies to improve your digital experience"
      },
      {
        "num": "17.",
        "to": "/refund-cancel-policy",
        "title": "Refund & Cancellation",
        "description": "Transparent policies for changes and cancellations"
      },
      {
        "num": "18.",
        "to": "/driver-agreement",
        "title": "Driver Agreement",
        "description": "Professional obligations for XTASS personnel"
      },
      {
        "num": "19.",
        "to": "/community-guidelines",
        "title": "Community Guidelines",
        "description": "Fostering a safe environment for drivers and passengers"
      },
      {
        "num": "20.",
        "to": "/data-protection",
        "title": "Data Protection Policy",
        "description": "Compliance with the Ghana Data Protection Act"
      },
      {
        "num": "21.",
        "to": "/compliance-safety",
        "title": "Compliance & Safety Policy",
        "description": "Regulatory compliance and vehicle standards"
      },
      {
        "num": "22.",
        "to": "/licensing-information",
        "title": "Licensing Information",
        "description": "Company registration and transport licensing details"
      },
      {
        "num": "23.",
        "to": "/insurance-coverage",
        "title": "Insurance Coverage",
        "description": "Insurance coverage for passengers and vehicles"
      },
      {
        "num": "24.",
        "to": "/session-timeout",
        "title": "Session Timeout",
        "description": "Booking session expiry and resumption"
      },
      {
        "num": "25.",
        "to": "/help-support",
        "title": "Help & Support",
        "description": "In-app support hub with contact options and shortcuts"
      }
    ]
  },
  {
    "title": "Vehicles & Services",
    "items": [
      {
        "num": "26.",
        "to": "/instant-pickup",
        "title": "Instant Pickup",
        "description": "On-demand transport — nearest driver dispatched immediately"
      },
      {
        "num": "27.",
        "to": "/scheduled-pickup",
        "title": "Scheduled Pickup",
        "description": "Plan and pre-book your ride for any future date and time"
      },
      {
        "num": "28.",
        "to": "/airport-transfers",
        "title": "Airport Transfers",
        "description": "Reliable airport connections at all 6 Ghana airports"
      },
      {
        "num": "29.",
        "to": "/group-transportation",
        "title": "Group Transportation",
        "description": "Larger vehicles for families, events, and team travel"
      },
      {
        "num": "30.",
        "to": "/accessibility",
        "title": "Accessibility Transport",
        "description": "Inclusive mobility options for passengers with special needs"
      },
      {
        "num": "31.",
        "to": "/one-way-rental",
        "title": "One-Way Rental",
        "description": "Pick up at one location, drop off at another"
      },
      {
        "num": "32.",
        "to": "/long-term-rental",
        "title": "Long-Term Rental",
        "description": "Weekly or monthly rental discounts with unlimited mileage"
      },
      {
        "num": "33.",
        "to": "/weekend-rental",
        "title": "Weekend Rental",
        "description": "Off-peak weekend rental rates with flexible Sunday returns"
      },
      {
        "num": "34.",
        "to": "/vehicle-fleet",
        "title": "Vehicle Fleet",
        "description": "Complete details and classifications of the XTASS fleet"
      },
      {
        "num": "35.",
        "to": "/vehicle-comparison",
        "title": "Vehicle Comparison",
        "description": "Compare specifications to choose the right vehicle"
      },
      {
        "num": "36.",
        "to": "/available-vehicles",
        "title": "Available Vehicles",
        "description": "List of available vehicles for the selected ride type"
      },
      {
        "num": "37.",
        "to": "/vehicle-detail/v1",
        "title": "Vehicle Detail",
        "description": "Full specification sheet for a ride-pickup vehicle"
      },
      {
        "num": "38.",
        "to": "/rental-vehicle-detail/r1",
        "title": "Rental Vehicle Detail",
        "description": "Premium detail view for a Car Rental vehicle"
      },
      {
        "num": "39.",
        "to": "/driver-details/d1",
        "title": "Driver Details",
        "description": "Profile of the assigned XTASS driver and vehicle"
      },
      {
        "num": "40.",
        "to": "/payment-selection",
        "title": "Payment Selection",
        "description": "Choose payment method for immediate payment"
      },
      {
        "num": "41.",
        "to": "/payment-processing",
        "title": "Payment Processing",
        "description": "Loading and success/failure states for payment"
      },
      {
        "num": "42.",
        "to": "/rental-confirmation",
        "title": "Rental Booking Confirmation",
        "description": "Review details specific to car rentals before reserving"
      }
    ]
  },
  {
    "title": "Authentication",
    "items": [
      {
        "num": "43.",
        "to": "/signin",
        "title": "Sign In",
        "description": "Log in to your XTASS customer account"
      },
      {
        "num": "44.",
        "to": "/register",
        "title": "Register",
        "description": "Create a new XTASS customer account"
      },
      {
        "num": "45.",
        "to": "/forgot-password",
        "title": "Forgot Password",
        "description": "Reset your password via email or phone number"
      },
      {
        "num": "46.",
        "to": "/verify-otp",
        "title": "OTP Verification",
        "description": "Verify your identity using a 6-digit one-time code"
      },
      {
        "num": "47.",
        "to": "/live-photo-login",
        "title": "Live Photo Login",
        "description": "Log in using a live selfie capture"
      },
      {
        "num": "48.",
        "to": "/post-login-verification",
        "title": "Post-Login Verification",
        "description": "Security interstitial after successful login"
      },
      {
        "num": "49.",
        "to": "/booking/step-1",
        "title": "Booking Step 1: Trip Details",
        "description": "Select trip type, location, schedule, and passenger requirements"
      },
      {
        "num": "50.",
        "to": "/booking/step-2",
        "title": "Booking Step 2: Location & Schedule",
        "description": "Visual confirmation of trip details"
      },
      {
        "num": "51.",
        "to": "/booking/step-3",
        "title": "Booking Step 3: Choose Vehicle",
        "description": "Browse and filter premium fleet options"
      },
      {
        "num": "52.",
        "to": "/booking/step-4",
        "title": "Booking Step 4: Optional Extras",
        "description": "Add protection coverages and equipment add-ons"
      },
      {
        "num": "53.",
        "to": "/booking/step-5",
        "title": "Booking Step 5: Review & Reserve",
        "description": "Review details, policies, and confirm booking"
      },
      {
        "num": "54.",
        "to": "/booking-confirmation",
        "title": "Booking Confirmation",
        "description": "Success screen with assigned booking ID and summary"
      },
      {
        "num": "55.",
        "to": "/trip-tracking",
        "title": "Trip Tracking",
        "description": "Real-time driver location and trip status tracking"
      },
      {
        "num": "56.",
        "to": "/trip-receipt",
        "title": "Trip Receipt",
        "description": "Completed trip summary, fare breakdown, and rating prompt"
      },
      {
        "num": "57.",
        "to": "/dashboard",
        "title": "Customer Dashboard",
        "description": "Personalized home screen with upcoming trips and booking shortcuts"
      },
      {
        "num": "58.",
        "to": "/my-bookings",
        "title": "My Bookings",
        "description": "List of all customer's bookings (Upcoming, Active, Completed, Cancelled)"
      },
      {
        "num": "59.",
        "to": "/booking-detail/XTA-12345",
        "title": "Booking Detail",
        "description": "Full detail view of a single booking"
      },
      {
        "num": "60.",
        "to": "/modify-booking/XTA-12345",
        "title": "Modify Booking",
        "description": "Change details of an upcoming booking"
      },
      {
        "num": "61.",
        "to": "/cancel-booking/XTA-12345",
        "title": "Cancel Booking",
        "description": "Cancel an upcoming booking"
      },
      {
        "num": "62.",
        "to": "/trip-history",
        "title": "Trip History",
        "description": "Chronological timeline of past completed and cancelled trips"
      },
      {
        "num": "63.",
        "to": "/account",
        "title": "My Account",
        "description": "Main account management hub"
      },
      {
        "num": "64.",
        "to": "/profile-edit",
        "title": "Profile Edit",
        "description": "Update personal profile information"
      },
      {
        "num": "65.",
        "to": "/saved-passengers",
        "title": "Saved Passengers",
        "description": "Manage saved profiles for regular co-passengers"
      },
      {
        "num": "66.",
        "to": "/emergency-contacts",
        "title": "Emergency Contacts",
        "description": "Manage up to 3 emergency contacts"
      },
      {
        "num": "67.",
        "to": "/saved-payment-methods",
        "title": "Saved Payment Methods",
        "description": "Manage saved credit cards and mobile money accounts"
      },
      {
        "num": "68.",
        "to": "/saved-locations",
        "title": "Saved Locations",
        "description": "Manage frequently used pickup and dropoff locations"
      },
      {
        "num": "69.",
        "to": "/security-settings",
        "title": "Security Settings",
        "description": "Change password, enable 2FA, and manage sessions"
      },
      {
        "num": "70.",
        "to": "/notification-preferences",
        "title": "Notification Preferences",
        "description": "Control SMS, email, and in-app alert settings"
      },
      {
        "num": "71.",
        "to": "/recently-viewed",
        "title": "Recently Viewed & Favourites",
        "description": "List of saved and recently visited vehicles"
      }
    ]
  },
  {
    "title": "4. Admin Control Panel",
    "items": [
      {
        "num": "72.",
        "to": "/admin/login",
        "title": "Admin Login",
        "description": "Secure login for authorised staff"
      },
      {
        "num": "73.",
        "to": "/admin/recovery",
        "title": "Admin Password Recovery",
        "description": "Password reset flow for admins"
      },
      {
        "num": "74.",
        "to": "/admin/dashboard",
        "title": "Admin Dashboard Overview",
        "description": "High-level view of platform operational status"
      },
      {
        "num": "75.",
        "to": "/admin/reservations",
        "title": "All Reservations",
        "description": "Complete list of all platform bookings"
      },
      {
        "num": "76.",
        "to": "/admin/reservations/XTA-1234",
        "title": "Reservation Detail",
        "description": "Full detail view and admin controls for a single booking"
      },
      {
        "num": "77.",
        "to": "/admin/reservations/create",
        "title": "Create Reservation",
        "description": "Manually create a booking on behalf of a customer"
      },
      {
        "num": "78.",
        "to": "/admin/reservations/XTA-1234/edit",
        "title": "Modify Reservation",
        "description": "Modify any field in an existing booking"
      },
      {
        "num": "79.",
        "to": "/admin/cancel-reservation/XTA-1234",
        "title": "Cancel Reservation",
        "description": "Cancel an existing booking"
      },
      {
        "num": "80.",
        "to": "/admin/fleet",
        "title": "Fleet Overview",
        "description": "Main fleet management screen for company-owned vehicles"
      },
      {
        "num": "81.",
        "to": "/admin/fleet/add",
        "title": "Add Vehicle",
        "description": "Form for registering a new company-owned vehicle"
      },
      {
        "num": "82.",
        "to": "/admin/fleet/V-101/edit",
        "title": "Edit Vehicle",
        "description": "Pre-filled form for updating an existing fleet vehicle"
      },
      {
        "num": "83.",
        "to": "/admin/fleet/V-101",
        "title": "Vehicle Detail",
        "description": "Full profile view for a single fleet vehicle"
      },
      {
        "num": "84.",
        "to": "/admin/fleet/V-101/availability",
        "title": "Vehicle Availability",
        "description": "Month-view calendar showing availability status"
      },
      {
        "num": "85.",
        "to": "/admin/fleet/V-101/maintenance",
        "title": "Vehicle Maintenance",
        "description": "Complete maintenance history and logging"
      },
      {
        "num": "86.",
        "to": "/admin/fleet/pricing",
        "title": "Vehicle Classes & Pricing",
        "description": "Editable rate matrix for setting pricing across classes"
      },
      {
        "num": "87.",
        "to": "/admin/fleet/V-101/images",
        "title": "Vehicle Images",
        "description": "Manage photos displayed for a specific vehicle"
      },
      {
        "num": "88.",
        "to": "/admin/locations",
        "title": "All Locations",
        "description": "List of all service locations"
      },
      {
        "num": "89.",
        "to": "/admin/locations/add",
        "title": "Add Location",
        "description": "Form for adding a new service location"
      },
      {
        "num": "90.",
        "to": "/admin/locations/LOC-001/edit",
        "title": "Edit Location",
        "description": "Pre-filled form for updating an existing location"
      },
      {
        "num": "91.",
        "to": "/admin/locations/LOC-001",
        "title": "Location Detail",
        "description": "Full profile view for a single location"
      },
      {
        "num": "92.",
        "to": "/admin/customers",
        "title": "Customer List",
        "description": "List of all registered customers"
      },
      {
        "num": "93.",
        "to": "/admin/customers/CUST-001",
        "title": "Customer Profile",
        "description": "Full customer profile in the admin panel"
      },
      {
        "num": "94.",
        "to": "/admin/customers/CUST-001/bookings",
        "title": "Customer Bookings",
        "description": "Complete booking history for a specific customer"
      },
      {
        "num": "95.",
        "to": "/admin/customers/CUST-001/payments",
        "title": "Customer Payments",
        "description": "Admin view of all customer payment transactions"
      },
      {
        "num": "96.",
        "to": "/admin/drivers",
        "title": "Driver List",
        "description": "Complete roster of all employed XTASS drivers"
      },
      {
        "num": "97.",
        "to": "/admin/drivers/earnings",
        "title": "Driver Earnings Overview",
        "description": "All driver earnings records and withdrawal management"
      },
      {
        "num": "98.",
        "to": "/admin/rates",
        "title": "Rate Dashboard",
        "description": "Admin screen for viewing and editing platform pricing"
      },
      {
        "num": "99.",
        "to": "/admin/rates/add",
        "title": "Add Custom Rate",
        "description": "Form for creating or editing rate rules"
      },
      {
        "num": "100.",
        "to": "/admin/extras/protection",
        "title": "Protection Products",
        "description": "Manage protection extras in booking flow"
      },
      {
        "num": "101.",
        "to": "/admin/extras/equipment",
        "title": "Equipment Management",
        "description": "Manage equipment accessories available in booking"
      },
      {
        "num": "102.",
        "to": "/admin/extras/equipment/add",
        "title": "Add Extra Item",
        "description": "Form for creating or updating extra items"
      },
      {
        "num": "103.",
        "to": "/admin/content/homepage",
        "title": "Homepage Editor",
        "description": "WYSIWYG editor for homepage content sections"
      },
      {
        "num": "104.",
        "to": "/admin/content/faqs",
        "title": "FAQ Management",
        "description": "Manage FAQ entries and ordering"
      },
      {
        "num": "105.",
        "to": "/admin/content/articles",
        "title": "Article List",
        "description": "List of all blog and news articles"
      },
      {
        "num": "106.",
        "to": "/admin/articles/add",
        "title": "Add/Edit Article",
        "description": "Full editor for blog posts and news"
      },
      {
        "num": "107.",
        "to": "/admin/content/deals",
        "title": "Deals Content Editor",
        "description": "Edits the content displayed on the public Deals & Coupons page"
      },
      {
        "num": "108.",
        "to": "/admin/content/policies",
        "title": "Policy Pages Management",
        "description": "Lists all legal and policy pages with an edit option for each"
      },
      {
        "num": "109.",
        "to": "/admin/content/vehicles",
        "title": "Vehicle Type Pages Management",
        "description": "Edits the content of the three vehicle type detail pages"
      },
      {
        "num": "110.",
        "to": "/admin/content/services",
        "title": "Service Pages Management",
        "description": "Edits the content of each service detail page"
      },
      {
        "num": "111.",
        "to": "/admin/reports/revenue",
        "title": "Revenue Report",
        "description": "Financial analytics dashboard showing total revenue"
      },
      {
        "num": "112.",
        "to": "/admin/reports/bookings",
        "title": "Booking & Reservation Report",
        "description": "Analytics dashboard showing booking volume and trends"
      },
      {
        "num": "113.",
        "to": "/admin/reports/fleet",
        "title": "Vehicle Utilisation Report",
        "description": "Analytics showing how efficiently the fleet is used"
      },
      {
        "num": "114.",
        "to": "/admin/reports/customers",
        "title": "Customer Analytics",
        "description": "Analytics focused on customer behaviour and demographics"
      },
      {
        "num": "115.",
        "to": "/admin/reports/drivers",
        "title": "Driver Performance Report",
        "description": "Analytics comparing performance metrics across drivers"
      },
      {
        "num": "116.",
        "to": "/admin/notifications",
        "title": "Notification Management",
        "description": "Overview and creation of system notifications"
      },
      {
        "num": "117.",
        "to": "/admin/settings/emails",
        "title": "Email Template Management",
        "description": "Manages all automated email templates"
      },
      {
        "num": "118.",
        "to": "/admin/settings/sms",
        "title": "SMS Template Management",
        "description": "Manages all automated SMS templates"
      },
      {
        "num": "119.",
        "to": "/admin/settings/general",
        "title": "General Settings",
        "description": "Platform-wide configuration settings"
      },
      {
        "num": "120.",
        "to": "/admin/settings/security",
        "title": "Session & Security Settings",
        "description": "Security configuration for bookings and auth"
      },
      {
        "num": "121.",
        "to": "/admin/settings/payments",
        "title": "Payment Display Settings",
        "description": "Configures available payment methods"
      },
      {
        "num": "122.",
        "to": "/admin/settings/airports",
        "title": "Supported Airports & Locations",
        "description": "Manages airports served as service locations"
      },
      {
        "num": "123.",
        "to": "/admin/settings/cancellation",
        "title": "Cancellation Policy Settings",
        "description": "Configures cancellation fee rules"
      },
      {
        "num": "124.",
        "to": "/admin/settings/booking-rules",
        "title": "Booking Rules Configuration",
        "description": "Configures operational booking rules"
      },
      {
        "num": "125.",
        "to": "/admin/settings/extras",
        "title": "Extras & Add-Ons Configuration",
        "description": "Controls Extras step displayed to customers"
      },
      {
        "num": "126.",
        "to": "/admin/operations/live",
        "title": "Live Operations Dashboard",
        "description": "Real-time overview of all platform trips"
      },
      {
        "num": "127.",
        "to": "/admin/operations/map",
        "title": "Active Trips Map Screen",
        "description": "Full-width map view showing active XTASS driver positions"
      },
      {
        "num": "128.",
        "to": "/admin/logs/activity",
        "title": "Activity Log Screen",
        "description": "Timestamped record of all admin actions"
      },
      {
        "num": "129.",
        "to": "/admin/logs/system",
        "title": "System Events Log Screen",
        "description": "Automated system event log tracking"
      },
      {
        "num": "130.",
        "to": "/admin/settings/sitemap",
        "title": "Sitemap Overview Screen",
        "description": "Admin view of the public Sitemap page"
      },
      {
        "num": "131.",
        "to": "/driver/login",
        "title": "Driver Login Screen",
        "description": "Login for employed XTASS drivers"
      },
      {
        "num": "132.",
        "to": "/driver/forgot-password",
        "title": "Driver Password Recovery",
        "description": "Password reset for employed drivers"
      },
      {
        "num": "133.",
        "to": "/driver/setup-password",
        "title": "Driver Setup Password",
        "description": "First-time login password setup"
      },
      {
        "num": "134.",
        "to": "/driver/profile",
        "title": "My Employment Profile",
        "description": "Read-only employment profile"
      },
      {
        "num": "135.",
        "to": "/driver/vehicle",
        "title": "Assigned Vehicle Screen",
        "description": "Details of assigned company vehicle"
      },
      {
        "num": "136.",
        "to": "/driver/dashboard",
        "title": "Driver Dashboard Screen",
        "description": "Main screen for employed XTASS drivers"
      },
      {
        "num": "137.",
        "to": "/driver/trip-request",
        "title": "Trip Request Screen",
        "description": "Read-only incoming booking request details"
      },
      {
        "num": "138.",
        "to": "/driver/trip-management",
        "title": "Trip Management Screen",
        "description": "Active trip progression and controls"
      },
      {
        "num": "139.",
        "to": "/driver/trip-completion",
        "title": "Trip Completion Screen",
        "description": "Fare summary and passenger rating"
      },
      {
        "num": "140.",
        "to": "/driver/earnings",
        "title": "Earnings Dashboard Screen",
        "description": "Driver's detailed earnings history and daily/weekly charts"
      },
      {
        "num": "141.",
        "to": "/driver/settings",
        "title": "Driver Settings Screen",
        "description": "Notification and app preferences"
      },
      {
        "num": "142.",
        "to": "/driver/support",
        "title": "Driver Support Screen",
        "description": "Contact operations and report issues"
      },
      {
        "num": "143.",
        "to": "/driver/history",
        "title": "Driver Trip History Screen",
        "description": "Complete history of all completed trips"
      }
    ]
  }
];
