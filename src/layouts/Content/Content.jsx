import './Content.scss'
import Section from "@/layouts/Section";
import DitailsBalance from "@/ditails/ui/DitailsBalance/index.js";

const Content = (props) => {
  const {} = props

  return (
    <main className="content">
      <section className="content__hero container">
        <Section
          className="hero wrapper"
          title='Inventory Details'
        >
          <DitailsBalance />
          <Section
            className="hero__card-list"
            title='Inventory Details 2'
          >

          </Section>
          <Section
            className="hero__analystic wrapper"
            title='Inventory Details'
          >

          </Section>
        </Section>
      </section>
      <aside className="content__side container">
        <Section
          className="card-details wrapper"
          title='DitailsCard details'
        >

        </Section>
      </aside>
    </main>
  )
}

export default Content
