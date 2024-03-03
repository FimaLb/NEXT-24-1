import { PropsWithChildren } from "react";

interface TitleProps extends PropsWithChildren {
  i18n: { title: string; tooltip: string };
}

export const Title: React.FunctionComponent<TitleProps> = ({
  children,
  i18n,
}) => {
  return <h1 title={i18n.tooltip}>{children}</h1>;
};
