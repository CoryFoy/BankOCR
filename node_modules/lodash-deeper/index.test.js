var assertEquals = require('./test/support/assert-equals')

var sample
module.exports = {
  beforeEach: function () {
    sample = {
      id: 1,
      color: 'red',
      sub: [
        {
          id: 8,
          color: 'blue',
          sub: [
            {
              id: 4,
              color: 'red',
              sub: [
                {
                  id: 5,
                  color: 'red'
                }
              ]
            }
          ]
        },
        {
          id: 3,
          color: 'red'
        }
      ],
      extra: {
        bonus: {
          depth: {
            id: 6,
            color: 'red'
          }
        },
        nope: {
          id: 7,
          color: 'yellow'
        }
      },
      shallow: {
        id: 2,
        color: 'red'
      },
      shallow2: {
        id: 9,
        color: 'gray'
      }
    }
  },
  filtersStuff: function () {
    var result = this.subject.filterDeep(sample, function (object) {
      return object.color === 'red'
    })

    var expected = [
      sample,
      {
        id: 2,
        color: 'red'
      },
      {
        id: 3,
        color: 'red'
      },
      {
        id: 4,
        color: 'red',
        sub: [
          {
            id: 5,
            color: 'red'
          }
        ]
      },
      {
        id: 5,
        color: 'red'
      },
      {
        id: 6,
        color: 'red'
      }
    ]
    assertEquals(result, expected)
  },
  uniqVisited: function () {
    sample.loop = { uhOh: sample }

    var result = this.subject.filterDeep(sample, function (object) {
      return object.color === 'red'
    })

    var expected = [
      sample,
      {
        id: 2,
        color: 'red'
      },
      {
        id: 3,
        color: 'red'
      },
      {
        id: 4,
        color: 'red',
        sub: [
          {
            id: 5,
            color: 'red'
          }
        ]
      },
      {
        id: 5,
        color: 'red'
      },
      {
        id: 6,
        color: 'red'
      },
      sample
    ]
    assertEquals(result, expected)
  },
  uniqVisited2: function () {
    var parent = {}
    parent.children = [{
      name: 'pants',
      ancestors: [parent]
    }]

    var result = this.subject.filterDeep(parent, function (object) {
      return object.name === 'pants'
    })

    assertEquals(result, [{name: 'pants', ancestors: [parent]}])
  }
}
