import {Outlet} from "react-router-dom";
import React from 'react';

const Layout = () => {
    console.log("Layout component is rendering");
return (
 <main>
    <Outlet/>
 </main>
)
}

export default Layout;