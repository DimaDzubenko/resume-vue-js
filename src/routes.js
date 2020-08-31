import Home from "@/components/Home";
import Resume from "@/components/Resume";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

export const routes = [
    { path: '', component: Home },
    { path: '/resume', component: Resume },
    { path: '/portfolio', component: Portfolio },
    { path: '/blog', component: Blog },
    { path: '/contact', component: Contact },
]