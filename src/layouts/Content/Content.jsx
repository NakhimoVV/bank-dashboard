import './Content.scss'
import Section from "@/layouts/Section";
import DitailsBalance from "@/ditails/ui/DitailsBalance";
import DitailsCard from "@/ditails/ui/DitailsCard";
import Button from "@/components/Button";
import DefinitionItem from "@/components/DefinitionItem";
import DefinitionList from "@/components/DefinitionList";
import Progressbar from "@/components/Progressbar";
import maskForCardNumber from "@/utils/maskForCardNumber.js";
import formatNumUs from "@/utils/formatNumUs.js";
import formatCardDate from "@/utils/formatCardDate.js";

const dataBalance = {
  balance: 25330,
  countCard: 3,
}
const dataCards = [
  {
    type: "Shopping Card",
    name: "NAME",
    exp: '2026-06-08',
    number: '0000123456780928',
    styleColor: 'violet'
  },
  {
    type: "Shopping Card",
    name: 'NAME',
    exp: '2026-06-08',
    number: '0000123456784486',
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
  lvl: '02',
  number: '0000123445677800',
  styleColor: 'green'
}
const dataSpendings = {
  limit: 2000,
  current: 400
}

const Content = () => {

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
               <DefinitionItem value={formatNumUs(item.dollars)} {...item} key={index}/>
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
            isVertical
          />
          <section className="card-details__data" aria-labelledby="card-number">
            <h4 className="card-details__title" id="card-number">Card number</h4>
            <p className="card-details__number">
              {maskForCardNumber(currentCard.number, true)}
            </p>
          </section>
          <section className="card-details__data" aria-labelledby="card-security">
            <h4 className="card-details__title visually-hidden" id="card-security">Card security information</h4>
            <DefinitionList className="card-details__list">
              <DefinitionItem
                className="card-details__item"
                label='Expire date'
                value={formatCardDate(currentCard.exp)}
              />
              <DefinitionItem
                className="card-details__item"
                label='cvv'
                value={formatCardDate(currentCard.exp)}
              />
              <DefinitionItem
                className="card-details__item"
                label='Level'
                value={currentCard.lvl}
              />
            </DefinitionList>
          </section>
          <Section
            className="card-details__spending"
            title='Spending limits'
          >
            <Progressbar {...dataSpendings} />
          </Section>
        </Section>
      </aside>
    </main>
  )
}

export default Content
