# Upload Claim Photos

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and was created as an exercise to prove that I have at least basic REACT.js skills.

I created two separate UIs for this application. While similar, the UI as specified felt clunky and there were some use cases (Such as getting back to Upload Photos from the Photo Help page or removing photos from the image list) that I felt should be addressed in a different UI. The EIG Material UI is a little more streamlined familiar to mobiles user in my humble opinion. While it is not perfect, it is a decent indication of my level (Or lack thereof) of expertise.

> This application is intended for use on a mobile device, but can be viewed and / or used on a large screen although the aligments may be a little off.

The exercise was mostly successful. Some issue could not be resolved and running out of time, I have submited the repository as is with the knowledge that it is extremely rough around the edges.

## Anticipated Work Flow
### Spec'd UI
1. Enter User Name
2. Enter Claim Number
3. Click Sign In button
   > See known issues for limitations / unresolved issues
4. Click Upload Photo button
5. Select a few photos
   > See known issues for limitations / unresolved issues
6. Click Submit button
   > Note: Clicking this link **will** clear images array
7. Repeat to your kind and wonderful heart's content
* Click What photos should I take? link (when visible)
  - The requirement don't allow an easy way to go back to the Upload Photos page
  > Note: Clicking this link **will not** clear the images array
  - The only way specified is to go through the Contact Us page
* Click Contact Us link (when visible)
  > Note: Clicking this link **will not**  clear the images array
  - Click Email link to open email link with support address
    > Note: Untested  
  - Click Phone Number Link to open dialer with phone number populated
    > Note: Untested
8. Click EIG Logo to go back to the Sign In page
  > Note: Clicking this link **will** clear images array

### EIG Material UI
1. Set Use Spec'd UI toggle=false
2. Enter User Name
3. Enter Claim Number
4. Click Sign In button
   > See known issues for limitations / unresolved issues
5. Click Select Photos button
6. Select a few photos
   > See known issues for limitations / unresolved issues
7. Click Submit button
8. Rinse > Repeat
* Click Help Icon (when visible)
  - Select Photo Help option
    > Note: Clicking this link **will not** clear the images array
  - Read Photo Help information
  - Click Back Button to go back to Upload Photos page
  - Select Contact Us option
    > Note: Clicking this link **will not** clear the images array
  - Click Email link to open email link with support address
    > Note: Untested  
  - Click Phone Number Link to open dialer with phone number populated
    > Note: Untested
  - Click Back Button to go back to Upload Photos page
8. Click EIG Logo to go back to the Sign In page
  > Note: Clicking this link **will** clear images array
## Use Spec'd UI setting

You can find this setting on the sign in page. This flag will change between the two UIs. When ture the UI is as specified in the EIG - Photo Upload_ForRLund.pdf document. When false the UI will be displayed as I interpreted them.

## Signing Out

Clicking the EIG logo on the spec built application will take you to a sign in page where you can change the User Name and Claim Number and click the sign in button to reload the application with the specified User Name / Claim Number.

# Known Issues / Concerns

## Application File Structure

1. As I was extremely tardy in completing this exercise and out of respect for your patience, I chose to split the UI into two different file trees. While this is not something that I would expect, nor approve of, in a deployment version of an application I chose to go ahead and submit in this state.

## State Variables and Code Comments

1. There's a lot of state being passed around the components. My assumption is that there is an extremely elegant way to do this, but I do not posses that magic at this time.
2. I forwent code comments after App.js - I honestly wasn't sure whether it is good practice or not in product to comment, given that it will increase the size of the files

## StrictMode

1. StrictMode has been turned off due to a transistion [bug](https://github.com/mui-org/material-ui/issues/13394) in the the material-ui BackDrop component that is being used as a loading screen when the user uploads photos.

## Uploading Photos

1. Clicking Upload Photos followed by the "Back" or "cancel button will result in a permanent loading screen
2. Uploading more than the maxNumber constant in UploadingImages.jsx will result in a permanent loading screen

## Field Validation

1. There is currently no validation on the UserName / Claim number fields of the spec built application

# Included Libraries

I've included he following libraries to expedite the dev process

## Material-UI

React components for faster and easier web development. Build your own design system, or start with Material Design.

Visit the website: https://material-ui.com/

## ImageUploading

The simple images uploader applied Render Props pattern.

This approach allows you to fully control UI component and behaviours.

Visit the git: https://github.com/vutoan266/react-images-uploading

# Available Scripts

In the project directory, you can run:

## `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## 'npm run build'
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!