// Mock Data
const headerLinksData = ['Main', 'Gallery', 'News', 'Profile']
const homeCardsCount = [1, 2, 3, 4, 5, 6];


const createElementWithClass = (tagName, className) => {
    const element = document.createElement(`${tagName}` );
    element.classList.add(`${className}`)
    return element

};


//Root
const root = document.getElementById('root');

// Create container
 const headerContainer = createElementWithClass('div','container' );
 const mainContainer = createElementWithClass('div','container' );
const getContainer = document.getElementsByClassName('container')



//create Header & Components
const header = createElementWithClass('header', 'header');
const headerFlexBox = createElementWithClass('div', 'headerFlexBox')
const headerBackground = createElementWithClass('div', 'headerBackground')
 let headerFlexBoxItem;
const headerFlexBoxItemBox = createElementWithClass('div', 'headerFlexBoxItemBox')
const headerFlexBoxItemImage = createElementWithClass('div', 'headerFlexBoxItemImage')
const headerFlexBoxItemText = createElementWithClass('h3', 'headerFlexBoxItemText')
const headerFlexBoxItemTelephone = createElementWithClass('h3', 'headerFlexBoxItemTelephone')
const headerFlexBoxItemContent = createElementWithClass('h3', 'headerFlexBoxItemContent')

//main
const main = createElementWithClass('main' , 'main')



//home  & components
const homeFlexBox = createElementWithClass('div' , 'homeFlexBox')
const mainSection = createElementWithClass('Section' , 'home')


//appends

root.appendChild(header)

//header appends
header.appendChild(headerContainer)
header. appendChild(headerBackground)
getContainer[0].appendChild(headerFlexBox)
for (let i = 0; i <=1; i++) {
     headerFlexBoxItem = createElementWithClass('div', 'headerFlexBoxItem')
    headerFlexBox.appendChild(headerFlexBoxItem)
}
const getHeaderFlexBoxItems = document.getElementsByClassName('headerFlexBoxItem')

getHeaderFlexBoxItems[0].appendChild(headerFlexBoxItemBox)
headerFlexBoxItemBox.appendChild(headerFlexBoxItemImage)

headerLinksData.map((item) => {
    const headerFlexBoxItemLinks = createElementWithClass('div', 'headerFlexBoxItemLinks')
    headerFlexBoxItemBox.appendChild(headerFlexBoxItemLinks)
    headerFlexBoxItemLinks.innerText = item

})

getHeaderFlexBoxItems[0].appendChild(headerFlexBoxItemText)
headerFlexBoxItemText.innerText = 'Найдено 349 котов'
getHeaderFlexBoxItems[1].appendChild(headerFlexBoxItemTelephone)
headerFlexBoxItemTelephone.innerText = '+544 3490 00000'
getHeaderFlexBoxItems[1].appendChild(headerFlexBoxItemContent)
headerFlexBoxItemContent.innerText = 'Звони скорее!'

//main appends
root.appendChild(main)
main.appendChild(mainSection)
mainSection.appendChild(mainContainer)
mainContainer.appendChild(homeFlexBox)
homeCardsCount.map(() =>{
    const homeFlexBoxItem = createElementWithClass('div' , 'homeFlexBoxItem')
    const homeFlexBoxItemImage = createElementWithClass('div' , 'homeFlexBoxItemImage')
    const homeFlexBoxItemButton = createElementWithClass('div' , 'homeFlexBoxItemButton')
    const homeFlexBoxItemHeart = createElementWithClass('div' , 'homeFlexBoxItemHeart')
    const homeFlexBoxItemText = createElementWithClass('div' , 'homeFlexBoxItemText')
    const homeFlexBoxItemTitle = createElementWithClass('div', 'homeFlexBoxItemTitle')

    homeFlexBox.appendChild(homeFlexBoxItem)
    homeFlexBoxItem.appendChild(homeFlexBoxItemImage)
    homeFlexBoxItem.appendChild(homeFlexBoxItemText)
    homeFlexBoxItem.appendChild(homeFlexBoxItemButton)
    homeFlexBoxItem.appendChild(homeFlexBoxItemHeart)
    homeFlexBoxItem.appendChild(homeFlexBoxItemHeart)
    homeFlexBoxItemText.innerText = 'ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in'
    homeFlexBoxItemButton.innerText = 'Купить'
    homeFlexBoxItemButton.addEventListener('click', () => {
        if (homeFlexBoxItemButton.innerText === 'Продан' ) {
            homeFlexBoxItemButton.innerText = 'Купить'
            homeFlexBoxItemButton.style.background = '#6EBBD3'
        } else {
            homeFlexBoxItemButton.style.background = '#1F2021'
            homeFlexBoxItemButton.innerText = 'Продан'
        }


    })
})








window.onload = function () {


    };

