import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import User from  '../database/models/User'
import { Response } from 'superagent';
chai.use(chaiHttp);
const { expect } = chai;
describe('Seu teste', () => {

  let chaiHttpResponse: Response;
 

  it('Testando o metodo post rota login email vazio', async () => {
    chaiHttpResponse = await chai
       .request(app).post('/login').send({
        "email": "",
        "password": "errorpassword"
      });

    expect(chaiHttpResponse.status).to.be.deep.equal(400);
  });

  it('Testando o metodo post rota login usuario invalido', async () => {
    chaiHttpResponse = await chai
       .request(app).post('/login').send({
        "email": "erroEmail@gmail.com",
        "password": "errorpassword"
      });
    expect(chaiHttpResponse.status).to.be.deep.equal(401);
  });
  it('Testando o metodo post rota login email invalido', async () => {
    chaiHttpResponse = await chai
       .request(app).post('/login').send({
        "email": "errorTeste",
        "password": "errorTeste"
      });

    expect(chaiHttpResponse.status).to.be.deep.equal(401);
  });

  it('Testando o metodo post rota login password invalido', async () => {
    chaiHttpResponse = await chai
       .request(app).post('/login').send({
        "email": "errorTeste@gmail.com",
        "password": "error"
      });

    expect(chaiHttpResponse.status).to.be.deep.equal(401);
  });

  it('Testando o metodo post rota login user valido', async () => {
    chaiHttpResponse = await chai
       .request(app).post('/login').send({
        "email": "admin@admin.com",
        "password": "secret_admin"
      });

    expect(chaiHttpResponse.status).to.be.deep.equal(200);
  });

});