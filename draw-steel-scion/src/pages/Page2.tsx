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
  Ability,
  Detail,
  Feature,
} from "../components";

const Page2 = () => (
  <Page>
    <Column>
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
            detailValue="If used immediately after performing a strike with melee range, you may repeat that strike at your target destination, as long as it costs 5 balance or fewer."
          />
        }
      />
    </Column>
    <Column>
      <Ability
        title="Runebrand"
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
                detailName="Catalyst"
                detailValue="The potency of your abilities is increased by 1."
              />
              <Detail
                detailName="Extended"
                detailValue="Melee abilities using this weapon have their distance increased by 2, and their area increased by 1. If the area is a line, you increase the size of one dimension, not both."
              />
              <Detail
                detailName="Sharp"
                detailValue="Melee abilities with rolled damage have their damage increased by your Reason score. Strikes that target only a single creature have their damage increase by double your Reason score instead."
              />
              <Detail
                detailName="Defensive"
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

export default Page2;
