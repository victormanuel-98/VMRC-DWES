import request from 'supertest';
import app from '../src/app.js';
import jwt from 'jsonwebtoken';

describe('FavoriteController errores', () => {
  const token = jwt.sign({ id: 'fakeid', usuario: 'test', rol: 'usuario' }, 'test_jwt_secret_2026');

  test('Obtener favoritos con usuario inválido responde 401', async () => {
    const res = await request(app)
      .get('/api/favoritos')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(401);
    expect(res.body.mensaje).toMatch(/no autorizado|token/i);
  });
});
