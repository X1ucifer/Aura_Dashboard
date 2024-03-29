import {
  AlertCircle,
  Bold,
  Droplet,
  Gift,
  HelpCircle,
  Home,
  Image,
  Link,
  MapPin,
  MessageCircle,
  Navigation,
  PieChart,
  Sidebar,
  Terminal,
  Type,
  Underline,
  User
} from 'react-feather';

export default [
  {
    path: '/',
    name: 'Home',
    icon: <Home strokeWidth={1} size={16} />
  },
  {
    name: 'User Modules',
    icon: <MessageCircle strokeWidth={1} size={16} />,
    children: [
      {
        path: '/apps/calendar',
        name: 'Customer'
      },
      {
        path: '/apps/messages',
        name: 'Customer Wallet'
      },
      
    ]
  },
  {
    path: '/widgets',
    name: 'Module Mangement',
    icon: <Droplet strokeWidth={1} size={16} />,
    // badge: {
    //   value: '5'
    // }
    children: [
      {
        path: '/apps/calendar',
        name: 'Zone Setup'
      },
    ]
  },
  {
    path: '/taskboard',
    name: 'Promotions',
    icon: <Sidebar strokeWidth={1} size={16} />,
    // badge: {
    //   value: 'New'
    // }
    children: [
      {
        path: '/apps/calendar',
        name: 'Banners'
      },
      {
        path: '/apps/calendar',
        name: 'Coupons'
      },
      {
        path: '/apps/calendar',
        name: 'Push Notifications'
      },
    ]
  },
  {
    path: '/taskboard',
    name: 'Order Management',
    icon: <Sidebar strokeWidth={1} size={16} />,
    // badge: {
    //   value: 'New'
    // },
    children:[
      {
        path: '/charts/plots',
        name: 'Orders' 
      },
      {
        path: '/charts/plots',
        name: 'Orders Refunds' 
      },
    ]
  },
  {
    name: 'Item Management',
    icon: <PieChart strokeWidth={1} size={16} />,
    children: [
      {
        path: '/charts/plots',
        name: 'Categories'
      },
      {
        path: '/charts/axes',
        name: 'Sub Categories'
      },
      {
        path: '/charts/legends',
        name: 'Bulk import'
      },
      {
        path: '/charts/sunburst',
        name: 'Add Items'
      },
      {
        path: '/charts/radial',
        name: 'Reviews'
      },
      {
        path: '/charts/sankeys',
        name: 'Items Bulk Export'
      },
      
    ]
  },
  {
    name: 'Store Management',
    icon: <Image strokeWidth={1} size={16} />,
    children: [
      {
        path: '/media/grid',
        name: 'Add store'
      },
      {
        path: '/media/tile',
        name: 'Store List'
      }, {
        path: '/media/grid',
        name: 'Bulk import'
      },
     
    ]
  },
  {
    name: 'Delivery Management',
    icon: <MapPin strokeWidth={1} size={16} />,
    children: [
      {
        path: '/maps/markers',
        name: 'Add Delivery Management'
      },
      {
        path: '/maps/geojson',
        name: 'Delivery Management List'
      },
      {
        path: '/maps/geojson',
        name: 'Reviews'
      }
    ]
  },
  {
    name: 'Bussiness management',
    icon: <Gift strokeWidth={1} size={16} />,
    children: [
      {
        path: '/extras/invoice',
        name: 'Store Withdraws'
      },
      {
        path: '/extras/timeline',
        name: 'Collect Cash'
      },
  
    ]
  },
  {
    name: 'Settings',
    icon: <User strokeWidth={1} size={16} />,
    children: [
      {
        path: '/signin',
        name: 'App Settings'
      },
      {
        path: '/signup',
        name: 'Landing Page Settings'
      },
      {
        path: '/forgot',
        name: 'Third partys APIs'
      },
      {
        path: '/lockscreen',
        name: 'Page Setup'
      },
      {
        path: '/lockscreen',
        name: 'Social Login'
      },
    ]
  },
  {
    name: 'Reports and Analytics',
    icon: <AlertCircle strokeWidth={1} size={16} />,
    children: [
      {
        path: '/thisroutedoesntwork',
        name: 'Pay Wise Report'
      },
      {
        path: '/500',
        name: 'Item Wise Report'
      },
      {
        path: '/500',
        name: 'Store Wise Report'
      },
      {
        path: '/500',
        name: 'Expense Report'
      },
      {
        path: '/500',
        name: 'Limited Stock Items'
      },
    ]
  },
  {
    name: 'Employee Managements',
    icon: <Bold strokeWidth={1} size={16} />,
    children: [
      {
        path: '/general/button',
        name: 'Employee Role'
      },
      {
        path: '/general/icon',
        name: 'Employee Add'
      }, {
        path: '/general/icon',
        name: 'Employee List'
      }
    ]
  },
  // {
  //   name: 'Navigation',
  //   icon: <Navigation strokeWidth={1} size={16} />,
  //   children: [
  //     {
  //       path: '/navigation/breadcrumb',
  //       name: 'Breadcrumb'
  //     },
  //     {
  //       path: '/navigation/dropdown',
  //       name: 'Dropdown'
  //     },
  //     {
  //       path: '/navigation/menu',
  //       name: 'Menu'
  //     },
  //     {
  //       path: '/navigation/pagination',
  //       name: 'Pagination'
  //     },
  //     {
  //       path: '/navigation/steps',
  //       name: 'Steps'
  //     }
  //   ]
  // },
  // {
  //   name: 'Data entry',
  //   icon: <Type strokeWidth={1} size={16} />,
  //   children: [
  //     {
  //       path: '/data-entry/autocomplete',
  //       name: 'AutoComplete'
  //     },
  //     {
  //       path: '/data-entry/checkbox',
  //       name: 'Checkbox'
  //     },
  //     {
  //       path: '/data-entry/cascader',
  //       name: 'Cascader'
  //     },
  //     {
  //       path: '/data-entry/datepicker',
  //       name: 'Date picker'
  //     },
  //     {
  //       path: '/data-entry/form',
  //       name: 'form'
  //     },
  //     {
  //       path: '/data-entry/inputnumber',
  //       name: 'Input number'
  //     },
  //     {
  //       path: '/data-entry/input',
  //       name: 'Input'
  //     },
  //     {
  //       path: '/data-entry/mention',
  //       name: 'Mention'
  //     },
  //     {
  //       path: '/data-entry/rate',
  //       name: 'Rate'
  //     },
  //     {
  //       path: '/data-entry/radio',
  //       name: 'Radio'
  //     },
  //     {
  //       path: '/data-entry/switch',
  //       name: 'Switch'
  //     },
  //     {
  //       path: '/data-entry/slider',
  //       name: 'Slider'
  //     },
  //     {
  //       path: '/data-entry/select',
  //       name: 'Select'
  //     },
  //     {
  //       path: '/data-entry/treeselect',
  //       name: 'Tree select'
  //     },
  //     {
  //       path: '/data-entry/transfer',
  //       name: 'Transfer'
  //     },
  //     {
  //       path: '/data-entry/timepicker',
  //       name: 'Time picker'
  //     },
  //     {
  //       path: '/data-entry/upload',
  //       name: 'Upload'
  //     }
  //   ]
  // },
  // {
  //   name: 'Data display',
  //   icon: <Underline strokeWidth={1} size={16} />,
  //   children: [
  //     {
  //       path: '/data-display/avatar',
  //       name: 'Avatar'
  //     },
  //     {
  //       path: '/data-display/badge',
  //       name: 'Badge'
  //     },
  //     {
  //       path: '/data-display/collapse',
  //       name: 'Collapse'
  //     },
  //     {
  //       path: '/data-display/carousel',
  //       name: 'Carousel'
  //     },
  //     {
  //       path: '/data-display/card',
  //       name: 'Card'
  //     },
  //     {
  //       path: '/data-display/calendar',
  //       name: 'Calendar'
  //     },
  //     {
  //       path: '/data-display/list',
  //       name: 'List'
  //     },
  //     {
  //       path: '/data-display/popover',
  //       name: 'Popover'
  //     },
  //     {
  //       path: '/data-display/tree',
  //       name: 'Tree'
  //     },
  //     {
  //       path: '/data-display/tooltip',
  //       name: 'Tooltip'
  //     },
  //     {
  //       path: '/data-display/timeline',
  //       name: 'Timeline'
  //     },
  //     {
  //       path: '/data-display/tag',
  //       name: 'Tag'
  //     },
  //     {
  //       path: '/data-display/tabs',
  //       name: 'Tabs'
  //     },
  //     {
  //       path: '/data-display/table',
  //       name: 'Table'
  //     }
  //   ]
  // },
  // {
  //   name: 'Feedback',
  //   icon: <Terminal strokeWidth={1} size={16} />,
  //   children: [
  //     {
  //       path: '/feedback/alert',
  //       name: 'Alert'
  //     },
  //     {
  //       path: '/feedback/drawer',
  //       name: 'Drawer'
  //     },
  //     {
  //       path: '/feedback/modal',
  //       name: 'Modal'
  //     },
  //     {
  //       path: '/feedback/message',
  //       name: 'Message'
  //     },
  //     {
  //       path: '/feedback/notification',
  //       name: 'Notification'
  //     },
  //     {
  //       path: '/feedback/progress',
  //       name: 'Progress'
  //     },
  //     {
  //       path: '/feedback/popconfirm',
  //       name: 'Pop confirm'
  //     },
  //     {
  //       path: '/feedback/spin',
  //       name: 'Spin'
  //     },
  //     {
  //       path: '/feedback/skeleton',
  //       name: 'Skeleton'
  //     }
  //   ]
  // },
  
];
