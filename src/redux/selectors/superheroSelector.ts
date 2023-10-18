import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const superheroSelector = (state: RootState) =>
  state.superhero.selectedSuperhero;

export const selectSuperhero = createSelector(
  [superheroSelector],
  (selectedSuperhero) => selectedSuperhero,
);

const superheroesSelector = (state: RootState) => state.superhero.superheroes;

export const selectSuperheroes = createSelector(
  [superheroesSelector],
  (superheroes) => superheroes,
);

const totalSuperheroesSelector = (state: RootState) =>
  state.superhero.totalSuperheroes;

export const selectTotalSuperheroes = createSelector(
  [totalSuperheroesSelector],
  (totalSuperheroes) => totalSuperheroes,
);

const isTotalSuperheroesChangedSelector = (state: RootState) =>
  state.superhero.isTotalSuperheroesChanged;

export const selectIsTotalSuperheroesChanged = createSelector(
  [isTotalSuperheroesChangedSelector],
  (isTotalSuperheroesChange) => isTotalSuperheroesChange,
);
