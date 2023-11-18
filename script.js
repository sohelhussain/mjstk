const nav = document.querySelector(`nav`)
const centerLogo = document.querySelector(`.center`);
const leftSection = document.querySelector(`.left-section`);
const rightSection = document.querySelector(`.right-section`);
const down = document.querySelector(`.down-section`);
const leftLeft = document.querySelector(`.left-section .lef-left`)
const leftRight = document.querySelector(`.left-section .lef-right`)
const leftImage = document.querySelector(`.left-img`);
const rightLeft = document.querySelector(`.right-section .lef-left`)
const rightRight = document.querySelector(`.right-section .lef-right`)
const rightImage = document.querySelector(`.right-img`);
const textBlock = document.querySelector(`.lef-left .lef-text`)
const rightTextBlock = document.querySelector(`.right-text`)
const userFooter = document.querySelector(`.lef-footer`);
const rightUserFooter = document.querySelector(`.right-footer`);
const moneyText = document.querySelector(`.lef-left .lef-text .money`)
const moneyTextBlock = document.querySelector(`.left-lef-price`)
const para = document.querySelector(`.lef-left .lef-text .clickpara`)
const rightPara = document.querySelector(`.right-para`)
const cross = document.querySelector(`.right-cross`)
const p1Btn = document.querySelector(`.left-section .left-lef-price button`);
const p2Btn = document.querySelector(`.right-section .left-lef-price button`);
var count = 1;


leftSection.addEventListener(`mouseenter`, () => {
    leftSection.style.width = `65%`
    rightSection.style.width = `35%`
    rightSection.style.left = `65%`
    leftImage.style.width = `70%`
    leftImage.style.height = `50%`
})
leftSection.addEventListener(`mouseleave`, () => {
    leftSection.style.width = `50%`
    rightSection.style.width = `50%`
    rightSection.style.left = `50%`
    rightTextBlock.style.display = `block`
    rightImage.style.display = `block`
    para.style.display = `none`
    moneyText.style.display = `none`
    leftLeft.style.position = `absolute`
    leftRight.style.position = `absolute`
    moneyTextBlock.style.alignItems =`start`
    moneyTextBlock.style.justifyContent =`start`
    userFooter.style.scale = 0
    leftImage.style.width = `90%`
    leftImage.style.height = `80%`
})
rightSection.addEventListener(`mouseenter`, () => {
    rightSection.style.width = `65%`
    leftSection.style.width = `35%`
    rightSection.style.left = `35%`
    rightImage.style.width = `70%`
    rightImage.style.height = `50%`
    rightImage.style.marginLeft = `0`
    rightImage.style.marginTop = `0`
})
rightSection.addEventListener(`mouseleave`, () => {
    rightSection.style.width = `50%`
    leftSection.style.width = `50%`
    rightSection.style.left = `50%`
    textBlock.style.display = `block`
    leftImage.style.display = `block`
    rightLeft.style.position = `absolute`
    rightRight.style.position = `absolute`
    rightImage.style.width = `90%`
    rightImage.style.height = `80%`
    rightUserFooter.style.scale = `0`
    rightPara.style.display = `none`
    // rightImage.style.marginLeft = `20%`
    // rightImage.style.marginTop = `20%`
})
p1Btn.addEventListener(`click`, () => {
        leftSection.style.width = `90%`
        rightSection.style.width = `10%`
        rightSection.style.left = `90%`
        leftLeft.style.position = `initial`
        leftRight.style.position = `initial`
        userFooter.style.scale = `1`
        para.style.display = `block`
        rightTextBlock.style.display = `none`
        rightImage.style.display = `none`
        moneyText.style.display = `block`
        moneyTextBlock.style.alignItems =`center`
        moneyTextBlock.style.justifyContent =`space-evenly`
        leftImage.style.width = `100%`
        leftImage.style.height = `90%`
})
p2Btn.addEventListener(`click`, () => {
    down.style.animationName= `slide`
    setTimeout(() => {
        nav.style.display = `none`
    }, 1000)
})
cross.addEventListener(`click`,() => {
    down.style.animationName = `revers`
})
rightSection.addEventListener(`click`, () => {
    leftSection.style.width = `10%`
    rightSection.style.width = `90%`
    rightSection.style.left = `10%`
    textBlock.style.display = `none`
    leftImage.style.display = `none`
    rightLeft.style.position = `initial`
    rightRight.style.position = `initial`
    rightUserFooter.style.scale = 1
    rightPara.style.display = `block`
    rightImage.style.marginLeft = `20%`
    rightImage.style.marginTop = `20%`
})