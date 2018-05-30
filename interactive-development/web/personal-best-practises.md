# Personal Best Practises

## 1. Take Bad Network Conditions Into Account

Since there are more and more mobile devices browsering the website. It is very important to have an idea about how will the website look like if the network is slow. There is a network throttling function in the development tools in most of the browsers. Using that, we can get an roughly idea about how the webpage will be look like while the network is slow.

## 2. Distinguish Between Pages and Components

Pages contains multiple components. Components can be reused in different pages. Http calls are happening in pages, but not in the components. Components are only resposible for displaying and editing data.

## 3. Avoid Huge Forms

Huge form containing thousands inputs is not only a painful part to implement and maintain, it is also creates a painful user experience. A good walk around could be making the form partially editable (the pencil icon shown at the top-right corner in each form panel).
