export interface IInfoList {
  AGE: TDataRow;
  RESIDENCE: TDataRow;
  "MAIN ROLE": TDataRow;
  ADDRESS: TDataRow;
  PHONE: TDataRow;
  "E-MAIL": TDataRow;
}

type TDataRow = {
  LABEL: string;
  INFO: string;
};
