import React from 'react'
import { StyledFooter, Container, Title, Hours, Contact } from './Footer.styled';

interface FooterProps {

}

const Footer: React.FC = () => {
    return (
      <StyledFooter>
        <Container>
        <Hours>
          <Title>Godziny otwarcia</Title>
            pon-pt: 8.00-16.00
            <br />
            sb-nd: 8.00-12.00
        </Hours>
        <Contact>
        <Title>Kontakt</Title>
            ul. Świerkowa 1
            <br />
            60-722 Poznań
            <br />
            +48 123 321 987
        </Contact>
        </Container>
      </StyledFooter>
    );
}

export default Footer;