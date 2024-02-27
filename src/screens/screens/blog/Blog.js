import React from 'react';
import { Helmet } from 'react-helmet';
import { SectionContainer, Title } from './Blog.styles';

const Blog = ({ author, isPublished, title, metaDescription, metaKeywords, date, sectionOneHeader, sectionOneContent, sectionTwoHeader, sectionTwoContent, sectionThreeHeader, sectionThreeContent, sectionFourHeader, sectionFourContent, sectionFiveHeader, sectionFiveContent, conclusionHeader, conclusionContent }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
      </Helmet>
      <header>
        <Title>{title}</Title>
        <p>{date}</p>
        <p>{author}</p>
      </header>
      <main>
        <article>
          <SectionContainer>
            <h2>{sectionOneHeader}</h2>
            <p>{sectionOneContent}</p>
          </SectionContainer>
          <SectionContainer>
            <h2>{sectionTwoHeader}</h2>
            <p>{sectionTwoContent}</p>
          </SectionContainer>
          <SectionContainer>
            <h2>{sectionThreeHeader}</h2>
            <p>{sectionThreeContent}</p>
          </SectionContainer>
          <SectionContainer>
            <h2>{sectionFourHeader}</h2>
            <p>{sectionFourContent}</p>
          </SectionContainer>
          <SectionContainer>
            <h2>{sectionFiveHeader}</h2>
            <p>{sectionFiveContent}</p>
          </SectionContainer>
          <SectionContainer>
            <h2>{conclusionHeader}</h2>
            <p>{conclusionContent}</p>
          </SectionContainer>
        </article>
      </main>
    </div>
  )
}

export default Blog