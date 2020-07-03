import React from "react"
import { IoIosArrowRoundUp } from "react-icons/io"

import {
    StyledSection,
    Image,
    Info,
    SectionTitle,
    Content,
    Footer,
    ScrollToTop,
} from "./styles"

const Contacts = () => {
    return (
        <StyledSection id="contacts">
            <Image
                background
                image={`https://ik.imagekit.io/nubelsondev/contact_O-1O7TZec.webp`}
            />
            <Info>
                <SectionTitle
                    title="Contactos"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ex vehicula, vulputate diam vel, ultrices mauris."
                />

                <Content>
                    <div>
                        <p>Street name, nº, door</p>
                        <p>ZIP</p>
                        <p>City, Country</p>
                    </div>

                    <div>
                        <p>(+000)-923-456-789</p>
                        <p>we@email.com</p>
                        <a href="mailto:geral@iguana.com">Email Us</a>
                    </div>
                </Content>

                <Footer>
                    <p>
                        Copyright All Rights Reserved © 2020 <br /> Design and
                        Built by <strong>nubelsondev</strong>
                    </p>
                </Footer>

                <ScrollToTop to="home">
                    <IoIosArrowRoundUp size="4rem" color="#fff" />
                </ScrollToTop>
            </Info>
        </StyledSection>
    )
}

export default Contacts
