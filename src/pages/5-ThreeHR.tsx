import { Page, Column, Text, Heading2, Heading3, Ability } from "../components";

const ThreeHR = () => (
  <Page id="three-hr">
    <Column>
      <Heading2>Heroic Abilities</Heading2>
      <Text>
        A range of heroic abilities defines your Art, all of which make use of
        your balance.
      </Text>

      <Heading3>3-Balance Ability</Heading3>
      <Text>
        Choose one heroic ability from the following options, each of which
        costs 3 balance to use.
      </Text>

      <Ability
        title="Sever the Moment (3 Balance)"
        subtitle="You read the flaw in their stance and cut deep."
        keywords="Melee, Strike, Weapon, Magic"
        actionType="Main action"
        range="Melee 1"
        targets="One creature"
        addedStats={["Agility"]}
        tierResults={{
          low: "4 + A damage",
          middle: "6 + A damage",
          high: "10 + A damage",
        }}
        effect="If the target has any condition, the damage of this ability is doubled, not including any damage increases."
      />
      <Ability
        title="Full Moon Arc (3 Balance)"
        subtitle="Your blade traces a perfect circle in red."
        keywords="Melee, Weapon"
        actionType="Main action"
        range="burst 1"
        targets="Each enemy in the area"
        addedStats={["Agility"]}
        tierResults={{
          low: "6 damage",
          middle: "9 damage",
          high: "13 damage",
        }}
      />
    </Column>

    <Column>
      <Ability
        title="Veil Piercer (3 Balance)"
        subtitle="You lance through a veil of mist, fading from sight."
        keywords="Ranged, Strike, Magic"
        actionType="Main action"
        range="Ranged 10"
        targets="1 creature"
        addedStats={["Agility"]}
        tierResults={{
          low: "8 + R damage",
          middle: "12 + R damage",
          high: "16 + R damage",
        }}
        effect="Create a 1 burst area of mist which provides concealment to allies that lasts until the end of your next turn. Allies inside the mist can hide even while observed."
      />

      <Ability
        title="Sanguine Thread (3 Balance)"
        subtitle="Your blade draws a line through flesh, and a thread of life follows - woven back into your form."
        keywords="Melee, Strike, Weapon, Magic"
        actionType="Main action"
        range="Melee 1"
        targets="One creature"
        addedStats={["Agility"]}
        tierResults={{
          low: "4 + A damage",
          middle: "7 + A damage",
          high: "11 + A damage",
        }}
        effect="You gain temporary Stamina equal to half the damage dealt by this ability."
      />
    </Column>
  </Page>
);

export default ThreeHR;
