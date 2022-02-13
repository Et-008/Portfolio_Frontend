require("babel-register")({
  presets: ["es2015", "react"]
});

const router = require('./src/containers/main/main').default;
const Sitemap = require('react-router-sitemap').default;

(
    new Sitemap(router)
        .build('http://arun-et008.herokuapp.com/')
        .save('./public/sitemap.xml')
);