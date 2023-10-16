import { MockedForm } from "../../utils/StoriesReduxProvider1";

import { CurrencyTable } from "components";

const meta = {
  title: "Components/CurrencyTable",
  component: CurrencyTable,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = {
  decorators: [(story) => <MockedForm>{story()}</MockedForm>],
};

export default meta;
