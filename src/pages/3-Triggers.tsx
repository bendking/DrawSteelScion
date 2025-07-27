import {
  Page,
  Column,
  Text,
  Heading2,
  Heading4,
  AdvancementTable,
  TextBlock,
  Ability,
  Detail,
} from "../components";

const Triggers = () => (
  <Page id="triggers">
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
    </Column>

    <Column>
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
              <strong>Effect:</strong> You take half the damage. If the damage
              has any potency effect associated with it, the potency is
              decreased by 2.
            </Text>
            <Detail
              detailName="Spend 2 Balance"
              detailValue="Make a melee free strike against the creature that damaged you."
            />
          </TextBlock>
        }
      />
    </Column>
  </Page>
);

export default Triggers;
