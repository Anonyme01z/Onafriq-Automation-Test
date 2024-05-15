class AllPages {
      getSignSignUp(){
        return cy.get('.shop-menu > .nav > :nth-child(4) > a')
      }
      getLoginEmail(){
        return cy.get('[data-qa="login-email"]')
      }
      getLoginPass(){
        return cy.get('[data-qa="login-password"]')
      }
      getLoginBtn(){
        return cy.get('[data-qa="login-button"]')
      }
      getLoginAssertion(){
        return cy.get(':nth-child(10) > a')
      }
      getWomen(){
        return cy.get(':nth-child(1) > .panel-heading > .panel-title')
      }
      getDress(){
        return cy.get('#Women > .panel-body > ul > :nth-child(1) > a')
      }
      getAddtoCart1(){
        return cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn')
      }
      getAddtoCart2(){
        return cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn')
      }
      getViewCart(){
        return cy.get('.shop-menu > .nav > :nth-child(3) > a')
      }
      getModal(){
        return cy.get('.modal-content')
      }
      getProceedtoChckOutBtn(){
        return cy.get('.col-sm-6 > .btn')
      }
      getComments(){
        return cy.get('.form-control')
      }
      getPlaceOrderBtn(){
        return cy.get(':nth-child(7) > .btn')
      }
      getCardName(){
        return cy.get('[data-qa="name-on-card"]')
      }
      getCardNumber(){
        return cy.get('[data-qa="card-number"]')
      }
      getCardCVC(){
        return cy.get('[data-qa="cvc"]')
      }
      getCardExpMnth(){
        return cy.get('[data-qa="expiry-month"]')
      }
      getCardExpYear(){
        return cy.get('[data-qa="expiry-year"]')
      }
      getPayAndConfirmOrderBtn(){
        return cy.get('[data-qa="pay-button"]')
      }
      getOrderSuccess(){
        return cy.get('.col-sm-9 > p')
      }

}
export default AllPages;