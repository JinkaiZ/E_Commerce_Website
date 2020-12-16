import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='nice desk'></img>
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Furniture sellers developed the practice of buying furniture at
            wholesale prices from manufacturers and selling them in showrooms,
            which gained popularity in the mid-1800s. Large stores kept their
            own workshops for specialty items. With the rapid development of
            retail trade the direct link between the customer and the furniture
            maker began to disappear. By the early 1900s mass production of furniture
            was well established in the United States, with principal manufacturing
            centers at Jamestown, New York; High Point, North Carolina; and Grand
            Rapids, Michigan.
  </p>
        </article>
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
