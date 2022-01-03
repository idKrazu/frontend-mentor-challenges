import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { paths } from "../data/paths";
import styled from "styled-components";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #333;
    color: white;
    display: flex;
    justify-content: center;
    width: 100vw;
    box-sizing: border-box;
    font-family: "Libre Franklin", sans-serif;
  font-weight: 400;

  }
  * {
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-family: "Libre Baskerville", serif;
  font-weight: 700;
  margin: 20px;
`;
const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 1.2em;
  text-align: center;
  opacity: 0.9;
`;

const Challange = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 400px;
  height: 300px;
  img {
    border-radius: 10px;
    transition: 200ms ease-out;
  }

  &:hover {
    img {
      filter: brightness(70%);
    }
  }
`;

const LinkBox = styled.div`
  position: absolute;
  background-color: rgba(11, 11, 11, 0.5);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  border-radius: 0 0 10px 10px;
  bottom: 0;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Adam Sokólski</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Libre+Franklin:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <Container>
        <Title>Adam Sokólski</Title>
        <SubTitle>
          Websites made looking as close to the design as possible.
        </SubTitle>
        {paths.map((path) => (
          <Challange key={path.path}>
            <Link href={path.path}>
              <a>
                {" "}
                <ImageContainer>
                  <Image
                    src={path.img}
                    alt={path.name}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center center"
                  />
                </ImageContainer>
              </a>
            </Link>
            <LinkBox>
              <Link href={path.path}>
                <a> {path.name}</a>
              </Link>
            </LinkBox>
          </Challange>
        ))}
      </Container>
    </>
  );
}
