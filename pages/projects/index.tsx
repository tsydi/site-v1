import { NextPage, GetServerSideProps } from "next"
import { sanityClient, urlFor, PortableText } from "../../lib/sanity"
import { groq } from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'
import { MainLayout } from "../../components/MainLayout"

const projectsQuery = groq`
  *[_type == "project"]{
    _id,
    slug,
    title,
    image
  }
`

const Projects: NextPage = ({ projects } : any) => {
  return (
    <MainLayout
      description={''}
      keywords={''}
      title={''}
    >

    <section>
      {projects?.length > 0 && projects.map((project : any) => (
        <article
          className="w-full max-h-full h-0 transition transform focus:scale-95 hover:scale-95"
          key={project._id}
        >
          <Link href={`/projects/${project.slug.current}`}>
            <a className="flex flex-col items-center justify-center">
              <Image
                src={urlFor(project.image).url()!}
                width="500"
                height="300"
                objectFit="cover"
                alt={project.title}
              />

            </a>
          </Link>
        </article>
      ))}
    </section>

    </MainLayout>
  )
}

export default Projects

export const getServerSideProps: GetServerSideProps = async () => {
  const projects = await sanityClient.fetch(projectsQuery);
  return { props: { projects } };
}