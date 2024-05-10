//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/eligibility-route', function (request, response) {
    const button = request.session.data['button']
    const course = request.session.data['course-type']
    if (course) {
        request.session.data['question-answered'] = 'yes'
    }
    if (button == 'primary') {
        response.redirect("/v1/eligibility2")
    } else if (button == 'secondary') {
        response.redirect("/v1/eligibility")

    }
})

router.post('/eligibility-route', function (request, response) {

    var course = request.session.data['eligibility1']
    if (course) {
        request.session.data['question-answered'] = 'yes'
    }
    response.redirect("/v1/eligibility")
})

router.post('/eligibility-route', function (request, response) {
    const button = request.session.data['button']
    const course = request.session.data['course-type']
    if (course) {
        request.session.data['question-answered'] = 'yes'
    }
    if (button == 'primary') {
        response.redirect("/v1/eligibility3")
    } else if (button == 'secondary') {
        response.redirect("/v1/eligibility")

    }
})

router.post('/eligibility-route', function (request, response) {

    var course = request.session.data['eligibility2']
    if (course) {
        request.session.data['question-answered'] = 'yes'
    }
    response.redirect("/v1/eligibility")
})

router.post('/eligibility-route', function (request, response) {
    const button = request.session.data['button']
    const course = request.session.data['course-type']
    if (course) {
        request.session.data['question-answered'] = 'yes'
    }
    if (button == 'primary') {
        response.redirect("/v1/eligibility4")
    } else if (button == 'secondary') {
        response.redirect("/v1/eligibility")

    }
})

router.post('/eligibility-route', function (request, response) {

    var course = request.session.data['eligibility3']
    if (course) {
        request.session.data['question-answered'] = 'yes'
    }
    response.redirect("/v1/eligibility")
})