import { senators } from '../Data/senators.js'
import { removeChildren } from '../utils/index.js'

const senGrid = document.querySelector('.senGrid')
const seniorButton = document.querySelector('#seniorityButton')
const birthdayButton = document.querySelector('#birthdayButton')

seniorButton.addEventListener('click', () => {
    senioritySort()
})

birthdayButton.addEventListener('click', () => {
    birthdaySort()
})

function populateSenatorDiv(simpleSenators) {
    removeChildren(senGrid)
    simpleSenators.forEach(senator => {
        let senDiv = document.createElement('div')
        let senFigure = document.createElement('figure')
        let figImg = document.createElement('img')
        let figCaption = document.createElement('figCaption')
        let partyIcon = document.createElement('i')
        if (senator.party === 'R') partyIcon.className = 'fas fa-republican'
        if (senator.party === 'D') partyIcon.className = 'fas fa-democrat'
        if (senator.party === 'ID') partyIcon.className = 'fas fa-star'
        figImg.src = senator.imgURL
        figCaption.textContent = senator.name

        figCaption.appendChild(partyIcon)
        senFigure.appendChild(figImg)
        senFigure.appendChild(figCaption)
        senDiv.appendChild(senFigure)
        senGrid.appendChild(senDiv)
    })
}

function getSimplifiedSenators(senatorArray) {
    return senatorArray.map(senator => {
        let middleName = senator.middleName ? `${senator.middleName}` : ` `
        return {
            id: senator.id,
            name: `${senator.first_name}${middleName}${senator.last_name}`,
            imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-200px.jpeg`,
            seniority: parseInt(senator.seniority, 10),
            missedVotesPct: senator.missed_votes_pct,
            party: senator.party,
            loyaltyPct: senator.votes_with_party_pct,
            date_of_birth: parseInt(senator.date_of_birth, 10)
        }
    })
}

const mostSeniority = getSimplifiedSenators(senators).reduce((acc, senator) => acc.seniority > senator.seniority ? acc : senator)

function birthdaySort() {
    populateSenatorDiv(getSimplifiedSenators(senators).sort((a, b) => {
        return a.date_of_birth - b.date_of_birth
    }))
}

function senioritySort() {
    populateSenatorDiv(getSimplifiedSenators(senators).sort((a, b) => {
        return a.seniority - b.seniority
    }))
}

console.log(mostSeniority)

populateSenatorDiv(getSimplifiedSenators(senators))