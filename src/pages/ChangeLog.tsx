import { Page, Column, Text, Title, Heading3, BulletList } from "../components";

const ChangeLog = () => (
  <Page id="changelog">
    <Column>
      <Title>Changelog</Title>

      <Heading3>V0.2.7</Heading3>
      <BulletList>
        <Text>Changed Enweave effect to apply to melee weapon abilities</Text>
        <Text>Reduced Phase Assault damage</Text>
        <Text>Changed Veil Piercer effect</Text>
        <Text>Renamed and reworked Fourfold Stroke to Ninefold Stroke</Text>
        <Text>Changed Horizon Step target to Special</Text>
        <Text>Changed Blink spend effect wording</Text>
      </BulletList>

      <Heading3>V0.2.6</Heading3>
      <BulletList>
        <Text>Added sidebar navigation</Text>
        <Text>Changed Soulshape effects</Text>
        <Text>
          Changed Aether Lash effect wording and nerfed damage slightly
        </Text>
        <Text>Changed Flowing Strike effect wording</Text>
        <Text>Nerfed Crescent Arc damage</Text>
        <Text>Changed Flowing Strike keywords</Text>
      </BulletList>

      <Heading3>V0.2.5</Heading3>
      <BulletList>
        <Text>Afterimage can no longer be targeted or destroyed</Text>
        <Text>Blink spend effect wording changed</Text>
        <Text>Enweave now only applies to melee strikes</Text>
        <Text>Runebrand now costs 1 balance</Text>
        <Text>Change wording on Blink spend effect</Text>
        <Text>
          Crescent Slash renamed to Crescent Arc, changed its keywords and
          effect
        </Text>
        <Text>Changed Fourfold Stroke keywords</Text>
        <Text>Changed Soulshape effect wording</Text>
      </BulletList>

      <Heading3>V0.2.4</Heading3>
      <BulletList>
        <Text>Switch 2nd-level perk option from crafting to supernatural</Text>
        <Text>Clarify Soulbound text</Text>
        <Text>
          Some abilities had 'Range: Melee', fixed to 'Range: Melee 1'
        </Text>
        <Text>Change Crescent Slash effect wording</Text>
        <Text>Change wording on Crushing Wave</Text>
        <Text>Changed damage and power roll effects on Glacial Bloom</Text>
        <Text>Changed wording on Soulshape: Defensive</Text>
        <Text>Blink turned to 7 squares instead of 5</Text>
      </BulletList>

      <Heading3>V0.2.3</Heading3>
      <BulletList>
        <Text>Change Enweave wording</Text>
        <Text>Change Runebrand wording</Text>
        <Text>Change Sanguine Thread wording</Text>
        <Text>Glacial Bloom changed damage</Text>
      </BulletList>

      <Heading3>V0.2.2</Heading3>
      <BulletList>
        <Text>Change the first balance gain trigger</Text>
      </BulletList>

      <Heading3>V0.2.1</Heading3>
      <BulletList>
        <Text>Changed Veil Piercer effect</Text>
        <Text>Update Writ of Flame and Writ of Sanctuary blurbs</Text>
        <Text>Update Lightning Strike effect</Text>
        <Text>Update Horizon Step blurb</Text>
        <Text>Change Phase Assault effect wording</Text>
      </BulletList>

      <Heading3>V0.2.0</Heading3>
      <BulletList>
        <Text>Rename the class from Magus to Scion</Text>
        <Text>Replace the class description</Text>
        <Text>
          Rename 'Spellstrike' to 'Enweave' in both the ability and features
          referencing it
        </Text>
        <Text>
          Change the description of the ability section and the ability blurb
        </Text>
        <Text>
          Liminal Runes text changed, applies bane instead of weakened
        </Text>
      </BulletList>

      <Heading3>V0.1.7</Heading3>
      <BulletList>
        <Text>Writ of Flame turned into a Main Action</Text>
      </BulletList>

      <Heading3>V0.1.6</Heading3>
      <BulletList>
        <Text>Acid strike becomes save ends</Text>
        <Text>Umbral strike has some damage added to it</Text>
        <Text>Freezing strike becomes save ends</Text>
        <Text>
          Updated Runebrand description to clarify interaction with push
        </Text>
        <Text>Added blurb to beginning of class</Text>
      </BulletList>
    </Column>

    <Column className="flex flex-col">
      <Heading3>V0.1.5</Heading3>
      <BulletList>
        <Text>Renamed 'Aegis Sigil' to 'Writ of Sanctuary'</Text>
        <Text>Renamed 'Scorchbrand Ward' to 'Writ of Flame'</Text>
        <Text>Renamed 'Sear Rune' to 'Runebrand'</Text>
        <Text>Changed text of 'Liminal Runes'</Text>
        <Text>Changed Runewright description</Text>
        <Text>Renamed 'Ensnaring Glyph' to 'Ensnaring Rune'</Text>
        <Text>Changed Enweave effect and added spend effect</Text>
        <Text>Changed Soulshape spend effect</Text>
        <Text>Removed +A from Crescent Slash, added 2 damage</Text>
        <Text>
          Changed Veil Piercer effect wording and fixed T1 damage missing
        </Text>
      </BulletList>

      <Heading3>V0.1.4</Heading3>
      <BulletList>
        <Text>Changed balance discount to be once per combat round</Text>
        <Text>Liminal Runes changes</Text>
        <Text>Phase Assault changes</Text>
        <Text>Godspeed changes (again)</Text>
      </BulletList>

      <Heading3>V0.1.3</Heading3>
      <BulletList>
        <Text>Buffed Godspeed</Text>
        <Text>Changed description on Swordmaster kit</Text>
        <Text>Buffed Cross Slash</Text>
        <Text>Buffed 'Disruption Runes' and renamed to 'Liminal Runes'</Text>
      </BulletList>

      <Heading3>V0.1.2</Heading3>
      <BulletList>
        <Text>Replace Twinned Enweave with Mystic Shield</Text>
        <Text>Twinned Enweave will be a level 4 ability instead</Text>
      </BulletList>

      <Heading3>V0.1.1</Heading3>
      <BulletList>
        <Text>Misc. changes (typos, HR cost tweaks)</Text>
      </BulletList>

      <Heading3>V0.1.0</Heading3>
      <BulletList>
        <Text>Initial release</Text>
      </BulletList>

      <Text className="text-sm italic self-end justify-self-end">
        The Scion is an independent product published under the DRAW STEEL
        Creator License and is not affiliated with MCDM Productions, LLC. DRAW
        STEEL © 2024 MCDM Productions, LLC.
      </Text>
    </Column>
  </Page>
);

export default ChangeLog;
