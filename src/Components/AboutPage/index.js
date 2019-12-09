import React from "react";
import Grid from "@material-ui/core/Grid";

import "./style.css";

const AboutPage = () => {
  return (
    <div styles={{ flexGrow: "1" }}>
      <h3>Coffee Grind Size:</h3>
      <Grid container direction="column" justify="center" alignItems="center">
        <div>
          <Grid item xs={6}>
            <img
              src="https://i.ibb.co/Hg5m39Q/fine-label.png"
              alt="fine"
              className="img-wrapper"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src="https://i.ibb.co/y0qfRnF/medium-label.png"
              alt="medium"
              className="img-wrapper"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src="https://i.ibb.co/ZW27QMp/coarse-label.png"
              alt="coarse"
              className="img-wrapper"
            />
          </Grid>
        </div>
        <div>
          <h3>Water to Coffee Ratio: </h3>
          <p className="img-wrapper">
            A brew ratio is simply a guide to help you figure out how much water
            and coffee you should use for brewing. <br />
            Obviously this ratio depends on your brew method, type of coffee,
            and personal taste preference. <br />
            <br />
            Choosing 1:12 ratio will result in a stronger more intense flavor.
            If you add milk and sugar, It's suggested brewing a densier 1:12 or
            1:13 ratio because the body <br />
            and flavor will hold up better to the added dairy and sweetness.
            <br />
            <br />
            If you’re drinking your coffee black, It's suggested to use the
            lighter ratios like 1:14 or 1:15.
            <br />
            This ratio gives the different compounds more room. Extra water
            gives the flavor more space, <br />
            and it’s easier to notice subtleties in the brew.
            <br />
          </p>
        </div>
      </Grid>
    </div>
  );
};
export default AboutPage;
