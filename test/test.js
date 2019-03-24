const chai = require('chai');
const supertest = require('supertest');
const expect = chai.expect;
const server = require('../app.js');
const request = supertest(server);


// simple test 
describe("GET /books", function(){
    it("it should returns 4 books", function(done){
        request.get('/books')
        .expect(200)
        .end(function(err, res){
            expect(res.body).to.have.lengthOf(4);
            done(err);
            server.close();
        });
    });
})
