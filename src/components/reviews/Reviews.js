import React from 'react';
import { reviews } from '../../assets/reviews';
import { ReviewSectionContainer, ReviewContainer, Review, Img, P, StarContainer} from './Reviews.styles';
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  return (
    <ReviewSectionContainer>
      <h2>From Our Customers</h2>
      <ReviewContainer>
        {reviews.map((review) => (
          <Review review={review} key={review._id}>
            <Img src={review.img}/>
            <StarContainer>
              <FaStar size={25} color="gold"/>
              <FaStar size={25} color="gold"/>
              <FaStar size={25} color="gold"/>
              <FaStar size={25} color="gold"/>
              <FaStar size={25} color="gold"/>
            </StarContainer>
            <P>"{review.content}"</P>
            <h3>~ {review.name}</h3>
          </Review>
        ))}
      </ReviewContainer>
    </ReviewSectionContainer>
  )
}

export default Reviews