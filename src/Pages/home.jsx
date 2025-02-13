import React from "react";
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import '../index.css';
function Home() {
    return (
        <>
            <div className="App">
                <Header />
                <HeroSection />
                <Services />
                <Testimonials />
                <ContactForm />
                <Footer />
            </div>
        </>
    )
}
export default Home;