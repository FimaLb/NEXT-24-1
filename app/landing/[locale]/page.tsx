import { Locale, i18n } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import { Title } from "./_components/Title";

export async function generateStaticPatams() {
  return i18n.locales.map((locale) => ({ locale: locale }));
}

export default async function Landing(props: { params: { locale: Locale } }) {
  const {
    params: { locale },
  } = props;
  const dictionary = await getDictionary(locale);
  return (
    <main>
      <h1>Landing {locale}!</h1>
      <Title i18n={dictionary.pages.landing}>
        {dictionary.pages.landing.title}
      </Title>
    </main>
  );
}
