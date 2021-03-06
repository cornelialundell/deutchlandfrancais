import Select from "react-select";

interface IBookingGuestsProps {
  guests: number | null | undefined;
  selectGuests(guests: number): void;
}

export const NumberOfPeople = (props: IBookingGuestsProps) => {

  const options = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
    { value: 6, label: 6 },
    { value: 7, label: 7 },
    { value: 8, label: 8 },
    { value: 9, label: 9 },
    { value: 10, label: 10 },
    { value: 11, label: 11 },
    { value: 12, label: 12 },
    { value: 13, label: 13 },
    { value: 14, label: 14 },
    { value: 15, label: 15 },
    { value: 16, label: 16 },
    { value: 17, label: 17 },
    { value: 18, label: 18 },
  ];

  return (
    <div>
      <p>Hur stort är ert sällskap?</p>
      <p>För större bokningar ring på vår telefon.</p>

      <Select data-testid="numofp"
        options={options}
        onChange={(event: { value: number; label: number } | null) => {
          if (event) {

            props.selectGuests(event.value);
          }
        }}
      />
    </div>
  );
};
