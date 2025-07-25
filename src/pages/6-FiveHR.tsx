import { Page, Column, Text, Heading3, Ability } from "../components";

const FiveHR = () => (
  <Page id="five-hr">
    <Column>
      <Heading3>5-Balance Ability</Heading3>
      <Text>
        Choose one heroic ability from the following options, each of which
        costs 5 balance to use.
      </Text>

      <Ability
        title="Lightning Strike (5 Balance)"
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
        title="Glacial Bloom (5 Balance)"
        subtitle="Like a flower in bloom, ice explodes onto your foes."
        keywords="Area, Magic, Ranged"
        actionType="Main action"
        range="3 cube in range 10"
        targets="Each enemy in the area"
        addedStats={["Agility"]}
        tierResults={{
          low: "5 cold damage, A < weak, slowed (save ends)",
          middle: "8 cold damage, A < average, slowed (save ends)",
          high: "11 cold damage, A < strong, restrained (save ends)",
        }}
      />
    </Column>

    <Column>
      <Ability
        title="Crashing Wave (5 Balance)"
        subtitle="Leaping skyward, you crash down with the weight of the ocean."
        keywords="Area, Melee, Magic, Weapon"
        actionType="Main action"
        range="3 cube within 1"
        targets="Each enemy in the area"
        addedStats={["Agility"]}
        tierResults={{
          low: "6 damage; push 2",
          middle: "9 damage; push 4",
          high: "13 damage; push 6",
        }}
        effect="You can jump up to 2 squares before resolving the power roll. The targets are force moved one at a time, starting with the targets nearest to you, and can be pushed into other targets in the area."
      />

      <Ability
        title="Spirit Rend (5 Balance)"
        subtitle="You carve through your foe's spirit, leaving their mind reeling."
        keywords="Melee, Strike, Weapon, Magic"
        actionType="Main action"
        range="Melee 1"
        targets="1 creature"
        addedStats={["Agility"]}
        tierResults={{
          low: "8 + A psychic damage; I < weak, dazed (save ends)",
          middle: "12 + A psychic damage; I < average, dazed (save ends)",
          high: "16 + A psychic damage; I < strong, dazed (save ends)",
        }}
      />
    </Column>
  </Page>
);

export default FiveHR;
