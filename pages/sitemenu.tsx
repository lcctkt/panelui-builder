import { builder, BuilderComponent } from '@builder.io/react'

builder.init('21806edb025d4a679c160f645eacc552')

export const getStaticProps = async (context) => {
  const content = await builder.get('site-menu', { url: context.resolvedUrl }).promise();

  return { 
    props: { content }, 
    revalidate: true,
    notFound: !content
  }
}

const MyComponent = (props) => (
  <BuilderComponent
    content={props.content}
    model="site-menu" />
)

export default MyComponent;
