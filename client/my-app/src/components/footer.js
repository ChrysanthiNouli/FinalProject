import React from "react";
import { Box, FooterContainer, FooterLink,} from "./footerStyle";
 
const Footer = () => {
    return (
        <Box>             
            <FooterContainer>
                    <FooterLink href="/about">
                        About us
                    </FooterLink>
                    <FooterLink>
                        Contact us
                    </FooterLink>
            </FooterContainer>
        </Box>
    );
};
export default Footer;