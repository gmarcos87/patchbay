const nest = require('depnest')

exports.gives = nest('app.page.errors')

exports.needs = nest({
  'app.html.scroller': 'first'
})

exports.create = function (api) {
  return nest('app.page.errors', errorsPage)

  function errorsPage () {
    var { container, content } = api.app.html.scroller()

    container.id = '/errors'
    container.classList = ['-errors']

    // add a dummy entry in the list

    return { container, content }
  }
}
