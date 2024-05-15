import util from "util";

const commonData = {
  firstName: "Vasilis",
  lastName: "Voyiadjis",
  username: "billvog",
  website: "https://billvog.com",
  avatar: "https://avatars.githubusercontent.com/u/54022416?v=4",
  description:
    "Welcome to Vasilis Voyiadjis' Portfolio Website. Explore and learn about my featured projects and get to know me 8-bits more.",
};

function getPersonOpengraphTags() {
  return (
    <>
      <meta property="og:type" content="profile" />
      <meta property="og:profile:first_name" content={commonData.firstName} />
      <meta property="og:profile:last_name" content={commonData.lastName} />
      <meta property="og:profile:username" content={commonData.username} />
      <meta property="og:profile:gender" content="male" />
      <meta property="og:description" content={commonData.description} />
      <meta
        property="og:title"
        content={util.format(
          "%s %s",
          commonData.firstName,
          commonData.lastName
        )}
      />
      <meta property="og:url" content={commonData.website} />
      <meta property="og:image" content={commonData.avatar} />
    </>
  );
}

function getPersonMicrodata() {
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org/",
      "@type": "Person",
      givenName: commonData.firstName,
      familyName: commonData.lastName,
      description: commonData.description,
      image: commonData.avatar,
      url: commonData.website,
      gender: "Male",
      nationality: {
        "@type": "Country",
        name: "Greece",
      },
    }),
  };
}

export default function getSeoHeaderData() {
  return (
    <>
      {/* Common tags */}
      <meta name="description" content={commonData.description} />
      <meta
        name="keywords"
        content="basiles, bogiatzhs, bogiatzis, billvog, vasilis, voyiadjis, βασιλης, βογιατζης, programmer, about me"
      />
      {/* Opengraph tags */}
      {getPersonOpengraphTags()}
      {/* Microdata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={getPersonMicrodata()}
        key="person-jsonld"
      />
    </>
  );
}
