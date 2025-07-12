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
  Ability,
} from "../components";
import { Detail } from "../components/Detail";

const Class = () => (
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
              "Art, Balance, Enweave, Art Features, Art Triggered Action, Kit, Scion Abilities",
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

    <Column>
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

      <Heading2>Enweave</Heading2>
      <Text>
        Your mastery of Balance allows you to channel magic through your weapon.
        You gain the following ability.
      </Text>

      <Ability
        title="Enweave (1 Balance)"
        subtitle="You weave magic into your weapon, preparing to unleash it with your next strike."
        keywords="Magic, Weapon"
        actionType="Maneuver"
        range="Self"
        targets="Self"
        effect={
          <TextBlock>
            <Text>
              <strong>Effect:</strong> Choose one of the following effects:
            </Text>
            <BulletList>
              <Detail
                detailName="Flame Strike"
                detailValue="Deal triple your Reason score in fire damage."
              />
              <Detail
                detailName="Freeze Strike"
                detailValue="Damage becomes cold. The target is slowed (save ends)."
              />
              <Detail
                detailName="Gale Strike"
                detailValue="Damage becomes lightning. You can either push the target, or yourself away from the target, a distance equal to double your Reason in squares after the strike is resolved."
              />
              <Detail
                detailName="Crimson Strike"
                detailValue="Damage becomes corruption. The target is bleeding (save ends)."
              />
              <Detail
                detailName="Acid Strike"
                detailValue="Damage becomes acid. Attacks against the target have an edge (save ends)."
              />
              <Detail
                detailName="Umbral Strike"
                detailValue="Deal your Reason score in psychic damage, and the target is weakened (save ends)."
              />
              <Detail
                detailName="Explosive Strike"
                detailValue="Damage becomes sonic; deal your Reason in sonic damage to each target in range 2 of the target."
              />
            </BulletList>
            <Text>
              The chosen effect applies to your next strike. It may change your
              next strike’s damage type. Any additional effects are applied
              after the strike is resolved, and to one target of your choosing.
              If you use this ability more than once before a strike, choose one
              of the damage types to change your next strike’s type to, but
              apply all of the additional effects. You cannot use this ability
              more than twice before making a strike.
            </Text>
          </TextBlock>
        }
        spend={
          <Detail
            detailName="Spend 2 Balance"
            detailValue="This ability becomes a free maneuver instead."
          />
        }
      />

      <Heading2>Kit</Heading2>
      <Text>
        You can use and gain the benefits of a kit. See Chapter 6: Kits for more
        information.
      </Text>
    </Column>

    {/* <Column>
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
    </Column> */}
  </Page>
);

export default Class;
