import React, { FC } from "react";

import { Title } from "../styled/PageTitle.styled";

const PageTitle: FC<{ title: string }> = ({ title }) => <Title>{title}</Title>;

export default PageTitle;
