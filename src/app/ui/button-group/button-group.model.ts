export interface ButtonGroup {
  id: string;
  label: string;
}

export interface ButtonGroupItem extends ButtonGroup {
  active: boolean;
}
