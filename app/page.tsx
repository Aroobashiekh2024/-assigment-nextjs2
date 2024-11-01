import Image from "next/image";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import Navbar from "./components/NevBar/nevbar";
export default function HomePage(){
    return(
<div>
    <Header/>
    <Navbar/>
    <Hero/>
    <Footer/>
</div>
    )
}; 