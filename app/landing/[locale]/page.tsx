export default function Landing(props: { params: { locale: string } }) {
  const {
    params: { locale },
  } = props;
  return <h1>Landing {locale}!</h1>;
}
