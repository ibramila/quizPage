import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import Infrastructure from '../components/Infrastructure/Infrastructure'
import Collaborate from "../components/Collaborate/Collaborate"
import Cards from "../components/TestimonialCards/Cards"
import BlogPosts from "../components/BlogPosts/BlogPosts"
import InfoSection from '../components/InfoSection/InfoSection'
import ProjectsInfo from '../components/ProjectsInfo/ProjectsInfo'
import ProjectsImage from '../components/ProjectsImages/ProjectsImage'
import TestimonialInfo from '../components/TestimonialInfo/TestimonialInfo'
function Home() {
  return (
    <>
      <HeroSection />
      <InfoSection />
      <Infrastructure />
      <Collaborate />
      <ProjectsInfo />
      <ProjectsImage />
      <TestimonialInfo />
      <Cards />
      <BlogPosts />
    </>
  )
}

export default Home