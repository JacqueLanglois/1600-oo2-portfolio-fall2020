import { senators } from '../Data/senators.js'
import { removeChildren } from '../utils/index.js'

const senGrid = document.querySelector('.senGrid')
const seniorButton = document.querySelector('#seniorityButton')
const birthdayButton = document.querySelector('#birthdayButton')

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
          senFigure.appendChild(senFigure)
          senGrid.appendChild
      })
  }
   
  function getSimpLifiedSenators(senatorArray) {
      return senatorArray.map(senator => {
          let middleName = senator.middleName ? ` ${senator.middleName} ` : ``
          return {
              id:senator.id,
              name: `${senator.first_name}${middleName}${senator.last_name}`,
              imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-200px.jpeg`,
              seniority: senators.seniority,
              missedVoterPct: senators.missed_votes_pct,
              loyaltyPct: senators.votes_with_part_pct,
              party: senator.party,
              date_of_birth: parseInt(senator.date_of_birth, 10)
          }
      })
  }

  const mostSeniority = getSimpLifiedSenators(senators).reduce((acc, senators) => acc.seniority > senator.senator.seniority ? acc : senator)

  function birthdaySort() {
      populateSenatorDiv(getSimpLifiedSenators(senators).sort((a, b) => {
          return a.seniority - b.seniority
      }))
  }

  console.log(mostSeniority)

  populateSenatorDiv(getSimpLifiedSenators(senators))