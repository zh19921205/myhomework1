import React, { useMemo, useState } from 'react';

const IndexPage: React.FC = () => {
  const [state, setState] = useState({
    weather: 4,
    engineType: 'T3',
    engineSpeed: 3000,
    outsidetTemperature: 15,
    internalTemperature: 26,
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, field: string) => {
    setState((prevState) => {
      return { ...prevState, [field]: e.target.value }
    })
  };
  const { weather, engineType, engineSpeed, outsidetTemperature, internalTemperature } = state;

  const handleOutput = () => {
    let speed: string = '';
    switch (true) {
      case (engineSpeed < 3000):
        speed = 'smallSpeed';
        break;
      case (engineSpeed >= 3000 || engineSpeed <= 5000):
        speed = 'mediumSpeed';
        break;
      case (engineSpeed > 5000):
        speed = 'largeSpeed';
        break;
      default:
        break;
    };
    type speedConversionValue = Record<string, {
      [key: string]: number,
    }>;

    const speedConversionValueObj: speedConversionValue = {
      T3: {
        smallSpeed: 30,
        mediumSpeed: 60,
        largeSpeed: 100,
      },
      T5: {
        smallSpeed: 20,
        mediumSpeed: 40,
        largeSpeed: 60,
      },
      E6: {
        smallSpeed: 10,
        mediumSpeed: 20,
        largeSpeed: 50,
      },
    };

    const speedConversionValue = (speedConversionValueObj[engineType][speed] / (Math.abs(outsidetTemperature - internalTemperature) * weather)).toFixed(4);

    return speedConversionValue
  };

  const speedConversionValue = useMemo(handleOutput, [weather, engineType, engineSpeed, outsidetTemperature, internalTemperature,])

  return (
    <div>
      <form>
        <label htmlFor="weather">天气信息：</label>
        <select
          id='weather'
          name="weather"
          onChange={(e) => handleInput(e, 'weather')}
        >
          <option value={4}>优</option>
          <option value={3}>良</option>
          <option value={2}>中</option>
          <option value={1}>差</option>
        </select>
        <br />
        <label htmlFor="engineType">发动机型号：</label>
        <select
          id='engineType'
          name="engineType"
          onChange={(e) => handleInput(e, 'engineType')}
        >
          <option value="T3">T3</option>
          <option value="T5">T5</option>
          <option value="E6">E6</option>
        </select>
        <br />
        <label htmlFor="engineSpeed">发动机转速：</label>
        <input
          id='engineSpeed'
          type="number"
          value={engineSpeed}
          onChange={(e) => handleInput(e, 'engineSpeed')}
        />
        <br />
        <label htmlFor="outsidetTemperature">发动机外部温度：</label>
        <input
          id='outsidetTemperature'
          type="number"
          value={outsidetTemperature}
          onChange={(e) => handleInput(e, 'outsidetTemperature')}
        />
        <br />
        <label htmlFor="internalTemperature">发动机内部温度：</label>
        <input
          id='internalTemperature'
          type="number"
          value={internalTemperature}
          onChange={(e) => handleInput(e, 'internalTemperature')}
        />
        <br />
      </form>

      <div>
        输出
        <br />
        {speedConversionValue}
        <br />
      </div>
    </div>
  );
}
export default IndexPage;