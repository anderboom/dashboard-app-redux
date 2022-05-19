export const selectAllPositions = (state) => state.positions;

export const selectVisiblePositions = (state, filter = []) => {
  if (filter.length === 0) return state.positions;
  return state.positions.filter((position) => {
    const positionFilters = [].concat(
      position.role,
      position.level,
      ...position.languages,
      ...position.tools
    );
    return filter.every((filter) => positionFilters.includes(filter));
  });
};
