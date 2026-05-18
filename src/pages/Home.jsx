import React from 'react';
import HeroSection from '../sections/Hero/HeroSection';
import StorySection from '../sections/About/StorySection';
import InteractiveShowcase from '../sections/Experience/InteractiveShowcase';
import ExperienceSection from '../sections/Experience/ExperienceSection';
import AmenitiesSection from '../sections/Amenities/AmenitiesSection';
import GallerySection from '../sections/Gallery/GallerySection';
import BookingSection from '../sections/Booking/BookingSection';
import ContactSection from '../sections/Contact/ContactSection';
import FooterSection from '../sections/Footer/FooterSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <StorySection />
      <InteractiveShowcase />
      <ExperienceSection />
      <AmenitiesSection />
      <GallerySection />
      <BookingSection />
      <ContactSection />
      <FooterSection />
    </>
  );
};

export default Home;
