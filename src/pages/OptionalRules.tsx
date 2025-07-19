import {
  Page,
  Column,
  Text,
  Heading2,
  Heading3,
  AdvancementTable,
} from "../components";

const OptionalRules = () => (
  <Page id="optional-rules">
    <Column>
      <Heading2>Optional Rules</Heading2>
      <Text>
        These rules are optional and can be used to add additional flavor to the
        game.
      </Text>

      <Heading3>Simple Tests</Heading3>
      <Text>
        When a PC wants to make a test that has no apparent risk, the director
        may choose to use a simple test instead.
      </Text>

      <AdvancementTable
        columns={[
          "Power Roll",
          "Easy Outcomes",
          "Medium Outcomes",
          "Hard Outcomes",
        ]}
        rows={[
          {
            "Power Roll": "Less than 11",
            "Easy Outcomes": "Partial Success",
            "Medium Outcomes": "Failure",
            "Hard Outcomes": "Failure",
          },
          {
            "Power Roll": "12–16",
            "Easy Outcomes": "Success",
            "Medium Outcomes": "Partial Success",
            "Hard Outcomes": "Failure",
          },
          {
            "Power Roll": "17+",
            "Easy Outcomes": "Success",
            "Medium Outcomes": "Success",
            "Hard Outcomes": "Success",
          },
          {
            "Power Roll": "Natural 19 or 20",
            "Easy Outcomes": "Success with a reward",
            "Medium Outcomes": "Success with a reward",
            "Hard Outcomes": "Success with a reward",
          },
        ]}
      />
    </Column>
  </Page>
);

export default OptionalRules;
