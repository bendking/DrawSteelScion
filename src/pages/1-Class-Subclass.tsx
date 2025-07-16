import {
  Page,
  Column,
  Text,
  Title,
  Heading2,
  Heading3,
  Heading4,
  BulletList,
  AdvancementTable,
  TextBlock,
} from "../components";
import { Detail } from "../components/Detail";

const Class = () => (
  <Page id="class-subclass">
    <Column>
      <Title>The Scion</Title>

      <TextBlock>
        <Text>
          You were deemed worthy of a secret Art unknown to most, allowing you
          to weave steel and magic into a single, fluid dance. Passed down
          through an unbroken chain of master and disciple, this ancient
          discipline was entrusted to you, its esoteric techniques guiding you
          toward the cultivation of Balance: a harmonious alignment of movement,
          feeling, and intent.
        </Text>

        <Text>
          As a Scion, you move with purpose - each strike empowered to suit the
          moment, whether to wound, disrupt, or disable, your flexibility is
          unmatched. At the height of your mastery, you are the eye of the
          storm: utterly calm, yet entirely devastating.
        </Text>
      </TextBlock>

      {/* --- BASICS --- */}
      <Heading2>Basics</Heading2>

      <div className="flex flex-col gap-1">
        <Detail
          detailName="Starting Characteristics"
          detailValue="You start with an Agility of 2 and a Reason of 2, and can choose
          one of the following arrays for your other characteristic scores:"
        />

        <BulletList>
          <Text>2, -1, -1</Text>
          <Text>1, 1, -1</Text>
          <Text>1, 0, 0</Text>
        </BulletList>

        <Detail detailName="Potency" detailValue="Reason" />

        <Detail detailName="Starting Stamina at 1st Level" detailValue="21" />

        <Detail
          detailName="Stamina Gained at 2nd and Higher Levels"
          detailValue="12"
        />
        <Detail detailName="Recoveries" detailValue="8" />

        <Detail
          detailName="Skills"
          detailValue="Magic and Strategy, plus choose any two skills from the exploration skill group."
        />
      </div>

      {/* --- ADVANCEMENT TABLE --- */}
      <Heading4 className="text-center">Scion Advancement</Heading4>
      <AdvancementTable
        showLevel={true}
        columns={["Features", "Abilities"]}
        rows={[
          {
            level: "1",
            Features:
              "Art, Balance, Kit, Enweave, Art Features, Art Triggered Action, Scion Abilities",
            Abilities: "Signature, 3, 5",
          },
          {
            level: "2",
            Features: "Art Feature, Perk, Art Ability",
            Abilities: "Signature, 3, 5",
          },
          {
            level: "3",
            Features: "Mystic Shield, 7-Balance Ability",
            Abilities: "Signature, 3, 5, 7",
          },
        ]}
      />
    </Column>

    <Column>
      <Heading2>1st-Level Features</Heading2>

      <Text>As a Scion, you gain the following features.</Text>

      <Heading3>Art</Heading3>

      <TextBlock>
        <Text>
          Each Scion is a single, carefully chosen inheritor of a different Art.
          The masters of each Art hold different ideals, and choose their scions
          according to their adherence to these ideals - and their capability to
          uphold them.
        </Text>

        <Text>
          You were trained in an Art chosen from the following options, each of
          which grants you a skill.
        </Text>
      </TextBlock>

      <Heading3>Blinkblade</Heading3>

      <TextBlock>
        <Text>
          The Blinkblade is a master of teleportation magic, using it to blink
          in and out of reach with uncanny speed - difficult to catch, and
          harder still to escape. You gain the Escape Artist skill.
        </Text>

        <Text className="italic">No cage can hold me. I choose my path.</Text>
      </TextBlock>

      <Heading3>Runewright</Heading3>

      <TextBlock>
        <Text>
          The Runewright wields the ancient craft of runebranding to sear
          volatile runes onto living beings and shape the battlefield through
          groundlaid writs. You gain the Mechanics skill.
        </Text>

        <Text className="italic">
          Knowledge is power. I carve order out of chaos.
        </Text>
      </TextBlock>

      <Heading3>Soulforged</Heading3>

      <TextBlock>
        <Text>
          The Soulforged binds a fragment of their soul into a chosen weapon,
          forging a sentient extension of their will - a Soulblade. Through this
          bond, they shape and empower their blade, adapting its form and
          function to meet the shifting demands of battle. You gain the
          Empathize skill.
        </Text>

        <Text className="italic">
          I am the soul of my blade. I bring justice for all.
        </Text>
      </TextBlock>
    </Column>
  </Page>
);

export default Class;
