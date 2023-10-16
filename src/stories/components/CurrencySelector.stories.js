import { MockedForm } from "../../utils/StoriesReduxProvider1";

import { CurrencySelector } from "components";

const meta = {
  title: "Components/CurrencySelector",
  component: CurrencySelector,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = {
  decorators: [(story) => <MockedForm>{story()}</MockedForm>],
};

export default meta;
