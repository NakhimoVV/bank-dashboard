import './Content.scss'
import Section from "@/layouts/Section";
import DitailsBalance from "@/ditails/ui/DitailsBalance";
import DitailsCard from "@/ditails/ui/DitailsCard";
import Button from "@/components/Button";
import DefinitionItem from "@/components/DefinitionItem";
import DefinitionList from "@/components/DefinitionList";

const dataBalance = {
  balance: 25330,
  countCard: 3,
}
const dataCards = [
  {
    type: "Shopping Card",
    name: "NAME",
    exp: '2026-06-08',
    number: 123456780928,
    styleColor: 'violet'
  },
  {
    type: "Shopping Card",
    name: 'NAME',
    exp: '2026-06-08',
    number: 123456784486,
    styleColor: 'orange'
  }
]
const dataAnalystic = [
  {
    label: 'Earnings',
    dollars: 12341,
    styleColor: 'green',
    styleIcon: 'show chart'
  },
  {
    label: 'Spendings',
    dollars: 4009,
    styleColor: 'violet',
    styleIcon: 'dollar coin'
  },
  {
    label: 'Goals',
    dollars: 8098,
    styleColor: 'orange',
    styleIcon: 'aim'
  }
]
const currentCard = {
  type: "Shopping Card",
  name: "NAME",
  exp: '2026-06-08',
  number: 123456787800,
  styleColor: 'green'
}

const Content = (props) => {
  const {} = props

  return (
    <main className="content">
      <section className="content__hero container">
        <Section
          className="hero wrapper"
          title='Inventory Details'
        >
          <DitailsBalance data={dataBalance} />
          <Section
            className="hero__card-list"
            title='Inventory Details 2'
          >
            {dataCards.map((item, index) => (
              <DitailsCard data={item} color={item.styleColor} key={index}/>
            ))}
            <Button
              mode = 'card'
              label = "Add Card"
              iconName = 'Plus'
              hasFillIcon
            />
          </Section>
          <Section
            className="hero__analystic wrapper"
            title='Analystic Details'
            isHiddenTitle
          >
            <DefinitionList>
              {dataAnalystic.map((item, index) => (
               <DefinitionItem {...item} key={index}/>
             ))}
            </DefinitionList>
          </Section>
        </Section>
      </section>
      <aside className="content__side container">
        <Section
          className="card-details wrapper"
          title='Card details'
        >
          <DitailsCard
            data={currentCard}
            color={currentCard.styleColor}
            isCurrent
          />
        </Section>
      </aside>
    </main>
  )
}

export default Content
