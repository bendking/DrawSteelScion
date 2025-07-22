import { Page, Column, Ability } from "../components";

const Leftovers = () => (
  <Page id="leftovers">
    <Column>
      <Ability
        title="Ninefold Stroke"
        subtitle="A single slash unfolds into multiple, mirrored in perfect harmony."
        keywords="Area, Magic, Melee, Weapon"
        actionType="Main action"
        range="3 cube within 1"
        targets="Each enemy in the area"
        addedStats={["Agility"]}
        tierResults={{
          low: "2 damage",
          middle: "3 damage",
          high: "5 damage",
        }}
      />
    </Column>
  </Page>
);

export default Leftovers;
