import {
  Page,
  Column,
  Text,
  Heading2,
  Heading3,
  AdvancementTable,
  TextBlock,
  Ability,
  Detail,
  Feature,
  BulletList,
} from "../components";

const Maneuvers = () => (
  <Page>
    <Column>
      <Heading2>1st-Level Art Features</Heading2>
      <Text>
        Your Art grants you one or two features, as shown on the 1st-Level Art
        Features table.
      </Text>
      <Heading3 className="text-center">1st-Level Art Features</Heading3>
      <AdvancementTable
        columns={["Subclass", "Features"]}
        rows={[
          { level: "", Subclass: "Blinkblade", Features: "Blink, Phasewalk" },
          { level: "", Subclass: "Runewright", Features: "Runebrand" },
          {
            level: "",
            Subclass: "Soulforged",
            Features: "Soulshape, Soulbound",
          },
        ]}
      />

      <Feature title="Phasewalk">
        <Text>
          Whenever you take the Advance move action, you can instead teleport
          your Reason + 1 in squares.
        </Text>
      </Feature>

      <Ability
        title="Blink"
        subtitle="…And you miss it."
        keywords="Magic"
        actionType="Maneuver"
        range="Self"
        targets="Self"
        effect={
          <TextBlock>
            <Text>You teleport up to 7 squares.</Text>
          </TextBlock>
        }
        spend={
          <Detail
            detailName="Spend 5 Balance"
            detailValue="If used immediately after performing a melee strike, you may repeat that strike at your target destination without needing to spend the base cost as long as it costs 5 balance or fewer."
          />
        }
      />

      <Ability
        title="Runebrand (1 Balance)"
        subtitle="You brand a volatile rune on your target, priming it for detonation."
        keywords="Magic"
        actionType="Maneuver"
        range="Melee 1"
        targets="One creature or object"
        effect="When using this ability, choose one of the Enweave effects,
              ignoring the component that changes the damage type of your next
              strike. You brand your target with a rune imbued by the effect you
              chose, priming it for detonation. At the end of your turn, the
              rune is primed. When a rune is primed, the next time the branded
              target is damaged, the rune detonates, applying its effect to
              every enemy within range 2 of it. If the branded effect already
              has an area, it is increased by 2 instead. If the branded effect
              has a push effect, it is relative to the branded target’s
              location."
        spend={
          <Detail
            detailName="Spend 2 Balance"
            detailValue="The rune is immediately primed, allowing you to detonate it this turn."
          />
        }
      />
    </Column>

    <Column>
      <Feature title="Soulbound">
        <Text>
          Soulbound Your Soulblade is more than a weapon - it's an extension of
          your soul. Its appearance reflects the innermost truth of who you are.
          You are never truly separated from it; if it's not in your hands, you
          can summon it instantly as a free maneuver.
        </Text>
        <Text>
          Your Soulforged abilities can only be used with your Soulblade. To
          bond with a new weapon, you must perform a ritual lasting several
          hours to transfer your bound soul fragment from another weapon to it.
          You may bond with as many weapons as a kit grants.
        </Text>
        <Text>
          By default, your Soulblade is sentient and capable of communicating
          with you, though you may choose to forgo this aspect of it.
        </Text>
      </Feature>
      <Ability
        title="Soulshape"
        subtitle="By reshaping the bound fragment of your soul, you persuade your Soulblade to take on a new form."
        keywords="Magic"
        actionType="Maneuver"
        range="Self"
        targets="Self"
        effect={
          <TextBlock>
            <Text>
              Choose a modified form for your Soulblade, each granting a
              distinct effect until the start of your next turn:
            </Text>
            <BulletList>
              <Detail
                detailName="Resonant"
                detailValue="The potency of your abilities is increased by 1."
              />
              <Detail
                detailName="Extended"
                detailValue="Weapon abilities have their distance increased by 2, and their area increased by 1. If the area is a line, you increase the size of one dimension, not both."
              />
              <Detail
                detailName="Keen"
                detailValue="Weapon abilities with rolled damage have their damage increased by your Reason score. Strikes have their damage increase by double your Reason score instead."
              />
              <Detail
                detailName="Fortified"
                detailValue="Your stability is increased by +1 until the end of your next turn, and you gain temporary stamina equal to double your Reason."
              />
            </BulletList>
            <Text>
              You cannot benefit from more than one form at the same time.
            </Text>
          </TextBlock>
        }
        spend={
          <Detail
            detailName="Spend 2 Balance"
            detailValue="You may choose two effects to benefit from at once."
          />
        }
      />
    </Column>
  </Page>
);

export default Maneuvers;
