import Container from '~/components/Container'
import Projects from '~/components/Projects'
import { getProjects } from '~/lib/sanity.queries'

export default function IndexPage() {
  return (
    <Container>
      <Projects />
    </Container>
  )
}
