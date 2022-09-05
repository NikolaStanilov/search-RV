import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';
import 'antd/dist/antd.min.css';
import { filterData, requestRV } from './services/search.service.js';
import Search from './views/Search/Search';
import { Spin } from 'antd';

const App = () => {

  const [listRV, setListRV] = useState({});
  const [search, setSearch] = useState('');
  const [filteredRV, setFilteredRV] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)

    requestRV()
      .then((result) => setListRV(result))
      .then(setIsLoading(false))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    setIsLoading(true);

    setFilteredRV(
      filterData(search, listRV)
    );

    setIsLoading(false);
  }, [search, listRV]);

  return (
    <div className="App">
      <Spin size='large' spinning={isLoading}></Spin>
      <Search filteredRV={filteredRV} setSearch={setSearch} listRV={listRV}></Search>
    </div>
  );
}

export default App;
