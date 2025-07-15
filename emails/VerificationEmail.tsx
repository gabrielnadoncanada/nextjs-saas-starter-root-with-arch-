import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Text,
} from '@react-email/components';

export const VerificationEmail = ({ url }: { url: string }) => (
  <Html>
    <Head />
    <Preview>Verify your email</Preview>
    <Body style={{ fontFamily: 'sans-serif' }}>
      <Container>
        <Text>Click the link below to verify your email:</Text>
        <Text>
          <a href={url}>{url}</a>
        </Text>
      </Container>
    </Body>
  </Html>
);

export default VerificationEmail;