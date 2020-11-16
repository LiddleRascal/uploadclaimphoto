import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  scroll: {
    paddingTop: theme.spacing(2),
    overflowY: "auto",
  },
}));

const getTime = () => {
  let hour = new Date().getHours();
  var timeGreeting =
    hour < 11 ? "Morning" : hour < 16 ? "Afternoon" : "Evening";
  return timeGreeting;
};

export default function InstructionsEigMatUI(props) {
  const classes = useStyles();
  const instructionsMode = props.instructionsMode;
  const userName = props.userName;
  const claimNumber = props.claimNumber;
  const timeOfDay = getTime();
  return (
    <Grid container direction="column" item>
      {instructionsMode === "UploadPhotos" ||
      instructionsMode === "UploadedPhotos" ? (
        <Grid container item spacing={2} direction="column">
          <Grid item>
            Good {timeOfDay}, {userName}.
          </Grid>
          <Grid item>
            In order to most accurately process your recent claim ({claimNumber}
            ), we ask that you submit photos of the damage that you reported.
          </Grid>
        </Grid>
      ) : instructionsMode === "SubmittedPhotos" ? (
        <Grid container item spacing={2} direction="column">
          <Grid item>
            Thank you for uploading photos! This will greatly help us process
            your claim (#{claimNumber}).
          </Grid>
          <Grid item>
            If you'd like to add additional pictures, just click the button
            below.
          </Grid>
          <Grid item>
            You can add pictures at a later date, as well, by using the link
            provided to you in the email.
          </Grid>
        </Grid>
      ) : instructionsMode === "ContactUs" ? (
        <Grid container item spacing={2} direction="column" justify="center">
          <Grid item>
            Contact our home office today to find out how we can help.
          </Grid>
          <Grid container item spacing={2} directions="column" justify="center">
            <Grid item>Email:</Grid>
            <Grid item>
              <a href="mailto:customerservice@eigrestoration.com">
                customerservice@eigrestoration.com
              </a>
            </Grid>
            <Grid item>Phone:</Grid>
            <Grid item>
              <a href="tel:8002377796">1-800-237-7796</a>
            </Grid>
          </Grid>
        </Grid>
      ) : instructionsMode === "PhotoHelp" ? (
        <Grid
          container
          spacing={2}
          item
          direction="column"
          className={classes.scroll}
        >
          <Grid item>
            In order to most efficiently process your claim, we ask that you
            submit photos of the damage that you reported. The photos should
            clearly show the damage itself, as well as the surrounding areas.
          </Grid>
          <Grid item>
            <b>What Images To Take</b>
            <br />
            Photograph:
            <ul>
              <li>
                The front of your house, with a mailbox or your house number
                clearly visible
              </li>
              <li>
                Any spoiled foods or perishable goods included in the claim,
                prior to throwing them away
              </li>
              <li>
                Each damaged room or area from a variety of angles
                <ul>
                  <li>Wide-angle views of the room as a whole</li>
                  <li>
                    Photos of the top half of the room (walls and ceiling), as
                    well as the lower half of the room (floor and baseboards) to
                    establish the layout
                  </li>
                </ul>
              </li>
              <li>
                Any items that were damaged. If an item’s location is not
                clearly visible in the room pictures, include both close-up
                images of the damage and wider shots
              </li>
              <li>
                Any damage to the room itself (broken windows, water marks,
                etc.).
              </li>
              <li>
                Serial numbers or model numbers for any damaged appliances or
                electronics
              </li>
            </ul>
            You may want to take video of the damaged areas, as well.
          </Grid>
          <Grid item>
            <b>How to Take Helpful Pictures</b>
            <ul>
              <li>
                Use as much light as possible. Open curtains or blinds, or use a
                light source to allow for clarity Hold your camera as still as
                possible.
              </li>
              <li>
                If needed, steady it on a firm surface or use a tripod Ensure
                that your camera has focused.
              </li>
              <li> Especially in low light, this may take a second</li>
            </ul>
          </Grid>
        </Grid>
      ) : null}
    </Grid>
  );
}
