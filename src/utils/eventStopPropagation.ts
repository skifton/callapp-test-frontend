export const eventStopPropagation = (
  event: React.MouseEvent<HTMLButtonElement>
) => {
  event.stopPropagation();
};
