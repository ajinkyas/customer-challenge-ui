# customer-challenge-ui

This README outlines the details of collaborating on this Ember application.
This app fetches the customer data from the server and allows the user to view and edit the customer record. You can add or remove the customer properties.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://cli.emberjs.com/release/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd customer-challenge-ui`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint`
* `npm run lint:fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Known issues

* 'Remove attribute' not implemented
* 'Discard changes' not implemented
* Pagination UI is not implemented
* Email should be immutable
* Navigation not opening on mobile (need more testing on mobile)
* `timestamp` conversion is pending
* Navigation bar is redundant
* Highlight current nav link is pending

### Future work

* Explore EmberData and use if applicable
* Use PATCH instead of PUT for customer update
* Add more tests
* Improve UX

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://cli.emberjs.com/release/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
