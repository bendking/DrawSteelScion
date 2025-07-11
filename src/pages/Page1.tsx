import {
  Page,
  Column,
  Text,
  Title,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  BulletList,
  AdvancementTable,
  TextBlock,
} from "../components";
import { Detail } from "../components/Detail";

const Page1 = () => (
  <Page>
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
              "Scion Art, Balance, Kit, Center, Enweave, Art Features, Art Triggered Action, Scion Abilities",
            Abilities: "Signature, 3, 5",
          },
          {
            level: "2",
            Features: "Art Feature, Perk, Art Ability",
            Abilities: "Signature, 3, 5",
          },
          {
            level: "3",
            Features: "Mystic Shield, Scion Ability",
            Abilities: "Signature, 3, 5, 7",
          },
        ]}
      />

      {/* --- 1ST-LEVEL FEATURES --- */}
      <Heading2>1st-Level Features</Heading2>

      <Text>As a Scion, you gain the following features.</Text>

      {/* --- ART --- */}
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
    </Column>

    <Column>
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

      {/* --- BALANCE --- */}
      <Heading2>Balance</Heading2>

      <TextBlock>
        <Text>
          You can align movement, feeling, and intent to a single purpose,
          cultivating a heroic resource called Balance.
        </Text>
      </TextBlock>

      <Heading3>Balance in Combat</Heading3>

      <TextBlock>
        <Text>
          At the start of a combat encounter or some other stressful situation
          tracked in combat rounds (as determined by the Director), you gain
          balance equal to your Victories. At the start of each of your turns
          during combat, you gain 2 balance.
        </Text>

        <Text>
          Additionally, the first time in a combat round that you use an ability
          with a Weapon tag after using an ability with the Magic tag, or vice
          versa, you gain 1 Balance.
        </Text>

        <Text>
          The first time you spend Balance in a combat round, the cost is
          reduced by one.
        </Text>
      </TextBlock>

      <Heading3>Balance Outside of Combat</Heading3>

      <TextBlock>
        <Text>
          Though you can’t gain balance outside of combat, you can use your
          heroic abilities and effects that cost balance without spending it.
          Whenever you use an ability or effect outside of combat that costs
          balance, you can’t use that same ability or effect outside of combat
          again until you gain at least 1 Victory or finish a Respite.
        </Text>

        <Text>
          If you use an ability outside of combat that lets you spend unlimited
          balance on its effect, you can use it as if you had spent an amount of
          nerve on it equal to your Victories.
        </Text>
      </TextBlock>

      <Heading2>Kit</Heading2>
      <Text>
        You can use and gain the benefits of a kit. See Chapter 6: Kits for more
        information.
      </Text>
    </Column>
  </Page>
);

export default Page1;
