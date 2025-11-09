describe('API Automation Test, Data Akses',() => {
    it('List User', () => {
        cy.request({method:'GET', url:'https://reqres.in/api/users?page=2',
            headers: {
                'x-api-key' : 'reqres-free-v1'
            }})
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('data')
        })
    })

    it('Single User', () => {
        cy.request({method:'GET', url:'https://reqres.in/api/users/2',
            headers: {
                'x-api-key' : 'reqres-free-v1'
            }})
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.data).to.have.property('email')
            cy.log(JSON.stringify(response.body))
        })
    })

    it('Single User Not Found', () => {
        cy.request({method:'GET', url:'https://reqres.in/api/users/23',
            failOnStatusCode:false,
            headers: {
                'x-api-key' : 'reqres-free-v1'
            }})
        .then((response) => {
            expect(response.status).to.eq(404)
            expect(response.body).to.be.empty
        })
    })

    it('Create User', () => {
        cy.request({method:'POST',
            url:'https://reqres.in/api/users',
            body: {
                'name': 'morpheus',
                'job': 'leader'
            }, headers: {
                'x-api-key' : 'reqres-free-v1'
            }
        })
        .then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('name', 'morpheus')
        })
    })

    it('Update User dengan PUT', () => {
        cy.request({method:'PUT',
            url:'https://reqres.in/api/users/2',
            body: {
                'name': 'morpheus',
                'job': 'zion resident'
            }, headers: {
                'x-api-key' : 'reqres-free-v1'
            }
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('job', 'zion resident')
        })
    })

    it('Update User dengan PATCH', () => {
        cy.request({method:'PATCH',
            url:'https://reqres.in/api/users/2',
            body: {
                'name': 'morpheus',
                'job': 'zion resident'
            }, headers: {
                'x-api-key' : 'reqres-free-v1'
            }
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('job', 'zion resident')
        })
    })

    it('Delete User', () => {
        cy.request({method:'DELETE', url:'https://reqres.in/api/users/2', headers: {
                'x-api-key' : 'reqres-free-v1'
            }})
        .then((response) => {
            expect(response.status).to.eq(204)
        })
    })

    it('Login Succesfull', () => {
        cy.request({method:'POST',
            url:'https://reqres.in/api/login',
            body: {
                'email': 'eve.holt@reqres.in',
                'password': 'cityslicka'
            }, headers: {
                'x-api-key' : 'reqres-free-v1'
            }
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('token', 'QpwL5tke4Pnpja7X4')
        })
    })

    it('Login Unsuccesfull', () => {
        cy.request({method:'POST',
            url:'https://reqres.in/api/login', failOnStatusCode: false,
            body: {
                'email': 'peter@klaven'
            }, headers: {
                'x-api-key' : 'reqres-free-v1'
            }
        })
        .then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('error', 'Missing password')
        })
    })

    it('Register Succesfull', () => {
        cy.request({method:'POST',
            url:'https://reqres.in/api/register',
            body: {
                'email': 'eve.holt@reqres.in',
                'password': 'pistol'
            }, headers: {
                'x-api-key' : 'reqres-free-v1'
            }
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('id', 4)
            expect(response.body).to.have.property('token', 'QpwL5tke4Pnpja7X4')
        })
    })

    it('Register Unsuccesfull', () => {
        cy.request({method:'POST',
            url:'https://reqres.in/api/register', failOnStatusCode: false,
            body: {
                'email': 'sydney@fife'
            }, headers: {
                'x-api-key' : 'reqres-free-v1'
            }
        })
        .then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('error', 'Missing password')
        })
    })
});