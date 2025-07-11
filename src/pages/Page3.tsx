import {
  Page,
  Column,
  Text,
  Heading2,
  Heading3,
  Heading4,
  AdvancementTable,
  TextBlock,
  Ability,
  Detail,
} from "../components";

const Page3 = () => (
  <Page>
    <Column>
      <Heading2>Art Triggered Action</Heading2>
      <Text>
        Your Art grants you a triggered action, as shown on the Scion Triggered
        Action table.
      </Text>

      <Heading4 className="text-center">Art Triggered Action</Heading4>
      <AdvancementTable
        columns={["Subclass", "Features"]}
        rows={[
          { level: "", Subclass: "Blinkblade", Features: "Flicker Step" },
          { level: "", Subclass: "Runewright", Features: "Ensnaring Rune" },
          { level: "", Subclass: "Soulforged", Features: "Blade's Will" },
        ]}
      />

      <Ability
        title="Flicker Step"
        subtitle="You instinctively teleport to avoid danger."
        keywords="Magic"
        actionType="Triggered action"
        range="Self"
        targets="Self"
        effect={
          <TextBlock>
            <Text>
              <strong>Trigger:</strong> You take damage.
            </Text>
            <Text>
              <strong>Effect:</strong> You take half the damage, you can then
              teleport up to 4 squares after the triggering effect resolves.
            </Text>
            <Detail
              detailName="Spend 1+ Balance"
              detailValue="You teleport an additional 2 squares for each balance spent."
            />
          </TextBlock>
        }
      />

      <Ability
        title="Ensnaring Rune"
        subtitle="Your foe steps on one of your many traps."
        keywords="Magic"
        actionType="Triggered action"
        range="Ranged 10"
        targets="1 enemy"
        effect={
          <TextBlock>
            <Text>
              <strong>Trigger:</strong> The target moves.
            </Text>
            <Text>
              <strong>Effect:</strong> The target takes damage equal to triple
              your Reason score.
            </Text>
            <Detail
              detailName="Spend 1 Balance"
              detailValue="If the target has I < average, they are slowed (EoT)."
            />
          </TextBlock>
        }
      />

      <Ability
        title="Blade's Will"
        subtitle="As if moving by its own accord, your Soulblade parries and ripostes."
        keywords="Melee, Weapon, Magic"
        actionType="Triggered action"
        range="Self"
        targets="Self"
        effect={
          <TextBlock>
            <Text>
              <strong>Trigger:</strong> You take damage.
            </Text>
            <Text>
              <strong>Effect:</strong> You take half the damage and ignore any
              effects of the ability that targeted you.
            </Text>
            <Detail
              detailName="Spend 3 Balance"
              detailValue="Make a melee free strike against the creature that damaged you."
            />
          </TextBlock>
        }
      />

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
          low: "3 + A damage",
          middle: "6 + A damage",
          high: "9 + A damage",
        }}
        effect="Before the damage is resolved, choose a target within range 5.
              Either vertical pull 4 to yourself towards the target, or vertical
              pull 4 the target towards you. The strike portion of this ability
              does not have to target the target of this effect"
      />

      <Ability
        title="Crescent Slash"
        subtitle="A crescent slash cuts through your foes with the grace of moonlight."
        keywords="Area, Melee, Strike, Weapon"
        actionType="Main action"
        range="line 3 x 1 within melee 1"
        targets="Each enemy in the area"
        addedStats={["Agility"]}
        tierResults={{
          low: "6 damage",
          middle: "8 damage",
          high: "11 damage",
        }}
        effect="The line must arc horizontally in front of you, with the center square directly ahead. If the line length is increased rather than its width, it is increased twice, once on each side."
      />

      <Ability
        title="Fourfold Stroke"
        subtitle="A single slash unfolds into multiple, mirrored in perfect harmony."
        keywords="Melee, Strike, Weapon, Magic"
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
  </Page>
);

export default Page3;
