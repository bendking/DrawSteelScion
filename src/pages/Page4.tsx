import {
  Page,
  Column,
  Text,
  Heading2,
  Heading3,
  Ability,
} from "../components";

const Page4 = () => (
  <Page>
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
        title="Sever the Moment"
        subtitle="You read the flaw in their stance and cut deep."
        keywords="Melee, Strike, Weapon, Magic"
        actionType="Main action"
        range="Melee 1"
        targets="One creature"
        addedStats={["Agility"]}
        tierResults={{
          low: "3 + A damage",
          middle: "5 + A damage",
          high: "8 + A damage",
        }}
        effect="If the target has any condition, this ability deals double damage."
      />

      <Ability
        title="Full Moon Arc"
        subtitle="Your blade traces a perfect circle in red."
        keywords="Melee, Weapon"
        actionType="Main action"
        range="burst 1"
        targets="Each enemy in the area"
        addedStats={["Agility"]}
        tierResults={{
          low: "7 damage",
          middle: "9 damage",
          high: "12 damage",
        }}
      />

      <Ability
        title="Veil Piercer"
        subtitle="You lance through a veil of mist, fading from sight."
        keywords="Ranged, Strike, Magic"
        actionType="Main action"
        range="Ranged 10"
        targets="1 creature"
        addedStats={["Agility"]}
        tierResults={{
          low: "10 + R damage",
          middle: "12 + R damage",
          high: "16 + R damage",
        }}
        effect="Create a 1 burst area of mist which provides concealment that lasts until the end of your next turn. Creatures inside the mist cannot be observed."
      />
    </Column>

    <Column>
      <Ability
        title="Sanguine Thread"
        subtitle="Your blade draws a line through flesh, and a thread of life follows - woven back into your form."
        keywords="Melee, Strike, Weapon, Magic"
        actionType="Main action"
        range="Melee 1"
        targets="One creature"
        addedStats={["Agility"]}
        tierResults={{
          low: "4 + A damage",
          middle: "7 + A damage",
          high: "10 + A damage",
        }}
        effect="You gain temporary Stamina equal to half the damage dealt by this ability."
      />

      <Heading3>5-Balance Ability</Heading3>
      <Text>
        Choose one heroic ability from the following options, each of which
        costs 5 balance to use.
      </Text>

      <Ability
        title="Lightning Strike"
        subtitle="You become lightning, flashing from one place to another, leaving ruin in your wake."
        keywords="Melee, Weapon, Magic, Area"
        actionType="Main action"
        range="10 x 1 line within 1"
        targets="Each enemy in the area"
        addedStats={["Agility"]}
        tierResults={{
          low: "8 damage",
          middle: "10 damage",
          high: "14 damage",
        }}
        effect="You shift to a square on the opposite side of the area before making the power roll."
      />

      <Ability
        title="Glacial Bloom"
        subtitle="Like a flower in bloom, ice explodes onto your foes."
        keywords="Area, Magic, Ranged"
        actionType="Main action"
        range="3 cube in range 10"
        targets="Each enemy in the area"
        addedStats={["Agility"]}
        tierResults={{
          low: "6 cold damage, A < weak, slowed (save ends)",
          middle: "8 cold damage, A < average, slowed (save ends)",
          high: "10 cold damage, A < strong, restrained (save ends)",
        }}
      />
    </Column>
  </Page>
);

export default Page4;
