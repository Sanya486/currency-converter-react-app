import React from "react";
import { Title } from "../styled/PageTitle.styled";

const PageTitle: React.FC<{title: string}> = ({ title }) => <Title>{title}</Title>;

export default PageTitle;
