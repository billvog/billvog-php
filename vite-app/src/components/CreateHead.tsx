import Head from "@/components/Head";

const MetaData = {
  firstName: "Vasilis",
  lastName: "Voyiadjis",
  username: "billvog",
  website: "https://billvog.com",
  avatar: "https://avatars.githubusercontent.com/u/54022416?v=4",
  title: "Vasilis Voyiadjis",
  description:
    "Welcome to Vasilis Voyiadjis' Portfolio Website. Explore and learn about my featured projects and get to know me 8-bits more.",
};

interface Props {
  title?: string;
  description?: string;
}

export default function CreateHead({
  title = MetaData.title,
  description = MetaData.description,
}: Props) {
  return (
    <Head>
      {/* Common Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta
        name="keywords"
        content="basiles, bogiatzhs, bogiatzis, billvog, vasilis, voyiadjis, βασιλης, βογιατζης, programmer, about me"
      />

      {/* Opengraph Tags */}
      <meta property="og:type" content="profile" />
      <meta property="og:profile:first_name" content={MetaData.firstName} />
      <meta property="og:profile:last_name" content={MetaData.lastName} />
      <meta property="og:profile:username" content={MetaData.username} />
      <meta property="og:profile:gender" content="male" />
      <meta property="og:description" content={MetaData.description} />
      <meta
        property="og:title"
        content={[MetaData.firstName, MetaData.lastName].join(" ")}
      />
      <meta property="og:url" content={MetaData.website} />
      <meta property="og:image" content={MetaData.avatar} />

      {/* Microdata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Person",
            givenName: MetaData.firstName,
            familyName: MetaData.lastName,
            description: MetaData.description,
            image: MetaData.avatar,
            url: MetaData.website,
            gender: "Male",
            nationality: {
              "@type": "Country",
              name: "Greece",
            },
          }),
        }}
        key="person-jsonld"
      />
    </Head>
  );
}
