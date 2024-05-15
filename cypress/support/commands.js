import AllPage from "../pageObjects/Allpage"
import jsonData from "../fixtures/example.json"

const allPage = new AllPage();




Cypress.Commands.add('onafriq', () => {

    const email = jsonData.email
    const password = jsonData.password

    // Step 2
    allPage.getSignSignUp().click()
    allPage.getLoginEmail().type(email)
    allPage.getLoginPass().type(password)
    allPage.getLoginBtn().click()
    //cy.contains('Logged in as Onafriq')

    // Step 3
    let products = []

        // Loop through each product element
        cy.get('.productinfo').each(($product) => {
            // Extract label and price information
            const label = $product.find('p').text().trim()
            const price = $product.find('h2').text().trim()

            // Push label and price to the products array
            products.push({ label, price })
        }).then(() => {
            // Sort products by price from low to high
            products.sort((a, b) => {
                // Extract price values and convert to integers for comparison
                const priceA = parseInt(a.price.replace('Rs. ', ''))
                const priceB = parseInt(b.price.replace('Rs. ', ''))

                return priceA - priceB
            })

            // Print sorted products to console
            products.forEach(product => {
                cy.log(`Label: ${product.label}, Price: ${product.price}`)
            })
        })

    // Step 4
    allPage.getWomen().should('contain', 'Women').scrollIntoView()
    cy.get(':nth-child(1) > .panel-heading > .panel-title > a > .badge > .fa').click()
    allPage.getDress().should('contain', 'Dress').click()
    cy.wait(3000)
    allPage.getAddtoCart1().click()
    cy.wait(5000)
    allPage.getModal().within(() => {
        cy.contains('Added!')
        cy.contains('Your product has been added to cart.')
        cy.contains('View Cart')
        cy.contains('Continue Shopping').click()
    })
    cy.wait(2000)
    allPage.getAddtoCart2().click()
    cy.wait(2000)
    allPage.getModal().within(() => {
        cy.contains('Added!')
        cy.contains('Your product has been added to cart.')
        cy.contains('View Cart')
        cy.contains('Continue Shopping').click()
    })

    

    //Step 5
    const CardNum = jsonData.CardNum
    const Cardcvc = jsonData.Cardcvc
    const CardMnth = jsonData.CardMnth
    const CardYear = jsonData.CardYear

    allPage.getViewCart().click()
    allPage.getProceedtoChckOutBtn().click()
    allPage.getComments().type('Order placed.')
    allPage.getPlaceOrderBtn().click()
    cy.wait(5000)
    allPage.getCardName().type('Test Card')
    allPage.getCardNumber().type(CardNum)
    allPage.getCardCVC().type(Cardcvc)
    allPage.getCardExpMnth().type(CardMnth)
    allPage.getCardExpYear().type(CardYear)
    allPage.getPayAndConfirmOrderBtn().should('contain', 'Pay and Confirm Order').click()
    allPage.getOrderSuccess().should('contain', 'Congratulations! Your order has been confirmed!')
    })