import React from "react";
import styled from "styled-components";
import Section from "./Section";
function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgrounImg="model-s.jpg"
        leftBtnText="Custom"
        righttBtnText="Existing Invontory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgrounImg="model-y.jpg"
        leftBtnText="Custom"
        righttBtnText="Existing Invontory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgrounImg="model-3.jpg"
        leftBtnText="Custom"
        righttBtnText="Existing Invontory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgrounImg="model-x.jpg"
        leftBtnText="Custom"
        righttBtnText="Existing Invontory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgrounImg="solar-panel.jpg"
        leftBtnText="Order now"
        righttBtnText="Learn more"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backgrounImg="solar-roof.jpg"
        leftBtnText="Order now"
        righttBtnText="Learn more"
      />
      <Section
        title="Accessories"
        description=""
        backgrounImg="accessories.jpg"
        leftBtnText="Shop now"
      />
    </Container>
  );
}

export default Home;
const Container = styled.div`
  height: 100vh;
  /* خصائص تنسيق أخرى */
`;
