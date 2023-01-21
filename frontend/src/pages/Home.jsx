import React from 'react'
import Infrastructure from '../components/Infrastructure/Infrastructure'
import Collaborate from "../components/Collaborate/Collaborate"
import Cards from "../components/TestimonialCards/Cards"
import InfoSection from '../components/InfoSection/InfoSection'
import ProjectsInfo from '../components/ProjectsInfo/ProjectsInfo'
import ProjectsImage from '../components/ProjectsImages/ProjectsImage'
import TestimonialInfo from '../components/TestimonialInfo/TestimonialInfo'
import BlogPostsInfo from '../components/BlogPostsInfo/BlogPostsInfo'
import BlogPosts from '../components/BlogPosts/BlogPosts'
function Home() {
  return (
    <>
      <InfoSection />
      <Infrastructure />
      <Collaborate />
      <ProjectsInfo />
      <ProjectsImage />
      <TestimonialInfo />
      <Cards />
      <BlogPostsInfo />
      <BlogPosts />
    </>
  )
}

export default Home