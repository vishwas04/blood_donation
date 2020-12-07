import React from 'react';
import * as Icons from 'react-icons/io5';


export const SidebarContents =[

{   title:'Register',
    className:'sidebar-text',
    path:'/register',
    icon:<Icons.IoPersonAddSharp/>
},
{   title:'Deregister',
    className:'sidebar-text',
    path:'/deregister',
    icon:<Icons.IoPersonRemoveSharp/>
},
{   title:'Images',
    className:'sidebar-text',
    path:'/images',
    icon:<Icons.IoImagesSharp/>
},
{   title:'Videos',
    className:'sidebar-text',
    path:'/vidoes',
    icon:<Icons.IoPlayCircleSharp/>
},
/*{   title:'About Us',
    className:'sidebar-text',
    path:'/about-us',
    icon:<Icons.IoInformationCircle/>
}*/
]