import React from 'react';
import Searchbar from './searbar/searchbar';



const Navber = () => {
    return (
        <div>
            <div className="navbar flex-col justify-center md:flex-row bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Countryes</a>
  </div>
  <div className="flex flex-col-reverse md:flex-row gap-2">
   <Searchbar></Searchbar>
    <div className="dropdown dropdown-end mx-auto">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full ">
          <img
            className=''
            alt="Tailwind CSS Navbar component"
            src="https://scontent.fdac134-1.fna.fbcdn.net/v/t39.30808-6/465739862_1261074128566526_253224816111921247_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGSfyWfYd58UMJZogcd7Sv6vkZoxIYb0p6-RmjEhhvSnpYOY53RSdrI86n1UXdXONywR5ig6Nsg1DKcs6XXX_90&_nc_ohc=LRhOT5hzHmMQ7kNvwFyQ8D7&_nc_oc=Adn93cnyj49GocgzpqvTGDp4TC2su4XbeaIn_iBnvyOlFzu44NDNh8i_PZVE9EhWKGk&_nc_zt=23&_nc_ht=scontent.fdac134-1.fna&_nc_gid=pHRz2UEjeaBsPgYUSebEjQ&oh=00_AYG3iU8_d74VnqCEoNTS2sLcQh3av9UNEviIBcauF9KLbQ&oe=67F51A07" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Navber;