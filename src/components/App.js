import React, { useState, useEffect } from 'react';
import api from '../lib/api';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import ReportTable from './ReportTable';
import useStyles from './style'
import ErrorNotification from './ErrorNotification'


export const App = () => {
  const classes = useStyles();
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null)
  const [direction, setDirection] = useState('asc')

  const getAllData = async () => {
    setLoading(true)
    try {
      const data = await api.getUsersDiff();
      setLoading(false)
      setErrorMessage(null)
      return data
    } catch (error) {
      setLoading(false)
      setErrorMessage("we have problems fetching your data.Please try again")
    }
  }

  useEffect(() => {
    getAllData()
      .then((response) => setData(response.data))
  }, [])

  // handle load more
  const handleButtonClick = async () => {
    const response = await getAllData()
    if (response) { setData(response.data) }
  };

  //handle sort by Date 
  const handleRequestSort = () => {
    direction === 'asc' ? setDirection('desc') : setDirection('asc')
    setData([...data].reverse())
  }


  return (
    <Container className="app" fixed>
      <Box data-testid="app-box" m={2}>
        <ReportTable reports={data} sortHandler={handleRequestSort} direction={direction} />
        <div>
          {loading && <div ><Box className={classes.box}><CircularProgress /></Box></div>}
          {!loading && <div className={classes.root} > <Button variant="contained" color="primary" onClick={handleButtonClick}> {errorMessage ? 'retry' : 'load more'}</Button></div>}
          {errorMessage && <ErrorNotification message={errorMessage} />}
        </div>

      </Box>
    </Container>
  );
};

export default App;
