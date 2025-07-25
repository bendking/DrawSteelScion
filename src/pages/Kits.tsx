import {
  Page,
  Column,
  Text,
  Heading2,
  Heading3,
  Heading4,
  Ability,
  Detail,
} from "../components";

const Kits = () => (
  <Page id="kits">
    <Column>
      <Heading2>Additional Kits</Heading2>

      <Heading3>Sword Master</Heading3>
      <Text>
        An artist of the blade, the battlefield is your canvas - each step a
        flourish, each cut a stroke.
      </Text>

      <Heading4>Equipment</Heading4>
      <Text>You wear medium armor and wield a medium weapon.</Text>

      <Heading4>Kit Bonuses</Heading4>
      <div className="flex flex-col gap-0">
        <Detail detailName="Stamina Bonus" detailValue="+6" />
        <Detail detailName="Speed Bonus" detailValue="+3" />
        <Detail detailName="Melee Damage Bonus" detailValue="+2/+2/+2" />
      </div>

      <Heading4>Signature Ability</Heading4>
      <Ability
        className="mt-2"
        title="Flowing Strike"
        subtitle="You move like water, cutting through foes with a single, fluid motion."
        keywords="Melee, Weapon"
        actionType="Main action"
        range="Melee 1"
        targets="Special"
        addedStats={["Agility", "Might"]}
        tierResults={{
          low: "5 damage",
          middle: "8 damage",
          high: "11 damage",
        }}
        effect="You shift up to 3 squares and make one power roll that targets all enemies that you moved through during the move. Enemies are not treated as difficult terrain for the purpose of this movement. You may not end this movement inside an enemy's square"
      />
    </Column>

    <Column>
      <Heading3>Spear Dancer</Heading3>
      <Text>
        In your hands the spear is more than just a weapon - it is an instrument
        of expression, a tool of of both mobility and power.
      </Text>

      <Heading4>Equipment</Heading4>
      <Text>You wear medium armor and wield a medium weapon.</Text>

      <Heading4>Kit Bonuses</Heading4>
      <div className="flex flex-col gap-0">
        <Detail detailName="Stamina Bonus" detailValue="+6" />
        <Detail detailName="Speed Bonus" detailValue="+1" />
        <Detail detailName="Melee Damage Bonus" detailValue="+2/+2/+2" />
        <Detail detailName="Melee Distance Bonus" detailValue="+1" />
      </div>

      <Heading4>Signature Ability</Heading4>
      <Ability
        className="mt-2"
        title="Leaping Swan"
        subtitle="You plant your spear into the earth and launch yourself skyward, twisting through the air before driving down with deadly force."
        keywords="Melee, Weapon, Strike"
        actionType="Main action"
        range="Melee 2"
        targets="1 creature"
        addedStats={["Agility", "Might"]}
        tierResults={{
          low: "5 damage + M or A; M < weak, prone",
          middle: "8 damage + M or A; M < average, prone",
          high: "11 damage + M or A; M < strong, prone",
        }}
        effect="You can jump up to 3 squares straight toward the target without provoking attacks of opportunity before this strike."
      />
    </Column>
  </Page>
);

export default Kits;
