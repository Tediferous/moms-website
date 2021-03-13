import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";
import y1 from "images/y1.jpg";
import y2 from "images/y2.jpg";
import y3 from "images/y3.jpg";
import y4 from "images/y4.jpg";
import y5 from "images/y5.jpg";
import y6 from "images/y6.jpg";
import y7 from "images/y7.jpg";
import y8 from "images/y8.jpg";
import y9 from "images/y9.jpg";
import y10 from "images/y10.jpg";
import y11 from "images/y11.jpg";
import y12 from "images/y12.jpg";
import y13 from "images/y13.jpg";
import y14 from "images/y14.jpg";
import y15 from "images/y15.jpg";
import y16 from "images/y16.jpg";
import y17 from "images/y17.jpg";
import y18 from "images/y18.jpg";
import y19 from "images/y19.jpg";
import y20 from "images/y20.jpg";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
  ${props =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

export default ({
  headingText = "Queeny Creations",
  posts = [
    {
      imageSrc:
        // "https://i.kinja-img.com/gawker-media/image/upload/t_original/t4hmrdlnhuv213b6hcny.png",
        y1,
      title: "Hand Made Jewelry",
      description:
        "By Queeny.",
      featured: true
    },
    {
      imageSrc: y14,
      featured: false
    },
    {
      imageSrc: y2,
      featured: false
    },
    {
      imageSrc: y15,
      featured: false
    },
    {
      imageSrc: y9,
      featured: false
    },
    {
      imageSrc: y16,
      featured: false
    },
    {
      imageSrc: y3,
      featured: false
    },
    {
      imageSrc: y17,
      featured: false
    },
    {
      imageSrc: y10,
      featured: false
    },
    {
      imageSrc: y18,
      featured: false
    },
    {
      imageSrc: y4,
      featured: false
    },
    {
      imageSrc: y19,
      featured: false
    },
    {
      imageSrc: y11,
      featured: false
    },
    {
      imageSrc: y20,
      featured: false
    },
    {
      imageSrc: y5,
      featured: false
    },
    {
      imageSrc: y12,
      featured: false
    },
    {
      imageSrc: y6,
      featured: false
    },
    {
      imageSrc: y13,
      featured: false
    },
    {
      imageSrc: y7,
      featured: false
    },
    {
      imageSrc: y8,
      featured: false
    },
  ]
}) => {
  const [visible, setVisible] = useState(7);
  const onLoadMoreClick = () => {
    setVisible(v => v + 6);
  };
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Posts>
            {posts.slice(0, visible).map((post, index) => (
              <PostContainer key={index} featured={post.featured}>
                <Post className="group" as="a" href={post.url}>
                  <Image imageSrc={post.imageSrc} />
                  <Info>
                    <Category>{post.category}</Category>
                    <CreationDate>{post.date}</CreationDate>
                    <Title>{post.title}</Title>
                    {post.featured && post.description && <Description>{post.description}</Description>}
                  </Info>
                </Post>
              </PostContainer>
            ))}
          </Posts>
          {visible < posts.length && (
            <ButtonContainer>
              <LoadMoreButton onClick={onLoadMoreClick}>Load More</LoadMoreButton>
            </ButtonContainer>
          )}
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};

// const getPlaceholderPost = () => ({
//   imageSrc:
//     "https://images.unsplash.com/photo-1418854982207-12f710b74003?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
//   category: "Travel Guide",
//   date: "April 19, 2020",
//   title: "Visit the beautiful Alps in Switzerland",
//   description:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//   url: "https://reddit.com"
// });
