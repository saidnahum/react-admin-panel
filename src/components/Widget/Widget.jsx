import './Widget.scss';
import { KeyboardArrowUpIcon, PersonOutlineIcon, ShoppingCartOutlinedIcon, MonetizationOnOutlinedIcon, AccountBalanceWalletIcon } from '../../utils/icons';

const Widget = ({ type }) => {

   let data;

   // Temporary data
   const amount = 100;
   const diff = 20;

   switch (type) {
      case "user":
         data = {
            title: "USERS",
            isMoney: false,
            link: "See all users",
            icon: (
               <PersonOutlineIcon 
                  className='icon'
                  style={{
                     color: "crimson",
                     backgroundColor: "rgba(255,0,0,0.2)"
                  }}
               />
            )
         }
         break;
      case "order":
         data = {
            title: "ORDERS",
            isMoney: false,
            link: "View all orders",
            icon: (
               <ShoppingCartOutlinedIcon 
                  className='icon'
                  style={{
                     color: "goldenrod",
                     backgroundColor: "rgba(218,165,32,0.2)"
                  }}
               />
            )
         }
         break;
      case "earning":
         data = {
            title: "EARNING",
            isMoney: true,
            link: "View net earnings",
            icon: (
               <MonetizationOnOutlinedIcon 
                  className='icon'
                  style={{
                     color: "green",
                     backgroundColor: "rgba(0,128,0,0.2)"
                  }}
               />
            )
         }
         break;
      case "balance":
         data = {
            title: "BALANCE",
            isMoney: true,
            link: "See details",
            icon: (
               <AccountBalanceWalletIcon 
                  className='icon'
                  style={{
                     color: "purple",
                     backgroundColor: "rgba(128,0,128,0.2)"
                  }}
               />
            )
         }
         break;
      default:
         break;
   }

   return (
      <div className='widget'>
         <div className="left">
            <span className="title">{data?.title}</span>
            <span className="counter">{data?.isMoney && "$"} {amount}</span>
            <span className="link">See all users</span>
         </div>

         <div className="right">
            <div className="percentage positive">
               <KeyboardArrowUpIcon />
               {diff} %
            </div>
            {data?.icon}
         </div>
      </div>
   )
}

export default Widget