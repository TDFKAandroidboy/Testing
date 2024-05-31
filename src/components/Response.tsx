const generateMockData = (startId: number, count: number) => {
  const mockData = [];
  for (let i = startId; i < startId + count; i++) {
    const id = i;
    const uri = `https://picsum.photos/id/${id}/200/300`;
    mockData.push({ id, uri });
  }
  return mockData;
};

const startId = 237; // Start ID from where you want to generate mock data
const count = 50; // Number of mock data items you want to generate

export const mockData = generateMockData(startId, count);
export const mockData2 = generateMockData(startId + count, count);
export const mockData3 = generateMockData(startId + count * 2, count);
