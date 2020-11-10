import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from './../../hooks/useFetchGifs';
describe('test custom hook useFetchGifs', () => {
  test('should be show initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('hello'));
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });
  test('should be return to array imgs and loafing is false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('hello'));
    await waitForNextUpdate();

    const { data, loading } = result.current;
    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
