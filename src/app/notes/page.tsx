import { useEffect } from "react";
import { Column, Flex, Heading, Text } from "@/once-ui/components";

export async function generateMetadata() {
  const title = "Akshay Notes";
  const description = "This page will automatically redirect you to Akshay Notes.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: "https://mynotes.akshaygupta.me",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default function Notes() {
  // useEffect(() => {
  //   window.location.href = "https://mynotes.akshaygupta.me";
  // }, []);

  return (
    <Column maxWidth="m">
      <Flex fillWidth mobileDirection="column" horizontal="center">
        <Column flex={9} maxWidth={40}>
          <Column fillWidth gap="m" marginBottom="xl">
            <Heading as="h1" variant="display-strong-xl">
              Redirecting...
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak">
              You are being redirected to Akshay's Notes. If not, click{" "}
              <a href="https://mynotes.akshaygupta.me" target="_blank" rel="noopener noreferrer">
                here
              </a>.
            </Text>
          </Column>
        </Column>
      </Flex>
    </Column>
  );
}
