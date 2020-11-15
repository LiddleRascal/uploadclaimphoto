# Upload Claim Photos

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Cheats
Clicking the EIG logo on the spec built application will take you to a sign in page where you can change the User Name and Claim Number and click the sign in button to reload the application with the specified User Name / Claim Number.

## Known Issues / Concerns
### Uploading Photos
1. Clicking Upload Photos followed by the "Back" or "cancel button will result in a permanent loading screen
2. Uploading more than the maxNumber constant in UploadingImages.jsx will result in a permanent loading screen

### Signing In
1. There is currently no validation on the UserName / Claim number fields of the spec built application

## Included Libraries
I've included he following libraries to expedite the dev process

### Material-UI
React components for faster and easier web development. Build your own design system, or start with Material Design.

Visit the website: https://material-ui.com/

### ImageUploading
The simple images uploader applied Render Props pattern.

This approach allows you to fully control UI component and behaviours.

Visit the git: https://github.com/vutoan266/react-images-uploading

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.