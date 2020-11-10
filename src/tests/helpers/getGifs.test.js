import { getGifs } from './../../helpers/getGifs';

describe('getGifts fetch', () => {
  test('should 10 item', async () => {
    const gifs = await getGifs('One Punch');
    expect(gifs.length).toBe(10);
  });

  test('should not data', async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });
});
