import { Routes } from '@angular/router';
import { Header } from './compo/header/header';
import { About } from './compo/about/about';
import { Contact } from './compo/contact/contact';
import { Pricing } from './compo/pricing/pricing';
import { Services } from './compo/services/services';
import { Video } from './compo/video/video';

export const routes: Routes = [
    {path:'',component:Header},
    {path:"about",component:About},
    {path:"contact",component:Contact},
    {path:"pricing",component:Pricing},
    {path:"services",component:Services},
    {path:"video",component:Video}
];
