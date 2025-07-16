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

      <Heading3>Swordmaster</Heading3>
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
        keywords="Melee, Strike, Weapon, Magic"
        actionType="Main action"
        range="Melee 1"
        targets="Special"
        addedStats={["Agility"]}
        tierResults={{
          low: "6 damage",
          middle: "8 damage",
          high: "10 damage",
        }}
        effect="You shift up to 3 squares and make one power roll that targets all enemies that you moved through during the move. Enemies are not treated as difficult terrain for the purpose of this movement."
      />
    </Column>
  </Page>
);

export default Kits;
