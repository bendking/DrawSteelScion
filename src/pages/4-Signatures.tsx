import { Page, Column, Text, Heading2, Heading3, Ability } from "../components";

const Signatures = () => (
  <Page id="signatures">
    <Column>
      <Heading2>Scion Abilities</Heading2>
      <Text>
        You wield a seamless fusion of martial grace and arcane power, flowing
        through battle with speed and precision.
      </Text>

      <Heading3>Signature Ability</Heading3>
      <Text>
        Select one signature ability from the options below. Signature abilities
        can be used at will.
      </Text>

      <Ability
        title="Fourfold Stroke"
        subtitle="A single slash unfolds into multiple, mirrored in perfect harmony."
        keywords="Area, Magic, Melee, Weapon"
        actionType="Main action"
        range="2 cube within 1"
        targets="Each enemy in the area"
        addedStats={["Agility"]}
        tierResults={{
          low: "4 damage",
          middle: "6 damage",
          high: "8 damage",
        }}
      />

      <Ability
        title="Essence Lance"
        subtitle="You hurl a lance of force that pierces not flesh, but the core of their being."
        keywords="Ranged, Strike, Magic"
        actionType="Main action"
        range="Ranged 10"
        targets="One creature"
        addedStats={["Agility"]}
        tierResults={{
          low: "6 + R psychic damage",
          middle: "8 + R psychic damage",
          high: "11 + R psychic damage",
        }}
        effect="The target's characteristic scores are treated as lower by 1 for the sake of resisting potencies (save ends)."
      />
    </Column>

    <Column>
      <Ability
        title="Aether Lash"
        subtitle="With a flick of your blade, you etch a line of invisible force, preparing to strike."
        keywords="Melee, Strike, Weapon, Magic"
        actionType="Main action"
        range="Melee 1"
        targets="One creature or object"
        addedStats={["Agility"]}
        tierResults={{
          low: "2 + A damage",
          middle: "5 + A damage",
          high: "8 + A damage",
        }}
        effectBeforeResult
        effect="Before choosing the target of this ability and resolving the power roll,
              choose a creature or object within range 5. Either vertical pull
              4 to yourself towards the target, or vertical pull 4 the target
              towards you."
      />
      <Ability
        title="Crescent Arc"
        subtitle="A precise arc cuts through your foes with the grace of moonlight."
        keywords="Area, Magic, Melee, Weapon"
        actionType="Main action"
        range="3 wall within 1"
        targets="Each enemy in the area"
        addedStats={["Agility"]}
        tierResults={{
          low: "4 damage",
          middle: "6 damage",
          high: "8 damage",
        }}
        effect="The wall area is only used for targeting, and does not create an actual wall. Each increase to the wall's length is doubled."
      />
    </Column>
  </Page>
);

export default Signatures;
