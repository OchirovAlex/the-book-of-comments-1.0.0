const { expect } = require('chai');
const { query } = require('express');
const {userCreateQ} = require('./queries');
const {user} = require('./data');
const {gqlRequest} = require('../gqlRequest');


let respData = null;
let postData = null;

describe('USER CREATE', () => {
    describe('USER CREATE POSITIVE TESTS', () => {
        it('user create all fields', () => {
            postData = {
                query: userCreateQ,
                variables: user
            }
            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    respData = res.body;
                    //expect(respData).eq()
                    console.log(respData)
                    done()
                })
        })

        it('user create all fields', () => {
            
        })
    })

    describe('USER CREATE NEGATIVE TESTS', () => {
    
    })
})