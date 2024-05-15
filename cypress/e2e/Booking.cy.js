describe('Booking API Tests', () => {
    let bookingId;
    const bookingDetails = {
      firstname: "Jim",
      lastname: "Brown",
      totalprice: 111,
      depositpaid: true,
      bookingdates: {
        checkin: "2023-01-01",
        checkout: "2023-01-05"
      },
      additionalneeds: "Breakfast"
    };
  
    const updatedBookingDetails = {
      firstname: "Jim",
      lastname: "Brown",
      totalprice: 111,
      depositpaid: true,
      bookingdates: {
        checkin: "2023-01-01",
        checkout: "2023-01-10"  // Updated checkout date
      },
      additionalneeds: "Lunch"  // Updated additional needs
    };
  
    it('a) Create a booking', () => {
      cy.request('POST', 'https://restful-booker.herokuapp.com/booking', bookingDetails)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('bookingid');
          bookingId = response.body.bookingid;
          cy.log(`Booking ID: ${bookingId}`);
        });
    });
  
    it('b) Get the booking created above', () => {
      cy.request('GET', `https://restful-booker.herokuapp.com/booking/${bookingId}`)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.deep.equal(bookingDetails);
        });
    });
  
    it('c) Update the booking', () => {
      // First, we need to authenticate to update a booking
      cy.request('POST', 'https://restful-booker.herokuapp.com/auth', {
        username: 'admin',
        password: 'password123'
      }).then((authResponse) => {
        expect(authResponse.status).to.eq(200);
        const token = authResponse.body.token;
  
        // Update the booking
        cy.request({
          method: 'PUT',
          url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
          headers: {
            Cookie: `token=${token}`
          },
          body: updatedBookingDetails
        }).then((updateResponse) => {
          expect(updateResponse.status).to.eq(200);
          expect(updateResponse.body).to.deep.equal(updatedBookingDetails);
        });
      });
    });
  });
  