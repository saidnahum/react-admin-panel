import './Sidebar.scss';
import { DashboardIcon, GroupIcon, CategoryIcon, PaymentIcon, EqualizerIcon, NotificationsIcon, DnsIcon, PsychologyIcon, SettingsIcon, AccountCircleIcon, LogoutIcon, LocalShippingIcon } from '../../utils/icons';

const Sidebar = () => {
   return (
      <div className='sidebar'>
         <div className='top'>
            <span className='logo'>Pixel Admin</span>
         </div>

         <hr />

         <div className='center'>
            <ul>
               <p className='title'>MAIN</p>
               <li><DashboardIcon className='icon'/><span>Dashboard</span></li>

               <p className='title'>LISTS</p>
               <li><GroupIcon className='icon'/><span>Users</span></li>
               <li><CategoryIcon className='icon'/><span>Products</span></li>
               <li><PaymentIcon className='icon'/><span>Orders</span></li>
               <li><LocalShippingIcon className='icon'/><span>Delivery</span></li>

               <p className='title'>USEFUL</p>
               <li><EqualizerIcon className='icon'/><span>Stats</span></li>
               <li><NotificationsIcon className='icon'/><span>Notifications</span></li>

               <p className='title'>SERVICE</p>
               <li><DnsIcon className='icon'/><span>System Healt</span></li>
               <li><PsychologyIcon className='icon'/><span>Logs</span></li>
               <li><SettingsIcon className='icon'/><span>Settings</span></li>

               <p className='title'>USER</p>
               <li><AccountCircleIcon className='icon'/><span>Profile</span></li>
               <li><LogoutIcon className='icon'/><span>Logout</span></li>
            </ul>
         </div>

         <div className='bottom'>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
         </div>
      </div>
   )
}

export default Sidebar