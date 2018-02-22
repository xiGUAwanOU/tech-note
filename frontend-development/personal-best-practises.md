# Personal Best Practises

## 1. Component & View

In some framework like Vue.js, the line between component and view is vague (this seems to have been changed since `vue-cli@3.0.0-beta.1`, the default project structure has different folders for components and views). However, to have a clean front-end project. I think the line between component and view should be clear. 

Intuitively speaking, a component should be a small and highly reusable piece of UI; a view should be a place where we could put components into and write logics to let them work together. However, these definitions cannot distinguish them effectively. Since a view could also be small and being reused in another place, and a component could also be made of other components.
