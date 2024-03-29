const request = require('supertest');
const app = require('../app');

describe('POST /api/pricing/calculatePrice', () => {
  it('should calculate the price correctly', async () => {
    const response = await request(app)
      .post('/api/pricing/calculatePrice')
      .send({
        zone: 'central',
        organization_id: '005',
        total_distance: 12,
        item_type: 'perishable'
      });
    expect(response.statusCode).toBe(200);
    expect(response.body.total_price).toBeDefined();
  });
});
