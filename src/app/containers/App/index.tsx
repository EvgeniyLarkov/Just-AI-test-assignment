import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress, Typography } from '@material-ui/core';
import Settings from 'app/components/Settings';
import { ProfilesSection, Search, SelectedSection } from 'app/components';
import { RootState } from 'app/redux/ducks';
import { ProfileStates } from 'app/redux/ducks/types';
import { AppDispatch } from 'app/redux/store';
import { getUsers } from 'app/redux/ducks/profiles';
import { useStyles } from './styles';

const App: React.FC = () => {
  const styles = useStyles();

  const dispatch: AppDispatch = useDispatch();

  const { numberOfUsers } = useSelector(({ settings }: RootState) => settings);
  const { state } = useSelector(({ profiles }: RootState) => profiles);

  useEffect(() => {
    dispatch(getUsers(numberOfUsers));
  }, [dispatch, numberOfUsers]);

  const isFetched = state === ProfileStates.fetched;

  return (
    <main className={styles.root}>
      <div className={styles.wrapper}>
        <section className={styles.contentRelative}>
          <div className={`${styles.label} ${styles.sticky}`}>
            <Search />
          </div>
          {isFetched
            ? <ProfilesSection />
            : <div className={styles.progress}><CircularProgress /></div>}
        </section>
        <section className={`${styles.contentFixed}`}>
          <div className={styles.inner}>
            <div className={styles.label}>
              <Typography variant="h6">Избранные</Typography>
              <div className={styles.settings}>
                <Settings />
              </div>
            </div>
            <SelectedSection />
          </div>
        </section>
      </div>
    </main>
  );
};

export default App;
