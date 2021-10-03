import { GetServerSideProps, NextPage } from "next"
import { sanityClient, urlFor, PortableText } from '../../lib/sanity'
import { groq } from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'
import { MainLayout } from "../../components/MainLayout"

interface IProject {
  [key: string]: string;
}

const Project: NextPage<IProject> = ({
  _id,
  title,
  technologies,
  updatedAt,
  image
}) => {

  return (
    <MainLayout
      description={''}
      keywords={''}
      title={''}
    >

      <section key={_id}>

      </section>
    </MainLayout>
  )
}

export default Project

export const getServerSideProps: GetServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug

  const projectQuery = groq`*[ _type == "project" && slug.current == $pageSlug][0]{
    _id,
    title,
    technologies,
    updatedAt,
    code,
    image
  }`

  const project = await sanityClient.fetch(projectQuery, { pageSlug })

  if (!project) {
    return {
      props: null,
      notFound: true,
    }
  } else {
    return {
      props: {
        _id: project._id,
        title: project.title,
        technologies: project.technologies,
        updatedAt: project.updatedAt,
        image: project.image,
      },
    }
  }
}