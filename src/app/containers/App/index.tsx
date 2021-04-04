import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import { ProfilesSection, Search, SelectedSection } from 'app/components';
import { RootState } from 'app/redux/ducks';
import { ProfileStates } from 'app/redux/ducks/types';
import { AppDispatch } from 'app/redux/store';
import { getUsers } from 'app/redux/ducks/profiles';
import { useStyles } from './styles';

const App: React.FC = () => {
  const styles = useStyles();
  const dispatch: AppDispatch = useDispatch();
  const { state } = useSelector(({ profiles }: RootState) => profiles);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const isFetched = state === ProfileStates.fetched;

  return (
    <main className={styles.root}>
      <div className={styles.wrapper}>
        <section className={styles.content}>
          <div className={styles.label}>
            <Search />
          </div>
          {isFetched && <ProfilesSection />}
        </section>
        <section className={styles.content}>
          <div className={styles.label}>
            <Typography variant="h6">Избранные</Typography>
          </div>
          <SelectedSection />
        </section>
      </div>
    </main>
  );
};

export default App;
