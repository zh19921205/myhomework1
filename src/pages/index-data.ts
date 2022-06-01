namespace SelectType {
  export type WeatherDataSourceTypeItem = {
    value: number | string;
    label: string;
  };
  export type WeatherDataSourceType = WeatherDataSourceTypeItem[]
}

const weatherDataSource: SelectType.WeatherDataSourceType = [
    { value: 4, label: '优' },
    { value: 3, label: '良' },
    { value: 2, label: '中' },
    { value: 1, label: '差' },
  ];
  const engineTypeDataSource: typeof weatherDataSource = [
    { value: 'T3', label: 'T3' },
    { value: 'T5', label: 'T5' },
    { value: 'E6', label: 'E6' },
  ]
  export {weatherDataSource, engineTypeDataSource, SelectType}