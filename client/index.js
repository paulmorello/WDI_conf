require('./styles/main.scss')
require('./styles/reset.scss')
require('./styles/form.scss')
require('./styles/seat-reserver.scss')
require('./styles/speaker-section.scss')
require('./styles/sponsors-section.scss')
require('./styles/location-section.scss')
require('./styles/footer-section.scss')
require('./styles/media-queries.scss')
require('./styles/confirmation.scss')
const renderLandingPage = require('./views/landing-page.js')
const $ = require('jquery')
const stripeResponseHandler = require('./scripts/stripe-payment.js')

renderLandingPage()
