import './Navbar.scss';
import { SearchIcon, LanguageIcon, DarkModeOutlinedIcon, FullscreenExitIcon, NotificationsNoneOutlinedIcon, ChatBubbleOutlineOutlinedIcon, ListIcon } from '../../utils/icons';

const Navbar = () => {
   return (
      <div className='navbar'>
         <div className="wrapper">
            <div className="search">
               <input type="text" placeholder='Search...'/>
               <SearchIcon />
            </div>

            <div className="items">
               <div className="item">
                  <LanguageIcon className='icon'/>
                  English
               </div>

               <div className="item">
                  <DarkModeOutlinedIcon className='icon'/>
               </div>

               <div className="item">
                  <FullscreenExitIcon className='icon'/>
               </div>

               <div className="item">
                  <NotificationsNoneOutlinedIcon className='icon'/>
                  <div className="counter">1</div>
               </div>

               <div className="item">
                  <ChatBubbleOutlineOutlinedIcon className='icon'/>
                  <div className="counter">2</div>
               </div>

               <div className="item">
                  <ListIcon/>
               </div>

               <div className="item">
                  <img 
                     src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" 
                     alt="profilePicture" 
                     className='avatar'
                  />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Navbar