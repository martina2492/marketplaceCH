import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";

const Testimonials = styled.div`
  display: flex;
  flex-direction: column;
  /*   background-color: #074519ad; */
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: ${(props) =>
    props.themeMode === "light" ? "white" : "#222"};
  color: ${(props) => (props.themeMode === "light" ? "#222" : "white")};
`;

const TestimonialsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: auto;
  flex-wrap: wrap;
  align-items: stretch;
  margin-bottom: 4%;
`;

const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  max-width: 300px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin: 10px;
  border-radius: 8px;

  h3 {
    font-size: 20px;
    margin-top: 2px;
    margin-bottom: 8px;
    color: #074519ad;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 16px;
    color: grey;
    font-weight: 200;
  }

  .testimonial-photo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 16px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const TestimonialsData = [
  {
    name: "John Smith",
    photo:
      "https://img.freepik.com/free-photo/happy-young-man_1098-20869.jpg?w=996&t=st=1676594215~exp=1676594815~hmac=6b79b40dd2eff5bf61a768b3898b1c1558e339fb5af7a01e018cb1b91a6c323f",
    feedback:
      "``I absolutely love using this app! The app's interface is user-friendly and has made my shopping experience much more efficient and stress-free.``",
  },
  {
    name: "Jane Doe",
    photo:
      "https://img.freepik.com/free-photo/cheerful-middle-aged-woman-with-curly-hair_1262-20859.jpg?w=996&t=st=1676593224~exp=1676593824~hmac=0d7244033cb8c93d74bb9fc944dc66e4442c1edd507754ea795c8c0a34df8979",
    feedback:
      "``This app has been a game changer for me! I can order my groceries from anywhere and have them delivered right to my door.``",
  },
  {
    name: "Bob Johnson",
    photo:
      "https://img.freepik.com/free-photo/half-length-shot-cheerful-senior-man-smiles-happily-with-white-teeth-wears-optical-glasses-sweater-isolated-brown-wall_273609-44148.jpg?17&w=996&t=st=1676594252~exp=1676594852~hmac=4e081d15500c30fe20f00f0d9541a38cd2f5a834caba093d2a9ff90900762235",
    feedback:
      "``I can't believe how much time I've saved using this app for my grocery shopping. It's so convenient and the customer service is fantastic.``",
  },
];

const TitleItem = styled.div`
  width: 100%;
  color: #074519ad;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5em;
  text-transform: capitalize;
  padding: 3% 0;
`;

const TestimonialCards = () => {
  return (
    <>
      <TitleItem>
        What our customers
        <br /> say?
      </TitleItem>
      {TestimonialsData.map((testimonial, index) => (
        <TestimonialCard key={index}>
          <div className="testimonial-photo">
            <img src={testimonial.photo} alt={testimonial.name} />
          </div>
          <h3>{testimonial.name}</h3>
          <p>{testimonial.feedback}</p>
        </TestimonialCard>
      ))}
    </>
  );
};

const TestimonialsSection = () => {
  const { themeMode } = useContext(ThemeContext);

  return (
    <Testimonials themeMode={themeMode}>
      <TestimonialsWrapper>
        <TestimonialCards />
      </TestimonialsWrapper>
    </Testimonials>
  );
};

export default TestimonialsSection;
