const current = document.querySelectorAll('.p-time')
const previous = document.querySelectorAll('.s-time')



const daily = document.querySelector('.daily')
const weekly = document.querySelector('.weekly')
const monthly = document.querySelector('.monthly')

const data = [{
        "title": "Work",
        "timeframes": {
            "daily": {
                "current": 5,
                "previous": 7
            },
            "weekly": {
                "current": 32,
                "previous": 36
            },
            "monthly": {
                "current": 103,
                "previous": 128
            }
        }
    },
    {
        "title": "Play",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 2
            },
            "weekly": {
                "current": 10,
                "previous": 8
            },
            "monthly": {
                "current": 23,
                "previous": 29
            }
        }
    },
    {
        "title": "Study",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 7
            },
            "monthly": {
                "current": 13,
                "previous": 19
            }
        }
    },
    {
        "title": "Exercise",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 5
            },
            "monthly": {
                "current": 11,
                "previous": 18
            }
        }
    },
    {
        "title": "Social",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 3
            },
            "weekly": {
                "current": 5,
                "previous": 10
            },
            "monthly": {
                "current": 21,
                "previous": 23
            }
        }
    },
    {
        "title": "Self Care",
        "timeframes": {
            "daily": {
                "current": 13,
                "previous": 1
            },
            "weekly": {
                "current": 2,
                "previous": 2
            },
            "monthly": {
                "current": 7,
                "previous": 11
            }
        }
    }
]


daily.addEventListener('click', updateDaily)
weekly.addEventListener('click', updateWeekly)
monthly.addEventListener('click', updateMonthly)





function updateDaily() {

    for (let index = 0; index < current.length; index++) {
        current[index].innerHTML = `${data[index].timeframes.daily.current}` + 'hrs'
        previous[index].innerHTML = `${data[index].timeframes.daily.previous}` + 'hrs'


    }
}

function updateWeekly() {

    for (let index = 0; index < current.length; index++) {
        current[index].innerHTML = `${data[index].timeframes.weekly.current}` + 'hrs'
        previous[index].innerHTML = `${data[index].timeframes.weekly.previous}` + 'hrs'


    }
}

function updateMonthly() {

    for (let index = 0; index < current.length; index++) {
        current[index].innerHTML = `${data[index].timeframes.monthly.current}` + 'hrs'
        previous[index].innerHTML = `${data[index].timeframes.monthly.previous}` + 'hrs'


    }
}