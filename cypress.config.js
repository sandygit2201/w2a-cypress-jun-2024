import dotenv from 'dotenv';
let envFile = process.env.NODE_ENV || 'qa'
dotenv.config({ path: `.env.${envFile}` })
import { defineConfig } from "cypress";
import * as fs from "fs";

let myUniqueId;
export default defineConfig({
  e2e: {
    cacheAcrossSpecs:true,
    projectId: "q2tniq",
    baseUrl: process.env.BASEURL,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        countFiles(folderName) {
          return new Promise((resolve, reject) => {
            fs.readdir(folderName, (err, files) => {
              if (err) {
                return reject(err);
              }
              resolve(files);
            });
          });
        },
        setMyUniqueId: (val) => {
          return (myUniqueId = val);
        },
        getMyUniqueId: () => {
          return myUniqueId;
        },
      });
    },
    watchForFileChanges: false,
    screenshotOnRunFailure: true,
    video:true,
    env: {
      adminURL: "https://google.com",
      userName: process.env.USERNAME,
      password: process.env.PASSWORD,
      displayName: process.env.DISPLAYNAME,

    },
  },
});
