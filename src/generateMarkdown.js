function renderLicenseBadge(license){
    if(license != "none"){
        return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return "";
}

export default function generateMarkdown(data){
    return `#${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Deployed Application URL
${data.link}

## Screenshot
![SCREENSHOT GOES HERE ](${data.screenshot})

## Table of Contents
*[Feature](#features)
*[Language & Dependencies](#languageanddependencies)
*[How to Use This Application](#HowToUseThisApplication)
*[Contributors](#contributors)
*[Testing](#testing)
*[Questions](#questions)

## Features
${data.feature}

## Language & Dependencies
${data.require}

## How to use this application:
${data.usage}

## Contributors
${data.contributors}

## Testing
${data.test}

## Questions
Please send your question [here] (mailto"${data.email}?subject=[Github]%20Dev%20Connect) or visit [github/${data.creator}](http://github.com/${data.creator}).
`;
}