import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import CountUp from "react-countup";
import cx from "classnames";
import styles from "./Cards.module.css";

const Cards = ({ data: { data } }) => {
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justifyContent="center">
        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.infected)}
          xs={12}
          md={3}
        >
          <CardContent>
            <Typography
              color="textSecondary"
              gutterBottom
              className={cx(styles.text, styles.infectedText)}
            >
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={
                  data?.totalActiveCases
                    ? data?.totalActiveCases
                    : "Infected Cases"
                }
                duration={3}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date().toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of Covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography
              color="textSecondary"
              gutterBottom
              className={cx(styles.text, styles.recoveredText)}
            >
              recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={data?.discharged ? data?.discharged : "Recovered Cases"}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date().toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of recoveries from cases of Covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.deaths)}
          xs={12}
          md={3}
        >
          <CardContent>
            <Typography
              color="textSecondary"
              gutterBottom
              className={cx(styles.text, styles.deathText)}
            >
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={data?.death ? data?.death : "Deaths"}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">Real Date</Typography>
            <Typography variant="body2">
              Number of deaths caused by Covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
